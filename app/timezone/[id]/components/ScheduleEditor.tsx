'use client';

import React, { useState } from 'react';
import {TEST_CAL} from './calander'

type Day = {
  wd: string;
  date: number;
  isWorking: boolean;
  openTime: string;
  closeTime: string;
};

type Month = {
  name: string;
  firstDay: number;
  days: Day[];
};

const year = 2026

function getYearCalendar(year: number): Month[] {
  // return TEST_CAL
  const months: Month[] = [];

  for (let month = 0; month < 12; month++) {
    const firstDate = new Date(year, month, 1);

    const monthName = firstDate.toLocaleString('en-US', {
      month: 'long',
    });

    const firstDay = firstDate.getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const days: Day[] = [];

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);

      const weekday = date.toLocaleString('en-US', {
        weekday: 'long',
      });

      const isWorking = weekday !== 'Sunday';

      days.push({
        wd: weekday,
        date: day,
        isWorking,
        openTime: isWorking ? '09:00' : '',
        closeTime: isWorking ? '18:00' : '',
      });
    }

    months.push({
      name: monthName,
      firstDay,
      days,
    });
  }

  return months;
}

export default function ScheduleEditor({data}) {
  // console.log(data,"ScheduleEditorScheduleEditorScheduleEditor")
  // const [calendar, setCalendar] = useState<Month[]>(() => getYearCalendar(year));
  const [calendar, setCalendar] = useState<Month[]>(data.schedule);

  // Date range selection
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Range editor state
  const [isWorking, setIsWorking] = useState(true);
  const [openTime, setOpenTime] = useState('09:00');
  const [closeTime, setCloseTime] = useState('18:00');

  const [rangeError, setRangeError] = useState('');

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  /*
   * Convert a calendar date into YYYY-MM-DD.
   *
   * Using strings avoids timezone problems and allows
   * simple date comparisons.
   */
  const getDateKey = (monthIndex: number, day: number) => {
    return `${year}-${String(monthIndex + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  };

  /*
   * Select a calendar date.
   *
   * First click:
   *   Start date
   *
   * Second click:
   *   End date
   *
   * Once a complete range exists, clicking another date
   * starts a new range.
   *
   * If the second date is before the first date, the dates
   * are automatically ordered.
   */
  const selectDate = (monthIndex: number, day: Day) => {
  const dateKey = getDateKey(monthIndex, day.date);

  setRangeError('');

  /*
   * No selection yet OR an existing range is complete:
   * start a new range.
   */
  if (!startDate || endDate) {
    setStartDate(dateKey);
    setEndDate('');

    // Load clicked date's existing settings
    setIsWorking(day.isWorking);
    setOpenTime(day.openTime || '09:00');
    setCloseTime(day.closeTime || '18:00');

    return;
  }

  /*
   * Start exists but end does not.
   * The clicked date becomes the end date.
   */
  if (startDate && !endDate) {
    if (dateKey < startDate) {
      setEndDate(startDate);
      setStartDate(dateKey);
    } else {
      setEndDate(dateKey);
    }

    return;
  }
};

  /*
   * Apply editor values to the selected date range.
   */
  const applyToDateRange = () => {
    setRangeError('');

    if (!startDate || !endDate) {
      setRangeError('Please select both a start date and an end date.');
      return;
    }

    if (startDate > endDate) {
      setRangeError('Start date cannot be after the end date.');
      return;
    }

    const isSingleDate = startDate === endDate;

    const confirmationMessage = isSingleDate ? `Apply these settings to ${startDate}?` : `Apply these settings from ${startDate} to ${endDate}?`;

    const confirmed = window.confirm(confirmationMessage);

    if (!confirmed) return;
    console.log(calendar)
    setCalendar((prev) =>
      prev.map((monthData, monthIndex) => ({
        ...monthData,

        days: monthData.days.map((day) => {
          const currentDate = getDateKey(monthIndex, day.date);

          // Don't modify dates outside selected range.
          if (currentDate < startDate || currentDate > endDate) {
            return day;
          }

          // Apply range settings.
          return {
            ...day,
            isWorking,
            openTime: isWorking ? openTime : '',
            closeTime: isWorking ? closeTime : '',
          };
        }),
      }))
    );
  };

  /*
   * Start date input.
   */
  const handleStartDateChange = (value: string) => {
    setStartDate(value);
    setRangeError('');

    if (endDate && value > endDate) {
      setEndDate('');
    }
  };

  /*
   * End date input.
   */
  const handleEndDateChange = (value: string) => {
    setEndDate(value);
    setRangeError('');

    if (startDate && value < startDate) {
      setRangeError('End date cannot be before the start date.');
    }
  };

  /*
   * Check whether a date is inside the selected range.
   */
  const isDateInRange = (currentDate: string) => {
    return Boolean(startDate && endDate && currentDate >= startDate && currentDate <= endDate);
  };

  /*
   * Check whether this is the selected start date.
   */
  const isStartDate = (currentDate: string) => {
    return Boolean(startDate && currentDate === startDate);
  };

  /*
   * Check whether this is the selected end date.
   */
  const isEndDate = (currentDate: string) => {
    return Boolean(endDate && currentDate === endDate);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto max-w-7xl">
        {/* ================= HEADER ================= */}

        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-800">{year} Working Schedule for {data.name}</h1>

          <p className="mt-1 text-sm text-slate-400">Select a start date and then an end date to select a range.</p>
        </div>

        {/* ================= FULL YEAR CALENDAR ================= */}

        <div
          className="
          grid
          grid-cols-1
          gap-5
          sm:grid-cols-2
          lg:grid-cols-3
        "
        >
          {calendar.map((monthData, monthIndex) => (
            <div
              key={monthData.name}
              className="
                overflow-hidden
                rounded-2xl
                border
                border-slate-200
                bg-white
                shadow-sm
              "
            >
              {/* ================= MONTH HEADER ================= */}

              <div
                className="
                border-b
                border-slate-200
                bg-slate-50
                px-4
                py-3
                text-center
              "
              >
                <h2
                  className="
                  text-base
                  font-bold
                  text-slate-700
                "
                >
                  {monthData.name}
                </h2>
              </div>

              {/* ================= WEEKDAYS ================= */}

              <div
                className="
                grid
                grid-cols-7
                border-b
                border-slate-200
                bg-slate-50/70
              "
              >
                {weekDays.map((day) => (
                  <div
                    key={day}
                    className="
                      flex
                      items-center
                      justify-center
                      py-2
                      text-[10px]
                      font-semibold
                      text-slate-400
                    "
                  >
                    {day}
                  </div>
                ))}
              </div>

              {/* ================= DAYS ================= */}

              <div className="grid grid-cols-7">
                {/* Empty cells before first day */}

                {Array.from({
                  length: monthData.firstDay,
                }).map((_, index) => (
                  <div
                    key={`empty-${index}`}
                    className="
                      min-h-[76px]
                      border-b
                      border-r
                      border-slate-100
                      bg-slate-50/30
                    "
                  />
                ))}

                {/* Month days */}

                {monthData.days.map((day) => {
                  const currentDate = getDateKey(monthIndex, day.date);

                  const isInRange = isDateInRange(currentDate);

                  const isStart = isStartDate(currentDate);

                  const isEnd = isEndDate(currentDate);

                  return (
                    <button
                      type="button"
                      key={day.date}
                      onClick={() => selectDate(monthIndex, day)}
                      className={`
                        relative
                        flex
                        min-h-[76px]
                        flex-col
                        items-center
                        justify-center
                        border-b
                        border-r
                        border-slate-100
                        p-1
                        text-center
                        transition

                        ${isInRange ? 'bg-slate-100 ring-1 ring-inset ring-slate-300' : day.isWorking ? 'bg-white hover:bg-slate-50' : 'bg-slate-100/60 hover:bg-slate-200/60'}
                      `}
                    >
                      {/* Start label */}

                      {isStart && (
                        <span
                          className="
                          absolute
                          left-0.5
                          top-0.5
                          rounded
                          bg-slate-800
                          px-1
                          py-0.5
                          text-[7px]
                          font-semibold
                          uppercase
                          text-white
                        "
                        >
                          S
                        </span>
                      )}

                      {/* End label */}

                      {isEnd && !isStart && (
                        <span
                          className="
                          absolute
                          right-0.5
                          top-0.5
                          rounded
                          bg-slate-800
                          px-1
                          py-0.5
                          text-[7px]
                          font-semibold
                          uppercase
                          text-white
                        "
                        >
                          E
                        </span>
                      )}

                      {/* Date */}

                      <span
                        className={`
                          flex
                          h-7
                          w-7
                          items-center
                          justify-center
                          rounded-full
                          text-xs
                          font-semibold

                          ${isStart || isEnd ? 'bg-slate-800 text-white' : !day.isWorking ? 'bg-slate-300 text-slate-600' : 'text-slate-700'}
                        `}
                      >
                        {day.date}
                      </span>

                      {/* Working hours */}

                      {day.isWorking ? (
                        <div
                          className="
                          mt-1
                          leading-none
                        "
                        >
                          <p
                            className="
                            text-[12px]
                            text-slate-400
                          "
                          >
                            {day.openTime}
                          </p>

                          <p
                            className="
                            mt-0.5
                            text-[12px]
                            text-slate-500
                          "
                          >
                            {day.closeTime}
                          </p>
                        </div>
                      ) : (
                        <span
                          className="
                          mt-1
                          text-[8px]
                          font-medium
                          text-slate-400
                        "
                        >
                          Closed
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* ================= RANGE EDITOR ================= */}

        <div
          className="
          mt-8
          rounded-2xl
          border
          border-slate-200
          bg-white
          p-6
          shadow-sm
        "
        >
          <div className="mb-6">
            <h2
              className="
              text-lg
              font-semibold
              text-slate-800
            "
            >
              Edit Client Working Schedule
            </h2>

            <p
              className="
              mt-1
              text-sm
              text-slate-400
            "
            >
              Click one date to select the start date, then click another date to select the end date. All dates between them will be selected automatically.
            </p>
          </div>

          {/* ================= DATE RANGE ================= */}

          <div
            className="
            grid
            gap-5
            sm:grid-cols-2
          "
          >
            {/* Start date */}

            {/* <div>
              <label
                htmlFor="start-date"
                className="
                  mb-2
                  block
                  text-sm
                  font-medium
                  text-slate-600
                "
              >
                Start date
              </label>

              <input
                id="start-date"
                type="date"
                min={`${year}-01-01`}
                max={`${year}-12-31`}
                value={startDate}
                onChange={(e) => handleStartDateChange(e.target.value)}
                className="
                  h-11
                  w-full
                  rounded-lg
                  border
                  border-slate-200
                  bg-white
                  px-3
                  text-sm
                  text-slate-700
                  outline-none
                  focus:border-slate-400
                "
              />
            </div> */}

            {/* End date */}

            {/* <div>
              <label
                htmlFor="end-date"
                className="
                  mb-2
                  block
                  text-sm
                  font-medium
                  text-slate-600
                "
              >
                End date
              </label>

              <input
                id="end-date"
                type="date"
                min={startDate || `${year}-01-01`}
                max={`${year}-12-31`}
                value={endDate}
                onChange={(e) => handleEndDateChange(e.target.value)}
                className="
                  h-11
                  w-full
                  rounded-lg
                  border
                  border-slate-200
                  bg-white
                  px-3
                  text-sm
                  text-slate-700
                  outline-none
                  focus:border-slate-400
                "
              />
            </div> */}
          </div>

          {/* ================= RANGE STATUS ================= */}

          {startDate && (
            <div
              className="
              mt-4
              rounded-lg
              bg-slate-50
              px-4
              py-3
              text-sm
              text-slate-600
            "
            >
              {!endDate ? (
                <>
                  Start date selected: <span className="font-semibold">{startDate}</span>
                  <span
                    className="
                    ml-2
                    text-slate-400
                  "
                  >
                    — now select an end date
                  </span>
                </>
              ) : startDate === endDate ? (
                <>
                  Editing one date: <span className="font-semibold">{startDate}</span>
                </>
              ) : (
                <>
                  Editing dates from <span className="font-semibold">{startDate}</span> to <span className="font-semibold">{endDate}</span>
                </>
              )}
            </div>
          )}

          {/* ================= ERROR ================= */}

          {rangeError && (
            <p
              className="
                mt-3
                text-sm
                text-red-600
              "
              role="alert"
            >
              {rangeError}
            </p>
          )}

          {/* ================= WORKING HOURS ================= */}

          <div
            className="
            mt-6
            border-t
            border-slate-100
            pt-5
          "
          >
            <h3
              className="
              mb-4
              text-sm
              font-semibold
              text-slate-700
            "
            >
              Working hours
            </h3>

            <div
              className="
              grid
              gap-5
              sm:grid-cols-3
            "
            >
              {/* Working day */}

              <div>
                <label
                  className="
                  mb-2
                  block
                  text-sm
                  font-medium
                  text-slate-600
                "
                >
                  Working day
                </label>

                <button
                  style={{ background: 'black' }}
                  type="button"
                  onClick={() => {
                    setIsWorking((prev) => !prev);

                    if (isWorking) {
                      setOpenTime('');
                      setCloseTime('');
                    } else {
                      setOpenTime('09:00');
                      setCloseTime('18:00');
                    }
                  }}
                  className="
                    flex
                    h-11
                    w-full
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-slate-300
                    bg-slate-800
                    text-sm
                    font-medium
                    text-white
                    transition
                    hover:bg-slate-700
                  "
                >
                  {isWorking ? 'Working' : 'Closed'}
                </button>
              </div>

              {/* Open time */}

              <div>
                <label
                  htmlFor="open-time"
                  className="
                    mb-2
                    block
                    text-sm
                    font-medium
                    text-slate-600
                  "
                >
                  Open time
                </label>

                <input
                  id="open-time"
                  type="time"
                  value={openTime}
                  disabled={!isWorking}
                  onChange={(e) => setOpenTime(e.target.value)}
                  className="
                    h-11
                    w-full
                    rounded-lg
                    border
                    border-slate-200
                    bg-white
                    px-3
                    text-sm
                    text-slate-700
                    outline-none
                    focus:border-slate-400
                    disabled:bg-slate-100
                    disabled:text-slate-400
                  "
                />
              </div>

              {/* Close time */}

              <div>
                <label
                  htmlFor="close-time"
                  className="
                    mb-2
                    block
                    text-sm
                    font-medium
                    text-slate-600
                  "
                >
                  Close time
                </label>

                <input
                  id="close-time"
                  type="time"
                  value={closeTime}
                  disabled={!isWorking}
                  onChange={(e) => setCloseTime(e.target.value)}
                  className="
                    h-11
                    w-full
                    rounded-lg
                    border
                    border-slate-200
                    bg-white
                    px-3
                    text-sm
                    text-slate-700
                    outline-none
                    focus:border-slate-400
                    disabled:bg-slate-100
                    disabled:text-slate-400
                  "
                />
              </div>
            </div>
          </div>

          {/* ================= APPLY ================= */}

          <div
            className="
            mt-6
            flex
            justify-end
            border-t
            border-slate-100
            pt-5
          "
          >
            <button
              style={{ background: 'black' }}
              type="button"
              onClick={applyToDateRange}
              disabled={!startDate || !endDate}
              className="
                rounded-lg
                bg-slate-800
                px-5
                py-2.5
                text-sm
                font-medium
                text-white
                transition
                hover:bg-slate-700
                disabled:cursor-not-allowed
                disabled:opacity-50
              "
            >
              Apply to date range
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
