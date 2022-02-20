import jp2west from '../src/jp2west';

describe('Input including year, month and day', () => {
  const cases = [
    ['明治元年1月25日', '1868-01-25'],
    ['明治45年7月29日', '1912-07-29'],
    ['大正元年7月30日', '1912-07-30'],
    ['大正15年12月24日', '1926-12-24'],
    ['昭和元年12月25日', '1926-12-25'],
    ['昭和64年1月7日', '1989-01-07'],
    ['平成元年1月8日', '1989-01-08'],
    ['平成31年4月30日', '2019-04-30'],
    ['令和元年5月1日', '2019-05-01'],
    ['令和4年2月21日', '2022-02-21'],
  ];
  for (let [input, expected] of cases) {
    test(`${input} to ${expected}`, () => {
      expect(jp2west(input, 'YYYY-MM-DD')).toEqual(expected);
    })
  }
});

describe('Input including year, month', () => {
  const cases = [
    ['明治元年1月', '1868-01'],
    ['明治45年7月', '1912-07'],
    ['大正元年7月', '1912-07'],
    ['大正15年12月', '1926-12'],
    ['昭和元年12月', '1926-12'],
    ['昭和64年1月', '1989-01'],
    ['平成元年1月', '1989-01'],
    ['平成31年4月', '2019-04'],
    ['令和元年5月', '2019-05'],
    ['令和4年2月', '2022-02'],
  ];
  for (let [input, expected] of cases) {
    test(`${input} to ${expected}`, () => {
      expect(jp2west(input, 'YYYY-MM')).toEqual(expected);
    })
  }
});

describe('Input is year only', () => {
  const cases = [
    ['明治元年', '1868'],
    ['明治45年', '1912'],
    ['大正元年', '1912'],
    ['大正15年', '1926'],
    ['昭和元年', '1926'],
    ['昭和64年', '1989'],
    ['平成元年', '1989'],
    ['平成31年', '2019'],
    ['令和元年', '2019'],
    ['令和4年', '2022'],
  ];
  for (let [input, expected] of cases) {
    test(`${input} to ${expected}`, () => {
      expect(jp2west(input, 'YYYY')).toEqual(expected);
    })
  }
});