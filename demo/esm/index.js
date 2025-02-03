import {toWesternCalendar, toJapaneseCalendar} from '../../dist/build.mjs';

// Data for the tables
const japaneseDates = [
  { input: '明治元年1月25日', format: 'YYYY-MM-DD', expected: '1868-01-25' },
  { input: '明治45年7月29日', format: 'YYYY-MM-DD', expected: '1912-07-29' },
];

const westernDates = [
  '1868-01-25',
  '1912-07-29',
];

/**
 * Runs a demo for the specified date conversion function.
 * @param {string} title The title of the demo.
 * @param {Array<object>} data The data to use for conversion.
 * @param {function} convertFunction The function to use for conversion.
 */
const runDemo = (title, data, convertFunction) => {
  console.log(`\n${title}:`);
  data.forEach((item) => {
    const input = item.input || item;
    const format = item.format;
    const expected = item.expected;

    const output = convertFunction(input, format);
    console.log(`  Input: ${input} (${format || 'default'})`);
    console.log(`  Output: ${output}`);
    console.log(`  Expected: ${expected}`);
    console.log('---');
  });
};

// Run the demos.
runDemo('Japanese Calendar to Western Calendar', japaneseDates, toWesternCalendar);
runDemo('Western Calendar to Japanese Calendar', westernDates, toJapaneseCalendar);