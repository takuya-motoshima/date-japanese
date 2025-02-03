import {isValidJapaneseCalendar} from '../dist/build.mjs';

describe('isValidJapaneseCalendar', () => {
  describe('Valid Japanese Calendar Dates', () => {
    test.each([
      '明治元年1月25日',
      '明治45年7月29日',
      '大正元年7月30日',
      '大正15年12月24日',
      '昭和元年12月25日',
      '昭和64年1月7日',
      '平成元年1月8日',
      '平成31年4月30日',
      '令和元年5月1日',
      '令和4年2月21日',
    ])('should return true for valid Japanese date: %s', (date) => {
      expect(isValidJapaneseCalendar(date)).toBe(true);
    });
  });

  describe('Valid Japanese Calendar Year-Month Dates', () => {
    test.each([
      '明治元年1月',
      '明治45年7月',
      '大正元年7月',
      '大正15年12月',
      '昭和元年12月',
      '昭和64年1月',
      '平成元年1月',
      '平成31年4月',
      '令和元年5月',
      '令和4年2月',
    ])('should return true for valid Japanese year-month date: %s', (date) => {
      expect(isValidJapaneseCalendar(date)).toBe(true);
    });
  });

  describe('Valid Japanese Calendar Year Dates', () => {
    test.each([
      '明治元年',
      '明治45年',
      '大正元年',
      '大正15年',
      '昭和元年',
      '昭和64年',
      '平成元年',
      '平成31年',
      '令和元年',
      '令和4年',
    ])('should return true for valid Japanese year date: %s', (date) => {
      expect(isValidJapaneseCalendar(date)).toBe(true);
    });
  });

  describe('Invalid Western Calendar Dates', () => {
    test.each([
      ['1868-01-25', 'YYYY-MM-DD'],
      ['1912-07-29', 'YYYY-MM-DD'],
      ['1912-07-30', 'YYYY-MM-DD'],
      ['1926-12-24', 'YYYY-MM-DD'],
      ['1926-12-25', 'YYYY-MM-DD'],
      ['1989-01-07', 'YYYY-MM-DD'],
      ['1989-01-08', 'YYYY-MM-DD'],
      ['2019-04-30', 'YYYY-MM-DD'],
      ['2019-05-01', 'YYYY-MM-DD'],
      ['2022-02-21', 'YYYY-MM-DD'],
    ])('should return false for invalid Western date: %s (%s format)', (date, format) => {
      expect(isValidJapaneseCalendar(date)).toBe(false);
    });
  });

  describe('Invalid Western Calendar Year-Month Dates', () => {
    test.each([
      ['1868-01', 'YYYY-MM'],
      ['1912-07', 'YYYY-MM'],
      ['1912-08', 'YYYY-MM'],
      ['1926-12', 'YYYY-MM'],
      ['1927-01', 'YYYY-MM'],
      ['1989-01', 'YYYY-MM'],
      ['1989-02', 'YYYY-MM'],
      ['2019-04', 'YYYY-MM'],
      ['2019-05', 'YYYY-MM'],
      ['2022-02', 'YYYY-MM'],
    ])('should return false for invalid Western year-month date: %s (%s format)', (date, format) => {
      expect(isValidJapaneseCalendar(date)).toBe(false);
    });
  });

  describe('Invalid Western Calendar Year Dates', () => {
    test.each([
      '1868',
      '1912',
      '1913',
      '1926',
      '1927',
      '1989',
      '1990',
      '2019',
      '2020',
      '2022',
    ])('should return false for invalid Western year date: %s', (date) => {
      expect(isValidJapaneseCalendar(date)).toBe(false);
    });
  });
});