const moment = require('moment');
moment.locale('ja');
moment('令和4年1月1日', 'NNNNyoM月D日', 'ja').format('YYYY-MM-DD');
moment('1989-01-08').format('NNNNyoM月D日');


moment.locale('en');
moment('2022-2-20', ['YYYY-M-D', 'YYYY/M/D', 'M-D-YYYY', 'M/D/YYYY'], true).isValid()

// for (let date of [
//   '2022-2-20',
//   '2022/2/20',
//   '2-20-2022',
//   '2/20/2022'
// ]) {
//   const mom = moment(date, ['YYYY-M-D', 'YYYY/M/D', 'M-D-YYYY', 'M/D/YYYY'], true);
//   const year  = mom.format('YYYY');
//   const month = mom.format('M');
//   const day   = mom.format('D');
//   console.log(`${date} -> ${mom.isValid()} ${year}/${month}/${day}`);
// }

for (let date of [
  '2022-2',
  '2022/2',
  '2-2022',
  '2/2022'
]) {
  const mom = moment(date, ['YYYY-M', 'YYYY/M', 'M-YYYY', 'M/YYYY'], true);
  const year  = mom.format('YYYY');
  const month = mom.format('M');
  console.log(`${date} -> ${mom.isValid()} ${year}/${month}`);
}

  // // 年/月
  // moment('2022-2').format('NNNNyoM月');       // '令和4年2月'
  // moment('2022/2').format('NNNNyoM月');       // '令和4年2月'
  // // 月/日/年
  // moment('2-20-2022').format('NNNNyoM月D日'); // '令和4年2月20日'
  // moment('2/20/2022').format('NNNNyoM月D日'); // '令和4年2月20日'
  // // 年
  // moment('2022').format('NNNNyo');            // '令和4年'
  // moment(input).format('NNNNyoM月D日');