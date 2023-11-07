const {jp2west, west2jp} = require('../../dist/build.common');

// Japanese calendar to Western calendar.
for (let [input, format] of [
  ['令和4年2月20日', 'YYYY-MM-DD'],
  ['令和4年2月', 'YYYY-MM'],
  ['令和4年', 'YYYY']
]) {
  const converted = jp2west(input, format);
  console.log(`${input} -> ${converted}`);
}
// Western calendar to Japanese calendar.
for (let input of [
  '2022/2/20',
  '2022/2',
  '2022'
]) {
  const converted = west2jp(input);
  console.log(`${input} -> ${converted}`);
}