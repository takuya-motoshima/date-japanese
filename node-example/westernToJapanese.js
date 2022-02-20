const cal = require('../dist/build.common');

const inputs = [
  '2022/2/20',
  '2022/2',
  '2022'
];

for (let input of inputs) {
  const output = cal.west2jp(input);
  console.log(`${input} -> ${output}`);
}