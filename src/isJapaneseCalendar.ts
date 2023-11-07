import moment from 'moment';
import 'moment/locale/ja';
import japaneseCalendarFormats from '~/japaneseCalendarFormats';

/**
 * Check if it is a Japanese calendar.
 * @param {string} value Value to be validated.
 * @return {boolean} Pass is true, fail is false.
 */
export default (value: string): boolean => {
  // Set the locale to Japanese.
  moment.locale('ja');

  // Create a moment instance.
  const momentInstance = moment(value, japaneseCalendarFormats(), true);
  // const momentInstance = moment(value, japaneseCalendarFormats(), 'ja', true);

  // Check the format of the entered Japanese calendar date.
  if (momentInstance.isValid())
    return true;
  else
    return false;
}