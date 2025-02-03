import {program} from 'commander';
import toWesternCalendar from './toWesternCalendar.mjs';

const options = program
  .requiredOption('-d, --date <date>', 'Date to convert')
  .parse()
  .opts();

const japaneseDate = options.date;
const westernDate = toWesternCalendar(japaneseDate);
console.log(`Japanese Calendar: ${japaneseDate}, Western Calendar: ${westernDate}`);
