import 'moment/locale/ja';
/**
 * Convert Japanese calendar date to Western calendar date.
 * The eras that can be used are '明治' and '大正' and '昭和' and '平成' and '令和'.
 *
 * @param   {string}  input           Japanese calendar date. e.g. '令和4年2月20日', '令和4年2月' , '令和4年'
 * @param   {string}  format          Output date format. The following tokens are available. The default is 'YYYY-MM-DD'
 *                                    YYYY - 4 digit of year (2022)
 *                                    YY   - 2 digit of year (22)
 *                                    M    - month number (1 2 ... 11 12)
 *                                    MM   - month number with 0 padding (01 02 ... 11 12)
 *                                    MMM  - short month name (Jan Feb ... Nov Dec)
 *                                    MMMM - full month name (January February ... November December)
 *                                    D    - Day of Month (1 2 ... 30 31)
 *                                    DD   - Day of Month with zero padding (01 02 ... 30 31)
 * @param   {boolean} throwException  If set to true, an exception will be thrown if the input date is invalid as the Japanese calendar.
 * @returns {string}                  Returns a Japanese calendar date as a date in the specified format.
 */
export default function (input: string, format?: string, throwException?: boolean): string;
