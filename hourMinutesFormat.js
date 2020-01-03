export function minutesToHours(minutes) {
  const hours = Math.abs(Math.trunc(minutes / 60));
  const min = Math.abs(minutes % 60);
  const sign = !isNaN(minutes) && minutes < 0 ? '-' : '';
  return { hours, min, minutes: min, sign };
}

export function formatHours({ hours, min, sign }) {
  return `${sign}${hours}:${`0${min}`.slice(-2)}`;
}

export function unformatHours(formattedTime) {
  if (typeof formattedTime !== 'string') {
    throw new Error('The argument should be a string');
  }
  const match = formattedTime.trim().match(/(-?)(\d{1,2}):([0-5]\d)/);
  if (!match) {
    throw new Error(`Wrong string format "${formattedTime}"`);
  }

  return { hours: Number(match[2]), minutes: Number(match[3]), sign: match[1] };

}

/**
 *
 * @param {string} timeValue
 * @param {string} timeValue2
 * @returns {number}
 */
export function minutesDiff(timeValue, timeValue2) {
  const hourObj = unformatHours(timeValue);
  const hourObj2 = unformatHours(timeValue2);

  return (hourObj.hours - hourObj2.hours) * 60 + hourObj.minutes - hourObj2.minutes;
}
