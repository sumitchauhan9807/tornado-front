import { api } from '@/src/http-client/axios';
import { NextRequest, NextResponse } from 'next/server';
import Joi from 'joi';
import { STRAPI_TOKEN } from '@/env';
import fs from 'fs/promises';
import path from 'path';
const dateSchema = Joi.object({
  date: Joi.string()
    .pattern(/^\d{4}-\d{2}-\d{2}$/)
    .required(),
  openTime: Joi.string()
    .pattern(/^\d{2}:\d{2}$/)
    .allow(null)
    .required(),
  closeTime: Joi.string()
    .pattern(/^\d{2}:\d{2}$/)
    .allow(null)
    .required(),
  isWorking: Joi.boolean().required(),
});
export const employeeScheduleSchema = Joi.object({
  clientNumber: Joi.string().trim().required(),
  dates: Joi.array().items(dateSchema).min(1).required(),
});

export async function GET(request: NextRequest) {
  const clientNumber = request.nextUrl.searchParams.get('clientNumber');

  // Check if clientNumber exists
  if (!clientNumber) {
    return NextResponse.json({ error: 'clientNumber is required' }, { status: 400 });
  }

  try {
    const response = await api.get('/timezones', {
      params: {
        'filters[clientNumber][$eq]': clientNumber,
      },
    });

    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Failed to fetch timezones:', error);

    return NextResponse.json({ error: 'Failed to fetch timezones' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    // Get request body
    const body = await request.json();

    const { clientNumber, dates } = body;

    const { error, value } = employeeScheduleSchema.validate(body, { abortEarly: false });
    if (error) {
      return NextResponse.json({ error: 'Validation failed', details: error.details.map((detail) => detail.message) }, { status: 400 });
    }

    // 1. Find timezone record using employeeId
    const timezoneResponse = await api.get('/timezones', {
      params: {
        'filters[clientNumber][$eq]': clientNumber,
      },
    });

    const records = timezoneResponse.data?.data;

    if (!records?.length) {
      return NextResponse.json({ error: 'Timezone record not found' }, { status: 404 });
    }

    // 2. Get first matching record
    const timezoneRecord = records[0];

    // 3. Get documentId
    const documentId = timezoneRecord.documentId;

    if (!documentId) {
      return NextResponse.json({ error: 'documentId not found' }, { status: 404 });
    }
    const existingSchedule = timezoneRecord.schedule;
    const updatedSchedule = updateSchedule(existingSchedule, dates);
    // const filePath = path.join(process.cwd(), "data", "schedule.json");
    // await fs.mkdir(path.dirname(filePath), { recursive: true });

    // await fs.writeFile(
    //   filePath,
    //   JSON.stringify(updatedSchedule, null, 2),
    //   "utf-8"
    // );

    // return NextResponse.json({
    //   success: true,
    //   message: "Schedule saved successfully",
    // });
    // 4. Update using documentId
    const updateResponse = await api.put(
      `/timezones/${documentId}`,
      {
        data: {
          schedule: updatedSchedule,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${STRAPI_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
    );

    // 5. Return updated record
    return NextResponse.json(updateResponse.data);
  } catch (error: any) {
    console.error('PUT API error:', error);

    return NextResponse.json(
      {
        error: 'Failed to update timezone',
        message: error?.response?.data?.error?.message || error?.response?.data?.message || error?.message,
      },
      {
        status: error?.response?.status || 500,
      }
    );
  }
}

function updateSchedule(scheduleData, dates) {
  // Create a lookup for fast access:
  // "2026-01-01" => { openTime, closeTime, isWorking }
  const dateMap = new Map(
    dates.map((item) => [
      item.date,
      {
        openTime: item.openTime,
        closeTime: item.closeTime,
        isWorking: item.isWorking,
      },
    ])
  );

  const year = 2026;

  const updatedSchedule = scheduleData.map((month) => {
    const monthIndex = new Date(`${month.name} 1, ${year}`).getMonth();

    const updatedDays = month.days.map((day) => {
      // Build YYYY-MM-DD
      const dateKey = [year, String(monthIndex + 1).padStart(2, '0'), String(day.date).padStart(2, '0')].join('-');

      const newDate = dateMap.get(dateKey);

      // If incoming dates doesn't contain this date,
      // keep the existing values
      if (!newDate) {
        return day;
      }

      return {
        ...day,
        openTime: newDate.openTime,
        closeTime: newDate.closeTime,
        isWorking: newDate.isWorking,
      };
    });

    return {
      ...month,
      days: updatedDays,
    };
  });

  return updatedSchedule;
}
