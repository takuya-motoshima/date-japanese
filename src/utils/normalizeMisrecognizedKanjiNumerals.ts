/**
 * Replaces specific characters that are often misrecognized as Kanji numerals with their correct Kanji numeral counterparts.
 * @param text The input text.
 * @return The text with the specified characters replaced with Kanji numerals.
 */
export default (text: string): string => {
  const replacements: [RegExp, string][] = [
    [/[O。●○]/g, '〇'],
    [/[ー\-]/g, '一'],
    [/ニ/g, '二'],
    [/[ミ3]/g, '三'],
    [/シ/g, '四'],
    [/互/g, '五'],
    [/ロ/g, '六'],
    [/[ナ7]/g, '七'],
    [/ハ/g, '八'],
    [/ク/g, '九'],
    [/[チ+]/g, '十'],
  ];

  return replacements.reduce((acc, [pattern, replacement]) => acc.replace(pattern, replacement), text);
}