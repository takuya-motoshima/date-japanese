import {program} from 'commander';
import toJapaneseCalendar from './toJapaneseCalendar.mjs';

const options = program
  .requiredOption('-d, --date <date>', 'Date to convert')
  .parse()
  .opts();

const westernDate = options.date;
const japaneseDate = toJapaneseCalendar(westernDate);
console.log(`Western Calendar: ${westernDate}, Japanese Calendar: ${japaneseDate}`);
