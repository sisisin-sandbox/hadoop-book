#!/usr/bin/env node

process.stdin.setEncoding('utf8');
process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null) map(chunk.toString());
});

function map(text) {
  text.split('\n').forEach(line => {
    const year = line.substr(15, 4);
    const temp = line.substr(87, 5);
    const quality = line.substr(92, 1);

    if (temp !== '+9999' && /[01459]/.test(quality)) {
      console.log(year + '\t' + temp);
    }
  });
}
