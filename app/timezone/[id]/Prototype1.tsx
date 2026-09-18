'use client';

import React, { useState } from 'react';

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

function getYearCalendar(year: number): Month[] {
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

export default function Calendar({ year = 2026 }: { year?: number }) {
  const [calendar, setCalendar] = useState<Month[]>(() => getYearCalendar(year));

  const [currentMonth, setCurrentMonth] = useState(0);

  // Date range selection
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Range editor state
  const [isWorking, setIsWorking] = useState(true);
  const [openTime, setOpenTime] = useState('09:00');
  const [closeTime, setCloseTime] = useState('18:00');

  const [rangeError, setRangeError] = useState('');

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const month = calendar[currentMonth];

  /*
   * Convert a calendar date into YYYY-MM-DD.
   *
   * Using a string avoids timezone problems and also
   * makes date comparisons straightforward.
   */
  const getDateKey = (monthIndex: number, day: number) => {
    return `${year}-${String(monthIndex + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  };

  /*
   * Select a date from the calendar.
   *
   * Behavior:
   *
   * 1. First click:
   *    Start date = clicked date
   *    End date = empty
   *
   * 2. Second click:
   *    End date = clicked date
   *    All dates between start/end become highlighted.
   *
   * 3. After a complete range exists:
   *    Clicking another date starts a new range.
   *
   * 4. If the second clicked date is before the first date,
   *    the two dates are automatically ordered.
   */
  const selectDate = (day: Day) => {
    const dateKey = getDateKey(currentMonth, day.date);

    setRangeError('');

    /*
     * Start a new range when:
     * - nothing is selected yet, OR
     * - a complete range already exists.
     */
    if (!startDate || (startDate && endDate && startDate !== endDate)) {
      setStartDate(dateKey);
      setEndDate('');

      // Load clicked date's existing settings
      setIsWorking(day.isWorking);
      setOpenTime(day.openTime || '09:00');
      setCloseTime(day.closeTime || '18:00');

      return;
    }

    /*
     * We have a start date but no end date.
     * The clicked date becomes the end date.
     */
    if (startDate && !endDate) {
      /*
       * If the user clicks before the start date,
       * reverse the selection so that start <= end.
       */
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
   * Apply the editor values to the selected date range.
   *
   * A single date is supported by using:
   * Start date = End date
   */
  const applyToDateRange = () => {
    setRangeError('');

    // Both dates are required.
    if (!startDate || !endDate) {
      setRangeError('Please select both a start date and an end date.');
      return;
    }

    // Make sure start date isn't after end date.
    if (startDate > endDate) {
      setRangeError('Start date cannot be after the end date.');
      return;
    }

    const isSingleDate = startDate === endDate;

    const confirmationMessage = isSingleDate ? `Apply these settings to ${startDate}?` : `Apply these settings from ${startDate} to ${endDate}?`;

    const confirmed = window.confirm(confirmationMessage);

    if (!confirmed) return;

    setCalendar((prev) =>
      prev.map((monthData, monthIndex) => ({
        ...monthData,

        days: monthData.days.map((day) => {
          const currentDate = getDateKey(monthIndex, day.date);

          // Don't modify dates outside the selected range.
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
   * Previous month.
   */
  const previousMonth = () => {
    setCurrentMonth((prev) => Math.max(0, prev - 1));
  };

  /*
   * Next month.
   */
  const nextMonth = () => {
    setCurrentMonth((prev) => Math.min(11, prev + 1));
  };

  /*
   * Start date input.
   */
  const handleStartDateChange = (value: string) => {
    setStartDate(value);
    setRangeError('');

    /*
     * If the end date is empty, don't leave the user
     * without an end date.
     */
    if (!endDate) {
      setEndDate('');
    }

    /*
     * If the new start date is after the existing end date,
     * clear the end date because the range is no longer valid.
     */
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
   * Determine whether a date is inside the selected range.
   */
  const isDateInRange = (currentDate: string) => {
    return Boolean(startDate && endDate && currentDate >= startDate && currentDate <= endDate);
  };

  /*
   * Determine whether this is the exact start date.
   */
  const isStartDate = (currentDate: string) => {
    return Boolean(startDate && currentDate === startDate);
  };

  /*
   * Determine whether this is the exact end date.
   */
  const isEndDate = (currentDate: string) => {
    return Boolean(endDate && currentDate === endDate);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto max-w-5xl">
        {/* ================= HEADER ================= */}

        <div className="mb-6 flex items-center justify-between">
          <button
            type="button"
            onClick={previousMonth}
            disabled={currentMonth === 0}
            className="
              flex h-11 w-11 items-center justify-center
              rounded-full border border-slate-200
              bg-white text-slate-600 shadow-sm
              transition hover:bg-slate-50
              disabled:cursor-not-allowed
              disabled:opacity-30
            "
          >
            ←
          </button>

          <div className="text-center">
            <h1 className="text-2xl font-bold capitalize text-slate-800">{month.name}</h1>

            <p className="mt-1 text-sm text-slate-400">{year}</p>
          </div>

          <button
            type="button"
            onClick={nextMonth}
            disabled={currentMonth === 11}
            className="
              flex h-11 w-11 items-center justify-center
              rounded-full border border-slate-200
              bg-white text-slate-600 shadow-sm
              transition hover:bg-slate-50
              disabled:cursor-not-allowed
              disabled:opacity-30
            "
          >
            →
          </button>
        </div>

        {/* ================= CALENDAR ================= */}

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          {/* Weekdays */}

          <div className="grid grid-cols-7 border-b border-slate-200 bg-slate-50">
            {weekDays.map((day) => (
              <div
                key={day}
                className="
                  flex items-center justify-center
                  py-4 text-sm font-semibold text-slate-500
                "
              >
                {day}
              </div>
            ))}
          </div>

          {/* Days */}

          <div className="grid grid-cols-7">
            {/* Empty cells */}

            {Array.from({
              length: month.firstDay,
            }).map((_, index) => (
              <div
                key={`empty-${index}`}
                className="
                  min-h-[145px]
                  border-b border-r border-slate-100
                  bg-slate-50/30
                "
              />
            ))}

            {/* Calendar days */}

            {month.days.map((day) => {
              const currentDate = getDateKey(currentMonth, day.date);

              const isInRange = isDateInRange(currentDate);

              const isStart = isStartDate(currentDate);

              const isEnd = isEndDate(currentDate);

              return (
                <button
                  type="button"
                  key={day.date}
                  onClick={() => selectDate(day)}
                  className={`
                    relative
                    flex min-h-[145px]
                    flex-col items-center justify-center
                    border-b border-r border-slate-100
                    p-3 text-center transition

                    ${isInRange ? 'bg-slate-100 ring-2 ring-inset ring-slate-300' : 'hover:bg-slate-50'}

                    ${!day.isWorking ? 'bg-slate-100/60' : 'bg-white'}
                  `}
                >
                  {/* Start / End indicators */}

                  {isStart && (
                    <span
                      className="
                      absolute left-2 top-2
                      rounded-full bg-slate-800
                      px-2 py-0.5
                      text-[9px] font-semibold
                      uppercase tracking-wide
                      text-white
                    "
                    >
                      Start
                    </span>
                  )}

                  {isEnd && !isStart && (
                    <span
                      className="
                      absolute right-2 top-2
                      rounded-full bg-slate-800
                      px-2 py-0.5
                      text-[9px] font-semibold
                      uppercase tracking-wide
                      text-white
                    "
                    >
                      End
                    </span>
                  )}

                  {/* Date */}

                  <span
                    className={`
                      flex h-9 w-9 items-center justify-center
                      rounded-full text-sm font-semibold

                      ${isStart || isEnd ? 'bg-slate-800 text-white' : !day.isWorking ? 'bg-slate-300 text-slate-600' : 'text-slate-700'}
                    `}
                  >
                    {day.date}
                  </span>

                  {/* Working hours */}

                  {day.isWorking ? (
                    <div className="mt-3 space-y-1">
                      <div>
                        <p
                          className="
                          text-[10px]
                          uppercase
                          tracking-wide
                          text-slate-400
                        "
                        >
                          Open
                        </p>

                        <p
                          className="
                          text-sm
                          font-medium
                          text-slate-700
                        "
                        >
                          {day.openTime}
                        </p>
                      </div>

                      <div>
                        <p
                          className="
                          text-[10px]
                          uppercase
                          tracking-wide
                          text-slate-400
                        "
                        >
                          Close
                        </p>

                        <p
                          className="
                          text-sm
                          font-medium
                          text-slate-700
                        "
                        >
                          {day.closeTime}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <span
                      className="
                      mt-3
                      rounded-full
                      bg-slate-200
                      px-3 py-1
                      text-xs
                      font-medium
                      text-slate-500
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

        {/* ================= RANGE EDITOR ================= */}

        <div
          className="
          mt-6
          rounded-2xl
          border border-slate-200
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
              Edit Date Range
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

          <div className="grid gap-5 sm:grid-cols-2">
            {/* Start date */}

            <div>
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
            </div>

            {/* End date */}

            <div>
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
            </div>
          </div>

          {/* Range status */}

          {startDate && (
            <div
              className="
              mt-4
              rounded-lg
              bg-slate-50
              px-4 py-3
              text-sm
              text-slate-600
            "
            >
              {!endDate ? (
                <>
                  Start date selected: <span className="font-semibold">{startDate}</span>
                  <span className="ml-2 text-slate-400">— now select an end date</span>
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

          {/* Error */}

          {rangeError && (
            <p className="mt-3 text-sm text-red-600" role="alert">
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

            <div className="grid gap-5 sm:grid-cols-3">
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
                px-5 py-2.5
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
