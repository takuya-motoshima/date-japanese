import 'moment/locale/ja.js';
/**
 * Converts a Western calendar date to a Japanese calendar date.
 * This function only supports dates from 1868-01-25 onwards (Meiji era and later).
 * @param {string} westernDate Western calendar date in one of the following formats: 'YYYY-MM-DD', 'YYYY-M-D', 'YYYY/MM/DD', 'YYYY/M/D', 'MM-DD-YYYY', 'M-D-YYYY', 'MM/DD/YYYY', 'M/D/YYYY', 'YYYY-MM', 'YYYY-M', 'YYYY/MM', 'YYYY/M', 'MM-YYYY', 'M-YYYY', 'MM/YYYY', 'M/YYYY', 'YYYY'.
 * @param {boolean} [throwOnInvalid=false] If `true`, throws an error if the input date is invalid. If `false`, returns an empty string (default: `false`).
 * @return {string} The Japanese calendar date, or an empty string if the input date is before the Meiji era or invalid (and `throwOnInvalid` is `false`).
 * @throws {TypeError} If the input date format is invalid and `throwOnInvalid` is `true`.
 */
declare const _default: (westernDate: string, throwOnInvalid?: boolean) => string;
export default _default;
