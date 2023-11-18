const os = require('os');

const systemUpTime = os.uptime();
// console.log(systemUpTime);

const userInfo = os.userInfo();
// console.log(userInfo);

const osName = os.type();
// console.log(osName);

const release = os.release();
// console.log(release);

const totalMemory = os.totalmem();
console.log(totalMemory);

const freeMemory = os.freemem();
console.log(freeMemory);

