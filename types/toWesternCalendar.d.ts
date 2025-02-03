import 'moment/locale/ja';
/**
 * Converts a Japanese calendar date to a Western calendar date in the specified format.
 * Supported eras: Meiji (明治), Taisho (大正), Showa (昭和), Heisei (平成), Reiwa (令和).
 * This function can also handle Japanese dates written with Kanji numerals.
 * @param {string} japaneseDate Japanese calendar date (e.g., '令和4年2月20日', '令和4年2月', '令和4年').
 * @param {string} [format='YYYY-MM-DD'] Output date format. Available tokens: YYYY, YY, M, MM, MMM, MMMM, D, DD (default: 'YYYY-MM-DD').
 * @param {boolean} [throwOnInvalid=false] If `true`, throws an error if the input date is invalid. If `false`, returns an empty string (default: `false`).
 * @return {string} The Western calendar date in the specified format, or an empty string if the input is invalid and `throwOnInvalid` is `false`.
 */
declare const _default: (japaneseDate: string, format?: string, throwOnInvalid?: boolean) => string;
export default _default;
