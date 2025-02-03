import moment from 'moment';
import 'moment/locale/ja.js';

/**
 * Converts a Western calendar date to a Japanese calendar date.
 * This function only supports dates from 1868-01-25 onwards (Meiji era and later).
 * @param {string} westernDate Western calendar date in one of the following formats: 'YYYY-MM-DD', 'YYYY-M-D', 'YYYY/MM/DD', 'YYYY/M/D', 'MM-DD-YYYY', 'M-D-YYYY', 'MM/DD/YYYY', 'M/D/YYYY', 'YYYY-MM', 'YYYY-M', 'YYYY/MM', 'YYYY/M', 'MM-YYYY', 'M-YYYY', 'MM/YYYY', 'M/YYYY', 'YYYY'.
 * @param {boolean} [throwOnInvalid=false] If `true`, throws an error if the input date is invalid. If `false`, returns an empty string (default: `false`).
 * @return {string} The Japanese calendar date, or an empty string if the input date is before the Meiji era or invalid (and `throwOnInvalid` is `false`).
 * @throws {TypeError} If the input date format is invalid and `throwOnInvalid` is `true`.
 */ 
export default (westernDate, throwOnInvalid = false) => {
  // The start date of the Meiji era (YYYYMMDD).
  const MEIJI_START_DATE = 18680125;
  const MEIJI_START_YEAR = parseInt(MEIJI_START_DATE.toString().substring(0, 4), 10);
  const MEIJI_START_YEAR_MONTH = parseInt(MEIJI_START_DATE.toString().substring(0, 6), 10);

  // The end date of the Meiji era (YYYYMMDD).
  const MEIJI_END_DATE = 19120730;

  // Set the locale to Japanese.
  moment.locale('ja');

  // Define date formats for year, year-month and year-month-day.
  const yearMonthDayFormats = [
    'YYYY-MM-DD',
    'YYYY-M-D',
    'YYYY/MM/DD',
    'YYYY/M/D',
    'MM-DD-YYYY',
    'M-D-YYYY',
    'MM/DD/YYYY',
    'M/D/YYYY',
  ];
  const yearMonthFormats = [
    'YYYY-MM',
    'YYYY-M',
    'YYYY/MM',
    'YYYY/M',
    'MM-YYYY',
    'M-YYYY',
    'MM/YYYY',
    'M/YYYY',
  ];

  // Parse the date based on input format.
  let momentInstance;
  if (moment(westernDate, yearMonthDayFormats, true).isValid()) {
    momentInstance = moment(westernDate, yearMonthDayFormats, true);
  } else if (moment(westernDate, yearMonthFormats, true).isValid()) {
    momentInstance = moment(westernDate, yearMonthFormats, true);
  } else if (moment(westernDate, 'YYYY', true).isValid()) {
    momentInstance = moment(westernDate, 'YYYY', true);
  } else {
    // Handle invalid date format.
    if (throwOnInvalid)
      throw new TypeError(`Invalid date format: ${westernDate}`);
    else
      return '';
  }

  // Check if the date is before the Meiji era based on the input format.
  if (
    (moment(westernDate, yearMonthDayFormats, true).isValid() && parseInt(momentInstance.format('YYYYMMDD'), 10) < MEIJI_START_DATE) ||
    (moment(westernDate, yearMonthFormats, true).isValid() && parseInt(momentInstance.format('YYYYMM'), 10) < MEIJI_START_YEAR_MONTH) ||
    (moment(westernDate, 'YYYY', true).isValid() && parseInt(momentInstance.format('YYYY'), 10) < MEIJI_START_YEAR)
  )
    return '';

  // Format the Japanese calendar date.
  let japaneseDate;
  if (parseInt(momentInstance.format('YYYYMMDD'), 10) < MEIJI_END_DATE) {
    // If the year is within the Meiji era, handle the conversion manually.
    const japaneseYear = parseInt(momentInstance.format('YYYY'), 10) - 1867;
    japaneseDate = `明治${japaneseYear > 1 ? japaneseYear : '元'}年`;
  } else {
    // For other eras, use moment's built-in functionality.
    japaneseDate = momentInstance.format('NNNNyo');
  }

  // Add month and day if they are available.
  if (momentInstance.isValid() &&
    (moment(westernDate, yearMonthFormats, true).isValid() ||
    moment(westernDate, yearMonthDayFormats, true).isValid())
  )
    japaneseDate += momentInstance.format('M月');
  
  if (momentInstance.isValid() && moment(westernDate, yearMonthDayFormats, true).isValid())
    japaneseDate += momentInstance.format('D日');

  // Reset locale to default (English).
  moment.locale('en');

  return japaneseDate;
}