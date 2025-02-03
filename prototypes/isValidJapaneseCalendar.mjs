import moment from 'moment';
import 'moment/locale/ja.js';
import getJapaneseCalendarFormats from './getJapaneseCalendarFormats.mjs';

/**
 * Checks if the given value is a valid Japanese calendar date.
 * @param {string} value The value to be validated.
 * @return {boolean} if the value is a valid Japanese calendar date, `false` otherwise.
 */
export default (value) => {
  // Set the locale to Japanese.
  moment.locale('ja');

  // Create a moment instance and check if it's valid.
  return moment(value, getJapaneseCalendarFormats(), true).isValid();
}