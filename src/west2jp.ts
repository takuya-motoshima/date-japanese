import moment from 'moment';
import 'moment/locale/ja';

/**
 * Convert a Western calendar date to a Japanese calendar date.
 *
 * @param   {string}  input        Western calendar date.
 * @returns {string}               Converts the Western calendar date to the Japanese calendar date and returns it.
 */
export default function(input: string): string {
  // Reset locale to original (English).
  moment.locale('en');

  // Strict mode of moment.
  const strict = true;

  // Check the format of the entered year date.
  let outFormat;
  let formattedInput;
  let formattedInputFormat;
  if (moment(input, ['YYYY-M-D', 'YYYY/M/D', 'M-D-YYYY', 'M/D/YYYY'], strict).isValid()) {
    // Input date includes year, month, day.
    const mom = moment(input, ['YYYY-M-D', 'YYYY/M/D', 'M-D-YYYY', 'M/D/YYYY'], true);
    const year  = mom.format('YYYY');
    const month = mom.format('M');
    const day   = mom.format('D');

    // If the date is less than the '明治' era, an empty string is returned.
    if (parseInt(mom.format('YYYYMMDD'), 10) < 18680125)
      return '';

    if (parseInt(mom.format('YYYYMMDD'), 10) >= 18680125 && parseInt(mom.format('YYYYMMDD'), 10) <= 19120729) {
      // If the date range is the'明治' era, the output format era is fixed to '明治'.
      const iYear = parseInt(year, 10) - 1867;
      outFormat = `明治${iYear > 1 ? iYear : '元'}年M月D日`;
    } else
      outFormat = 'NNNNyoM月D日';
    formattedInput = `${year}/${month}/${day}`;
    formattedInputFormat = 'YYYY/M/D';
  } else if (moment(input, ['YYYY-M', 'YYYY/M', 'M-YYYY', 'M/YYYY'], strict).isValid()) {
    // The input date includes the year and month.
    const mom = moment(input, ['YYYY-M', 'YYYY/M', 'M-YYYY', 'M/YYYY'], true);
    const year  = mom.format('YYYY');
    const month = mom.format('M');

    // If the date is less than the '明治' era, an empty string is returned.
    if (parseInt(mom.format('YYYYMM'), 10) < 186801)
      return '';

    if (parseInt(mom.format('YYYYMM'), 10) >= 186801 && parseInt(mom.format('YYYYMM'), 10) <= 191207) {
      // If the date range is the'明治' era, the output format era is fixed to '明治'.
      const iYear = parseInt(year, 10) - 1867;
      outFormat = `明治${iYear > 1 ? iYear : '元'}年M月`;
    } else
      outFormat = 'NNNNyoM月';
    formattedInput = `${year}/${month}`;
    formattedInputFormat = 'YYYY/M';
  } else if (moment(input, 'YYYY', strict).isValid()) {
    // The input date includes only the year.
    const mom = moment(input, 'YYYY', true);
    const year  = mom.format('YYYY');

    // If the date is less than the '明治' era, an empty string is returned.
    if (parseInt(year, 10) < 1868)
      return '';

    if (parseInt(year, 10) >= 1868 && parseInt(year, 10) <= 1911) {
      // If the date range is the'明治' era, the output format era is fixed to '明治'.
      const iYear = parseInt(year, 10) - 1867;
      outFormat = `明治${iYear > 1 ? iYear : '元'}年`;
    } else
      outFormat = 'NNNNyo';
    formattedInput = year;
    formattedInputFormat = 'YYYY';
  } else
    throw new TypeError('Valid date formats are \'YYYY-M-D\', \'YYYY/M/D\', \'M-D-YYYY\', \'M/D/YYYY\', \'YYYY-M\', \'YYYY/M\', \'M-YYYY\', \'M/YYYY\', \'YYYY\'');

  // Set the locale to Japanese.
  moment.locale('ja');

  // console.log(`formattedInput=${formattedInput}, outFormat=${outFormat}`);

  // Converts the Western calendar date to the Japanese calendar date and returns it..
  return moment(formattedInput, formattedInputFormat, true).format(outFormat);
}