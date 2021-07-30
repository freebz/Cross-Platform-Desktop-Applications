// 코드 5.3  책의 내용 스트리밍하기

'use strict';

const fs = require('fs');
const filePath = './TXT.rtf';
const fileReader = fs.createReadStream(filePath, {encoding:'utf8'});
let termFound = false;

fileReader.on('data', (data) => {
  if (data.match(/history will call you wives/) !== null) {
    termFound = true;
  }
});

fileReader.on('end', (err) => {
  if (err) { return err; }
  console.log('term found:', termFound);
});
