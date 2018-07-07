#!/usr/bin/env node

process.stdin.setEncoding('utf8');
process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null) reduce(chunk.toString());
});

function reduce(text) {
  let lastKey;
  let maxValue = -100000;
  text
    .split('\n')
    .map(line => line.split('\t'))
    .forEach(([key, value]) => {
      if (lastKey !== undefined && lastKey !== key) {
        console.log(lastKey + '\t' + maxValue);
        lastKey = key;
        maxValue = +value;
      } else {
        lastKey = key;
        maxValue = Math.max(maxValue, +value);
      }
    });
}
