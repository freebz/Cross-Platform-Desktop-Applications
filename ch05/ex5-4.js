// 코드 5.4  fs.readFile 함수로 파일 읽고 문장 찾기

'use strict';

const fs = require('fs');
const filePath = './TXT.rtf';
let termFound = false;

fs.readFile(filePath, {encoding: 'utf8'}, (err, data) => {
  if (err) { return err; }
  if (data.match(/history will call you wives/) !== null) {
    termFound = true;
  }
  console.log('term found:', termFound);
});
