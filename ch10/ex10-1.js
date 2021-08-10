// 코드 10.1  자바스크립트로 사용자의 운영체제 확인하기

'use strict';

const os        = require('os');
const platform  = os.platform();

switch (platform) {
case 'darwin':
  console.log('Running Mac OS');
  break;
case 'linux':
  console.log('Running Linux');
  break;
case 'win32':
  console.log('Running Windows');
  break;
default:
  console.log('Cound not detect OS for platform', platform);
}
