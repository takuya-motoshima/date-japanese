/**
 * Extracts all one-digit and two-digit kanji numbers from a given string.
 * @param {string} str The string to extract from.
 * @return {string[]} An array of one-digit and two-digit kanji numbers.
 */
const extractKanjiNumbers = str => {
  const kanjiNumberRegex = /(?:([二三四五六七八九])?(十)([一二三四五六七八九])?)|(?:[一二三四五六七八九])/g;
  return str.match(kanjiNumberRegex) || [];
}

/**
 * Convert a kanji number to its numeral equivalent.
 * If kanjiNumber includes "十", performs the existing conversion for two-digit numbers.
 * Otherwise, simply converts each kanji digit to its corresponding number (e.g., "一" to 1, "二" to 2, etc.).
 * @param {string} kanjiNumber Kanji number to convert.
 * @return {number} Numeral equivalent of the input kanji number.
 */
const convertKanjiToNumber = kanjiNumber => {
  const kanjiDigits = ['一', '二', '三', '四', '五', '六', '七', '八', '九'];
  let convertedNumber = '';

  if (kanjiNumber.includes('十')) {
    // 1文字目が「十」の場合、convertedNumberに"1"をセット。
    if (kanjiNumber[0] === '十') {
      convertedNumber = '1';
    }
    // 1文字目が「二〜九」で２文字目が「十」の場合、convertedNumberに"2〜9"をセット。
    else if (kanjiDigits.includes(kanjiNumber[0]) && kanjiNumber[1] === '十') {
      convertedNumber = String(kanjiDigits.indexOf(kanjiNumber[0]) + 1);
    }

    // 最後の文字が「一〜九」の場合、convertedNumberに"1〜9"をセット。最後の文字が「十」の場合、0をセット。
    const lastDigit = kanjiNumber[kanjiNumber.length - 1];
    if (kanjiDigits.includes(lastDigit)) {
      convertedNumber += String(kanjiDigits.indexOf(lastDigit) + 1);
    } else if (lastDigit === '十') {
      convertedNumber += '0';
    }
  } else {
    // 「十」を含まない場合は、漢数字をシンプルに数字に置き換える
    for (let i = 0; i < kanjiNumber.length; i++) {
      const digit = kanjiNumber[i];
      if (kanjiDigits.includes(digit)) {
        convertedNumber += String(kanjiDigits.indexOf(digit) + 1);
      }
    }
  }

  return Number(convertedNumber);
}

/**
 * Converts kanji numbers within a date string to their numeral equivalents.
 * Replaces "元年" with "1年".
 * @param {string} kanjiDate The date string containing kanji numbers.
 * @return {string} The date string with kanji numbers replaced with numerals.
 */
export default kanjiDate => {
  // Replace "元年" with "1年".
  const convertedDate = kanjiDate.replace('元年', '1年');

  const kanjiNumbers = extractKanjiNumbers(convertedDate);
  return kanjiNumbers.reduce((result, kanjiNumber) => {
    const number = convertKanjiToNumber(kanjiNumber);
    return result.replace(kanjiNumber, String(number));
  }, convertedDate);
}