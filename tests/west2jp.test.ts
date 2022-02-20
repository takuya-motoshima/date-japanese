import west2jp from '../src/west2jp';

describe('Input including year, month and day', () => {
  const cases = [
    ['1868-01-25', '明治元年1月25日'],
    ['1912-07-29', '明治45年7月29日'],
    ['1912-07-30', '大正元年7月30日'],
    ['1926-12-24', '大正15年12月24日'],
    ['1926-12-25', '昭和元年12月25日'],
    ['1989-01-07', '昭和64年1月7日'],
    ['1989-01-08', '平成元年1月8日'],
    ['2019-04-30', '平成31年4月30日'],
    ['2019-05-01', '令和元年5月1日'],
    ['2022-02-21', '令和4年2月21日']
  ];
  for (let [input, expected] of cases) {
    test(`${input} to ${expected}`, () => {
      expect(west2jp(input)).toEqual(expected);
    })
  }
});

describe('Input including year, month', () => {
  const cases = [
    ['1868-01', '明治元年1月'],
    ['1912-07', '明治45年7月'],
    ['1912-08', '大正元年8月'],
    ['1926-12', '大正15年12月'],
    ['1927-01', '昭和2年1月'],
    ['1989-01', '昭和64年1月'],
    ['1989-02', '平成元年2月'],
    ['2019-04', '平成31年4月'],
    ['2019-05', '令和元年5月'],
    ['2022-02', '令和4年2月']
  ];
  for (let [input, expected] of cases) {
    test(`${input} to ${expected}`, () => {
      expect(west2jp(input)).toEqual(expected);
    })
  }
});

describe('Input is year only', () => {
  const cases = [
    ['1868', '明治元年'],
    ['1912', '明治45年'],
    ['1913', '大正2年'],
    ['1926', '大正15年'],
    ['1927', '昭和2年'],
    ['1989', '昭和64年'],
    ['1990', '平成2年'],
    ['2019', '平成31年'],
    ['2020', '令和2年'],
    ['2022', '令和4年']
  ];
  for (let [input, expected] of cases) {
    test(`${input} to ${expected}`, () => {
      expect(west2jp(input)).toEqual(expected);
    })
  }
});