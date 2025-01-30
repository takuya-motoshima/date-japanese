import {toWesternCalendar} from '../dist/build.mjs';

describe('toWesternCalendar', () => {
  describe('Year-Month-Day Format', () => {
    test.each([
      ['明治元年1月25日', 'YYYY-MM-DD', '1868-01-25'],
      ['明治45年7月29日', 'YYYY-MM-DD', '1912-07-29'],
      ['大正元年7月30日', 'YYYY-MM-DD', '1912-07-30'],
      ['大正15年12月24日', 'YYYY-MM-DD', '1926-12-24'],
      ['昭和元年12月25日', 'YYYY-MM-DD', '1926-12-25'],
      ['昭和64年1月7日', 'YYYY-MM-DD', '1989-01-07'],
      ['平成元年1月8日', 'YYYY-MM-DD', '1989-01-08'],
      ['平成31年4月30日', 'YYYY-MM-DD', '2019-04-30'],
      ['令和元年5月1日', 'YYYY-MM-DD', '2019-05-01'],
      ['令和4年2月21日', 'YYYY-MM-DD', '2022-02-21'],
    ])('should convert "%s" to "%s" in %s format', (japaneseDate, format, expected) => {
      expect(toWesternCalendar(japaneseDate, format)).toBe(expected);
    });
  });

  describe('Year-Month Format', () => {
    test.each([
      ['明治元年1月', 'YYYY-MM', '1868-01'],
      ['明治45年7月', 'YYYY-MM', '1912-07'],
      ['大正元年7月', 'YYYY-MM', '1912-07'],
      ['大正15年12月', 'YYYY-MM', '1926-12'],
      ['昭和元年12月', 'YYYY-MM', '1926-12'],
      ['昭和64年1月', 'YYYY-MM', '1989-01'],
      ['平成元年1月', 'YYYY-MM', '1989-01'],
      ['平成31年4月', 'YYYY-MM', '2019-04'],
      ['令和元年5月', 'YYYY-MM', '2019-05'],
      ['令和4年2月', 'YYYY-MM', '2022-02'],
    ])('should convert "%s" to "%s" in %s format', (japaneseDate, format, expected) => {
      expect(toWesternCalendar(japaneseDate, format)).toBe(expected);
    });
  });

  describe('Year Format', () => {
    test.each([
      ['明治元年', 'YYYY', '1868'],
      ['明治45年', 'YYYY', '1912'],
      ['大正元年', 'YYYY', '1912'],
      ['大正15年', 'YYYY', '1926'],
      ['昭和元年', 'YYYY', '1926'],
      ['昭和64年', 'YYYY', '1989'],
      ['平成元年', 'YYYY', '1989'],
      ['平成31年', 'YYYY', '2019'],
      ['令和元年', 'YYYY', '2019'],
      ['令和4年', 'YYYY', '2022'],
    ])('should convert "%s" to "%s" in %s format', (japaneseDate, format, expected) => {
      expect(toWesternCalendar(japaneseDate, format)).toBe(expected);
    });
  });
});