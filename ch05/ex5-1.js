// 코드 5.1  Node.js를 사용해 동기적으로 폴더 내부의 파일 수 구하기

const fs = require('fs');
const files = fs.readdirSync('.');
console.log(files.length);
console.log('hi');
