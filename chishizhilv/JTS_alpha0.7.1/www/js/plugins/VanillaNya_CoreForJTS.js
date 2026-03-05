//=============================================================================
// VanillaNya_CoreForJTS.js
//=============================================================================

/*:
 * @plugindesc 赤石之旅核心
 * @author VanillaNya
 *
 * @help 这个插件专为赤石之旅准备
 * 
 */
const os = require('os');
const v8 = require('v8'); // 获取V8引擎信息

function formatBytes(bytes) {
  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  let i = 0;
  while (bytes >= 1024 && i < units.length - 1) {
    bytes /= 1024;
    i++;
  }
  return `${bytes.toFixed(2)} ${units[i]}`;
}

// 系统基础信息
const sysInfo = {
  platform: os.platform(),
  arch: os.arch(),
  release: os.release(),
  hostname: os.hostname(),
  uptime: `${(os.uptime() / 3600).toFixed(2)} 小时`,
  
  // CPU信息
  cpus: {
    model: os.cpus()[0].model,
    cores: os.cpus().length,
    speed: `${os.cpus()[0].speed} MHz`
  },
  
  // 内存信息
  memory: {
    total: formatBytes(os.totalmem()),
    free: formatBytes(os.freemem()),
    used: formatBytes(os.totalmem() - os.freemem()),
    usage: `${((1 - os.freemem() / os.totalmem()) * 100).toFixed(2)}%`,
    heap: formatBytes(v8.getHeapStatistics().used_heap_size)
  },
  
  // 网络信息
  network: [].concat.apply([], 
    Object.values(os.networkInterfaces())
  ).filter(i => i.family === 'IPv4' && !i.internal)
   .map(i => i.address),
  
  // 用户信息
  user: os.userInfo(),
  
  // 负载信息
  loadavg: os.loadavg().map(v => v.toFixed(2))
};




console.groupCollapsed('平台与设备信息(来自os模块等)');

console.log('%c======== 系统诊断信息 ========','font-weight: bold');
console.log(`平台: ${sysInfo.platform} (${sysInfo.arch})`);
console.log(`系统版本: ${sysInfo.release}`);
console.log(`运行时间: ${sysInfo.uptime}`);

console.log(`%c=== CPU ===`,'font-weight: bold');
console.log(`型号: ${sysInfo.cpus.model}`);
console.log(`核心数: ${sysInfo.cpus.cores}`);
console.log(`速度: ${sysInfo.cpus.speed}`);
console.log(`15分钟负载: ${sysInfo.loadavg.join(' | ')}`);

console.log(`%c=== 内存 ===`,'font-weight: bold');
console.log(`物理内存: ${sysInfo.memory.used} / ${sysInfo.memory.total} (${sysInfo.memory.usage})`);
console.log(`V8堆内存: ${sysInfo.memory.heap}`);

console.groupCollapsed(`=== 网络 ===`);
console.log(`IP地址: ${sysInfo.network.join(' | ')}`);
console.log(`主机名: ${sysInfo.hostname}`);
console.groupEnd();

console.groupCollapsed(`=== 用户 ===`);
console.log(`用户名: ${sysInfo.user.username}`);
console.log(`主目录: ${sysInfo.user.homedir}`);
console.groupEnd();

console.info('提示：不要向不信任的人展示网络和用户信息\nTip: Don\'t show network and user information to untrusted people.')
console.groupEnd();

if (os.freemem < 100) {
console.warn(`你在逗我吗？可用内存只剩 ${os.freemem}MB 了怎么玩游戏？`);
}

console.info('警告：不要在这里运行任何你不知道功能的JavaScript，否则可能造成财产损失!\nWARN: DO NOT RUN any JavaScript which is you DON\'T KNOW MEAN!')