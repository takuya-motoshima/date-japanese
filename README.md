# date-japanese
Convert Japanese calendar to Western calendar, Western calendar to Japanese calendar.
  - [date-japanese](#date-japanese)
  - [Install](#install)
  - [Quick Start](#quick-start)
  - [API Reference](#api-reference)
  - [Unit test](#unit-test)


## Install
```sh
npm i date-japanese
```

## Quick Start
### Node.js
```js
const {jp2west, west2jp} = require('date-japanese');

// Japanese calendar to Western calendar.
jp2west('令和4年2月21日', 'YYYY-MM-DD'); // ->2022-02-21

// Western calendar to Japanese calendar.
west2jp('2022-02-21'); // ->令和4年2月21日
```

Or in ES6 syntax:
```js
import {jp2west, west2jp} from 'date-japanese';

// Japanese calendar to Western calendar.
jp2west('令和4年2月21日', 'YYYY-MM-DD'); // ->2022-02-21

// Western calendar to Japanese calendar.
west2jp('2022-02-21'); // ->令和4年2月21日
```

### Browser
```html
<script src="node_modules/date-japanese/dist/build.js"></script>
<script>
  // Japanese calendar to Western calendar.
  dateJapanese.jp2west('令和4年2月21日', 'YYYY-MM-DD'); // ->2022-02-21

  // Western calendar to Japanese calendar.
  dateJapanese.west2jp('2022-02-21'); // ->令和4年2月21日
</script>
```

## API Reference

### jp2west
Convert Japanese calendar date to Western calendar date.  
The eras that can be used are '明治' and '大正' and '昭和' and '平成' and '令和'.

**Args:**  
- {string} input: Japanese calendar date. e.g. '令和4年2月20日', '令和4年2月' , '令和4年'
- {string} format: Output date format. The following tokens are available. The default is 'YYYY-MM-DD'.  
  YYYY - 4 digit of year (2022)  
  YY   - 2 digit of year (22)  
  M    - month number (1 2 ... 11 12)  
  MM   - month number with 0 padding (01 02 ... 11 12)  
  MMM  - short month name (Jan Feb ... Nov Dec)  
  MMMM - full month name (January February ... November December)  
  D    - Day of Month (1 2 ... 30 31)  
  DD   - Day of Month with zero padding (01 02 ... 30 31)  
- {boolean} throwException: If set to true, an exception will be thrown if the input date is invalid as the Japanese calendar.

**Returns:**  
- Returns a Japanese calendar date as a date in the specified format.

**Example:**  
```js
import {jp2west} from 'date-japanese';

jp2west('明治元年1月25日', 'YYYY-MM-DD');   // ->1868-01-25
jp2west('明治45年7月29日', 'YYYY-MM-DD');   // ->1912-07-29
jp2west('大正元年7月30日', 'YYYY-MM-DD');   // ->1912-07-30
jp2west('大正15年12月24日', 'YYYY-MM-DD');  // ->1926-12-24
jp2west('昭和元年12月25日', 'YYYY-MM-DD');  // ->1926-12-25
jp2west('昭和64年1月7日', 'YYYY-MM-DD');    // ->1989-01-07
jp2west('平成元年1月8日', 'YYYY-MM-DD');    // ->1989-01-08
jp2west('平成31年4月30日', 'YYYY-MM-DD');   // ->2019-04-30
jp2west('令和元年5月1日', 'YYYY-MM-DD');    // ->2019-05-01
jp2west('令和4年2月21日', 'YYYY-MM-DD');    // ->2022-02-21
jp2west('明治元年1月', 'YYYY-MM');       // ->1868-01
jp2west('明治45年7月', 'YYYY-MM');       // ->1912-07
jp2west('大正元年7月', 'YYYY-MM');       // ->1912-07
jp2west('大正15年12月', 'YYYY-MM');      // ->1926-12
jp2west('昭和元年12月', 'YYYY-MM');      // ->1926-12
jp2west('昭和64年1月', 'YYYY-MM');       // ->1989-01
jp2west('平成元年1月', 'YYYY-MM');       // ->1989-01
jp2west('平成31年4月', 'YYYY-MM');       // ->2019-04
jp2west('令和元年5月', 'YYYY-MM');       // ->2019-05
jp2west('令和4年2月', 'YYYY-MM');        // ->2022-02
jp2west('明治元年', 'YYYY');          // ->1868
jp2west('明治45年', 'YYYY');          // ->1912
jp2west('大正元年', 'YYYY');          // ->1912
jp2west('大正15年', 'YYYY');          // ->1926
jp2west('昭和元年', 'YYYY');          // ->1926
jp2west('昭和64年', 'YYYY');          // ->1989
jp2west('平成元年', 'YYYY');          // ->1989
jp2west('平成31年', 'YYYY');          // ->2019
jp2west('令和元年', 'YYYY');          // ->2019
jp2west('令和4年', 'YYYY');           // ->2022
```

### west2jp
Convert a Western calendar date to a Japanese calendar date.

**Args:**  
- {string} input: Western calendar date.
 
**Returns:**  
- Converts the Western calendar date to the Japanese calendar date and returns it.

**Example:**  
```js
import {west2jp} from 'date-japanese';

west2jp(
west2jp('1868-01-25');  // ->明治元年1月25日
west2jp('1912-07-29');  // ->明治45年7月29日
west2jp('1912-07-30');  // ->大正元年7月30日
west2jp('1926-12-24');  // ->大正15年12月24日
west2jp('1926-12-25');  // ->昭和元年12月25日
west2jp('1989-01-07');  // ->昭和64年1月7日
west2jp('1989-01-08');  // ->平成元年1月8日
west2jp('2019-04-30');  // ->平成31年4月30日
west2jp('2019-05-01');  // ->令和元年5月1日
west2jp('2022-02-21');  // ->令和4年2月21日
west2jp('1868-01');     // ->明治元年1月
west2jp('1912-07');     // ->明治45年7月
west2jp('1912-08');     // ->大正元年8月
west2jp('1926-12');     // ->大正15年12月
west2jp('1927-01');     // ->昭和2年1月
west2jp('1989-01');     // ->昭和64年1月
west2jp('1989-02');     // ->平成元年2月
west2jp('2019-04');     // ->平成31年4月
west2jp('2019-05');     // ->令和元年5月
west2jp('2022-02');     // ->令和4年2月
west2jp('1868');        // ->明治元年
west2jp('1912');        // ->明治45年
west2jp('1913');        // ->大正2年
west2jp('1926');        // ->大正15年
west2jp('1927');        // ->昭和2年
west2jp('1989');        // ->昭和64年
west2jp('1990');        // ->平成2年
west2jp('2019');        // ->平成31年
west2jp('2020');        // ->令和2年
west2jp('2022');        // ->令和4年
```

## Unit test
```sh
npm run test
# Output: > date-japanese@0.0.0 test
#         > jest --verbose
#         
#         ts-jest[main] (WARN) Replace any occurrences of "ts-jest/utils" with just "ts-jest".
#          PASS  tests/west2jp.test.ts
#           Input including year, month and day
#             ? 1868-01-25 to 明治元年1月25日 (6 ms)
#             ? 1912-07-29 to 明治45年7月29日 (1 ms)
#             ? 1912-07-30 to 大正元年7月30日 (2 ms)
#             ? 1926-12-24 to 大正15年12月24日 (1 ms)
#             ? 1926-12-25 to 昭和元年12月25日 (1 ms)
#             ? 1989-01-07 to 昭和64年1月7日 (1 ms)
#             ? 1989-01-08 to 平成元年1月8日 (1 ms)
#             ? 2019-04-30 to 平成31年4月30日 (1 ms)
#             ? 2019-05-01 to 令和元年5月1日
#             ? 2022-02-21 to 令和4年2月21日 (3 ms)
#           Input including year, month
#             ? 1868-01 to 明治元年1月 (1 ms)
#             ? 1912-07 to 明治45年7月
#             ? 1912-08 to 大正元年8月 (1 ms)
#             ? 1926-12 to 大正15年12月
#             ? 1927-01 to 昭和2年1月
#             ? 1989-01 to 昭和64年1月
#             ? 1989-02 to 平成元年2月
#             ? 2019-04 to 平成31年4月
#             ? 2019-05 to 令和元年5月
#             ? 2022-02 to 令和4年2月 (1 ms)
#           Input is year only
#             ? 1868 to 明治元年 (1 ms)
#             ? 1912 to 明治45年 (1 ms)
#             ? 1913 to 大正2年 (1 ms)
#             ? 1926 to 大正15年
#             ? 1927 to 昭和2年
#             ? 1989 to 昭和64年 (1 ms)
#             ? 1990 to 平成2年 (1 ms)
#             ? 2019 to 平成31年 (1 ms)
#             ? 2020 to 令和2年 (1 ms)
#             ? 2022 to 令和4年 (1 ms)
#         
#          PASS  tests/jp2west.test.ts
#           Input including year, month and day
#             ? 明治元年1月25日 to 1868-01-25 (9 ms)
#             ? 明治45年7月29日 to 1912-07-29 (2 ms)
#             ? 大正元年7月30日 to 1912-07-30 (1 ms)
#             ? 大正15年12月24日 to 1926-12-24 (1 ms)
#             ? 昭和元年12月25日 to 1926-12-25
#             ? 昭和64年1月7日 to 1989-01-07
#             ? 平成元年1月8日 to 1989-01-08 (1 ms)
#             ? 平成31年4月30日 to 2019-04-30 (1 ms)
#             ? 令和元年5月1日 to 2019-05-01 (1 ms)
#             ? 令和4年2月21日 to 2022-02-21 (1 ms)
#           Input including year, month
#             ? 明治元年1月 to 1868-01 (1 ms)
#             ? 明治45年7月 to 1912-07 (1 ms)
#             ? 大正元年7月 to 1912-07 (1 ms)
#             ? 大正15年12月 to 1926-12 (1 ms)
#             ? 昭和元年12月 to 1926-12 (1 ms)
#             ? 昭和64年1月 to 1989-01
#             ? 平成元年1月 to 1989-01
#             ? 平成31年4月 to 2019-04
#             ? 令和元年5月 to 2019-05
#             ? 令和4年2月 to 2022-02
#           Input is year only
#             ? 明治元年 to 1868
#             ? 明治45年 to 1912
#             ? 大正元年 to 1912
#             ? 大正15年 to 1926 (1 ms)
#             ? 昭和元年 to 1926 (1 ms)
#             ? 昭和64年 to 1989 (1 ms)
#             ? 平成元年 to 1989 (1 ms)
#             ? 平成31年 to 2019 (2 ms)
#             ? 令和元年 to 2019 (1 ms)
#             ? 令和4年 to 2022 (1 ms)
#         
#         Test Suites: 2 passed, 2 total
#         Tests:       60 passed, 60 total
#         Snapshots:   0 total
#         Time:        4.48 s, estimated 5 s
#         Ran all test suites.
```

## Author
**Takuya Motoshima**

* [github/takuya-motoshima](https://github.com/takuya-motoshima)
* [twitter/TakuyaMotoshima](https://twitter.com/TakuyaMotoshima)
* [facebook/takuya.motoshima.7](https://www.facebook.com/takuya.motoshima.7)

## License
[MIT](LICENSE)