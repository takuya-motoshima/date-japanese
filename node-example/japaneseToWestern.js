const {jp2west} = require('../dist/build.common');

const inputs = [
  ['令和4年2月20日', 'YYYY-MM-DD'],
  ['令和4年2月', 'YYYY-MM'],
  ['令和4年', 'YYYY']
];

for (let [input, format] of inputs) {
  const output = jp2west(input, format);
  console.log(`${input} to ${output}`);
}