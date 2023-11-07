import moment from 'moment';
import 'moment/locale/ja';
import isJapaneseCalendar from '~/isJapaneseCalendar';
import japaneseCalendarFormats from '~/japaneseCalendarFormats';

/**
 * Convert Japanese calendar date to Western calendar date.
 * The eras that can be used are '明治' and '大正' and '昭和' and '平成' and '令和'.
 * @param {string} input Japanese calendar date. e.g. '令和4年2月20日', '令和4年2月' , '令和4年'.
 * @param {string} format Output date format. The following tokens are available. The default is 'YYYY-MM-DD'.
 *                        - YYYY - 4 digit of year (2022)
 *                        - YY   - 2 digit of year (22)
 *                        - M    - month number (1 2 ... 11 12)
 *                        - MM   - month number with 0 padding (01 02 ... 11 12)
 *                        - MMM  - short month name (Jan Feb ... Nov Dec)
 *                        - MMMM - full month name (January February ... November December)
 *                        - D    - Day of Month (1 2 ... 30 31)
 *                        - DD   - Day of Month with zero padding (01 02 ... 30 31)
 * @param {boolean} throwException If set to true, an exception will be thrown if the input date is invalid as the Japanese calendar.
 * @return {string} Returns a Japanese calendar date as a date in the specified format.
 */
export default (input: string, format: string = 'YYYY-MM-DD', throwException: boolean = true): string => {
  // Set the locale to Japanese.
  moment.locale('ja');

  // Check the format of the entered Japanese calendar date.
  if (!isJapaneseCalendar(input))
    if (throwException)
      throw new TypeError('Invalid input date format');
    else
      return '';

  // Create a moment instance.
  const momentInstance = moment(input, japaneseCalendarFormats(), true);

  // Check format characters.
  const yearToken = '(Y{2}|Y{4})';
  const monthToken = 'M{1,4}';
  const dayToken = 'D{1,2}';
  const symToken = '[^YMD]*';
  const allowedFormats = [
    `${yearToken}${symToken}`,
    `${monthToken}${symToken}`,
    `${dayToken}${symToken}`,
    `${yearToken}${symToken}${monthToken}${symToken}`,
    `${yearToken}${symToken}${dayToken}${symToken}`,
    `${yearToken}${symToken}${monthToken}${symToken}${dayToken}${symToken}`,
    `${yearToken}${symToken}${dayToken}${symToken}${monthToken}${symToken}`,
    `${monthToken}${symToken}${yearToken}${symToken}`,
    `${monthToken}${symToken}${dayToken}${symToken}`,
    `${monthToken}${symToken}${yearToken}${symToken}${dayToken}${symToken}`,
    `${monthToken}${symToken}${dayToken}${symToken}${yearToken}${symToken}`,
    `${dayToken}${symToken}${yearToken}${symToken}`,
    `${dayToken}${symToken}${monthToken}${symToken}`,
    `${dayToken}${symToken}${yearToken}${symToken}${monthToken}${symToken}`,
    `${dayToken}${symToken}${monthToken}${symToken}${yearToken}${symToken}`
  ].map(allowedFormat => `(${allowedFormat})`);
  if (!new RegExp(`^(${allowedFormats.join('|')})$`).test(format))
    throw new TypeError('Invalid format string. Available tokens are YYYY, YY, M, MM, MMM, MMMM, D, DD');

  // Reset locale to original (English).
  moment.locale('en');

  // Returns a Japanese calendar date as a date in the specified format.
  return momentInstance.format(format);
}