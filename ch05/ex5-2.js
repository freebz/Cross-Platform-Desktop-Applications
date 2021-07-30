// 코드 5.2  Node.js를 사용해 비동기적으로 폴더 내부의 파일 수 구하기

const fs = require('fs');
fs.readdir('.', (err, files) => {
  if (err) { return err; }
  console.log(files.length);
});
console.log('hi');
