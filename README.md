# date-japanese
Convert Japanese calendar to Western calendar, Western calendar to Japanese calendar.

## Installation
```sh
npm install --save date-japanese
```

## Quick Start
- Node.js
    ```js
    const {jp2west, west2jp} = require('date-japanese');

    jp2west('令和4年2月21日', 'YYYY-MM-DD');// -> 2022-02-21
    west2jp('2022-02-21');// -> 令和4年2月21日
    ```

    Or in ES6 syntax:

    ```js
    import {jp2west, west2jp} from 'date-japanese';

    jp2west('令和4年2月21日', 'YYYY-MM-DD');// -> 2022-02-21
    west2jp('2022-02-21');// -> 令和4年2月21日
    ```
- Browser
    ```html
    <script src="node_modules/date-japanese/dist/build.js"></script>
    <script>
      dateJapanese.jp2west('令和4年2月21日', 'YYYY-MM-DD');// -> 2022-02-21
      dateJapanese.west2jp('2022-02-21');// -> 令和4年2月21日
    </script>
    ```

## API
### `jp2west()`
Convert Japanese calendar date to Western calendar date.  
The eras that can be used are '明治' and '大正' and '昭和' and '平成' and '令和'.

```js
import {jp2west} from 'date-japanese';

jp2west('令和元年5月1日', 'YYYY-MM-DD');// -> 2019-05-01
jp2west('令和4年2月21日', 'YYYY-MM-DD');// -> 2022-02-21
jp2west('平成元年1月', 'YYYY-MM');// -> 1989-01
jp2west('平成31年4月', 'YYYY-MM');// -> 2019-04
jp2west('昭和元年', 'YYYY');// -> 1926
jp2west('昭和64年', 'YYYY');// -> 1989
```

#### Parameters
- {string} <code>input</code> Japanese calendar date. e.g. '令和4年2月20日', '令和4年2月' , '令和4年'
- {string} <code>format</code> Output date format. The following tokens are available. The default is 'YYYY-MM-DD'.  
    - YYYY - 4 digit of year (2022)
    - YY   - 2 digit of year (22)
    - M    - month number (1 2 ... 11 12)
    - MM   - month number with 0 padding (01 02 ... 11 12)
    - MMM  - short month name (Jan Feb ... Nov Dec)
    - MMMM - full month name (January February ... November December)
    - D    - Day of Month (1 2 ... 30 31)
    - DD   - Day of Month with zero padding (01 02 ... 30 31)
- {boolean} <code>throwException</code> If set to true, an exception will be thrown if the input date is invalid as the Japanese calendar.

#### Return value
{string} Returns a Japanese calendar date as a date in the specified format.

### `west2jp()`
Convert a Western calendar date to a Japanese calendar date.

```js
import {west2jp} from 'date-japanese';

west2jp('2019-05-01');// -> 令和元年5月1日
west2jp('2022-02-21');// -> 令和4年2月21日
west2jp('1989-02');// -> 平成元年2月
west2jp('2019-04');// -> 平成31年4月
west2jp('1989');// -> 昭和64年
```

#### Parameters
- {string} <code>input</code> Western calendar date.
 
#### Return value
{string} Converts the Western calendar date to the Japanese calendar date and returns it.

### `isJapaneseCalendar()`
Check if it is a Japanese calendar.

```js
import {isJapaneseCalendar} from 'date-japanese';

isJapaneseCalendar('令和元年5月1日');// -> true
isJapaneseCalendar('令和4年2月21日');// -> true
isJapaneseCalendar('令和元年5月');// -> true
isJapaneseCalendar('令和4年2月');// -> true
isJapaneseCalendar('令和元年');// -> true
isJapaneseCalendar('令和4年');// -> true
isJapaneseCalendar('2022-02-21');// -> false
isJapaneseCalendar('2022-02');// -> false
isJapaneseCalendar('2022');// -> false
```

#### Parameters
- {string} <code>value</code> Value to be validated.

#### Return value
{boolean} Pass is true, fail is false.

## Testing
With [npm](http://npmjs.org) do:

```sh
npm test
```

## Author
**Takuya Motoshima**

* [github/takuya-motoshima](https://github.com/takuya-motoshima)
* [twitter/TakuyaMotoshima](https://twitter.com/TakuyaMotoshima)
* [facebook/takuya.motoshima.7](https://www.facebook.com/takuya.motoshima.7)

## License
[MIT](LICENSE)