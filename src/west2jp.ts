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
    outFormat = 'NNNNyoM月D日';
    formattedInput = `${year}/${month}/${day}`;
    formattedInputFormat = 'YYYY/M/D';
  } else if (moment(input, ['YYYY-M', 'YYYY/M', 'M-YYYY', 'M/YYYY'], strict).isValid()) {
    // The input date includes the year and month.
    const mom = moment(input, ['YYYY-M', 'YYYY/M', 'M-YYYY', 'M/YYYY'], true);
    const year  = mom.format('YYYY');
    const month = mom.format('M');
    outFormat = 'NNNNyoM月';
    formattedInput = `${year}/${month}`;
    formattedInputFormat = 'YYYY/M';
  } else if (moment(input, 'YYYY', strict).isValid()) {
    // The input date includes only the year.
    const mom = moment(input, 'YYYY', true);
    outFormat = 'NNNNyo';
    formattedInput = mom.format('YYYY');
    formattedInputFormat = 'YYYY';
  } else
    throw new TypeError('Valid date formats are \'YYYY-M-D\', \'YYYY/M/D\', \'M-D-YYYY\', \'M/D/YYYY\', \'YYYY-M\', \'YYYY/M\', \'M-YYYY\', \'M/YYYY\', \'YYYY\'');

  // Set the locale to Japanese.
  moment.locale('ja');

  // Converts the Western calendar date to the Japanese calendar date and returns it..
  // console.log(`formattedInput=${formattedInput}, outFormat=${outFormat}`);
  return moment(formattedInput, formattedInputFormat, true).format(outFormat);
}