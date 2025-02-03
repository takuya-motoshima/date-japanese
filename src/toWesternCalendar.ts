import moment from 'moment';
import 'moment/locale/ja';
import isValidJapaneseCalendar from '~/isValidJapaneseCalendar';
import getJapaneseCalendarFormats from '~/getJapaneseCalendarFormats';
import normalizeMisrecognizedKanjiNumerals from '~/utils/normalizeMisrecognizedKanjiNumerals';
import convertKanjiDateToNumberDate from '~/utils/convertKanjiDateToNumberDate';

/**
 * Converts a Japanese calendar date to a Western calendar date in the specified format. 
 * Supported eras: Meiji (明治), Taisho (大正), Showa (昭和), Heisei (平成), Reiwa (令和).
 * This function can also handle Japanese dates written with Kanji numerals.
 * @param {string} japaneseDate Japanese calendar date (e.g., '令和4年2月20日', '令和4年2月', '令和4年').
 * @param {string} [format='YYYY-MM-DD'] Output date format. Available tokens: YYYY, YY, M, MM, MMM, MMMM, D, DD (default: 'YYYY-MM-DD').
 * @param {boolean} [throwOnInvalid=false] If `true`, throws an error if the input date is invalid. If `false`, returns an empty string (default: `false`).
 * @return {string} The Western calendar date in the specified format, or an empty string if the input is invalid and `throwOnInvalid` is `false`.
 */
export default (japaneseDate: string, format: string = 'YYYY-MM-DD', throwOnInvalid: boolean = false): string => {
  // Set the locale to Japanese.
  moment.locale('ja');

  // Correct potential misrecognized characters to Kanji numerals.
  japaneseDate = normalizeMisrecognizedKanjiNumerals(japaneseDate);

  // Convert Kanji numerals to Arabic numerals.
  japaneseDate = convertKanjiDateToNumberDate(japaneseDate);

  // Validate the input date format.
  if (!isValidJapaneseCalendar(japaneseDate)) {
    if (throwOnInvalid)
      throw new TypeError('Invalid Japanese calendar date format.');
    else
      return '';
  }

  // Create a moment instance.
  const momentInstance = moment(japaneseDate, getJapaneseCalendarFormats(), true);

  // Validate the output format string.
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

  // Convert to Western calendar date and format.
  const westernDate = momentInstance.format(format);

  // Reset locale to default (English)
  moment.locale('en');

  return westernDate;
}