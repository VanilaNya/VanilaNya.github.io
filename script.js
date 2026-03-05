// 辅助函数：读取特定名称的 cookie 值
function getCookie(name) {
    let match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? match[2] : null;
}



// 导航栏加载逻辑
document.addEventListener("DOMContentLoaded", function () {
    // 查找文档中带有 data-navbar-id 属性的所有 div
    const navbarContainer = document.querySelector("div[data-navbar-id]");
    if (navbarContainer) {
        const navbarId = navbarContainer.getAttribute("data-navbar-id"); // 获取需要加载的导航栏 ID
        fetch("/navbar.html") // 确保路径正确
            .then(response => {
                if (!response.ok) {
                    throw new Error(`无法加载导航栏文件: ${response.statusText}`);
                }
                return response.text();
            })
            .then(data => {
                // 创建一个临时的 DOM 容器来解析 HTML
                const tempDiv = document.createElement("div");
                tempDiv.innerHTML = data;

                // 查找指定 ID 的导航栏
                const navbar = tempDiv.querySelector(`div[data-navbar-id="${navbarId}"]`);
                if (navbar) {
                    // 替换整个 div
                    navbarContainer.replaceWith(navbar);
                } else {
                    console.error(`未找到 data-navbar-id 为 "${navbarId}" 的导航栏`);
                }
            })
            .catch(error => console.error("导航栏加载失败:", error));
    }
});

//初始化inbody对象
var inbody = document.getElementsByClassName("inbody")[0];

var nightMode = getCookie('nightmode'); // 获取 'nightmode' cookie 的值
if (nightMode === null) {
    nightMode = false; // 更新变量值（避免重复声明）
}

// 立即应用夜间模式（同步执行，尽早设置样式以避免白闪）
if (nightMode) {
    try {
        // 标记以便 CSS 或其它脚本识别
        document.documentElement.classList.add('nightmode');

        // 尽早设置根与 body 的颜色，减小渲染闪烁窗口
        document.documentElement.style.backgroundColor = '#333';
        document.documentElement.style.color = '#fff';
        if (document.body) {
            document.body.style.backgroundColor = '#333';
            document.body.style.color = '#fff';
        }
        if (inbody) {
            inbody.style.backgroundColor = "#333";
        }
    } catch (e) {
        // 容错：如果在非常早期节点还不存在 body 等，捕获错误并继续
        console.error('早期应用夜间模式失败:', e);
    }
}

// 页面加载时再次确保样式并输出日志（保留原有行为）
document.addEventListener("DOMContentLoaded", function () {
    console.log('夜间模式:', !!nightMode); // 输出日志（强制布尔）
    if (nightMode) {
        console.log('夜间模式已启用'); // 输出日志
        if (document.body) {
            document.body.style.backgroundColor = '#333'; // 设置背景颜色为深色
            document.body.style.color = '#fff'; // 设置文字颜色为白色
        }
        if (inbody) inbody.style.backgroundColor = "#333";
    }
});



// 选取所有的按钮并添加点击事件
document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', function() {
        // 找到最近的内容div
        const fold = this.nextElementSibling; // 获取按钮下的下一个元素（即content div）
        
        // 切换内容的显示状态
        if (fold.classList.contains('show')) { // 使用contains()方法来检查类名
            fold.classList.remove('show'); // 收起内容
        } else {
            fold.classList.add('show'); // 展开内容
        }
    });
});



//一键复制
// 选择所有带有 copybutton 类的元素
document.querySelectorAll('.copybutton').forEach(button => {
    // 为每个按钮添加点击事件
    button.onclick = () => {
        // 获取 copytext 属性
        const textToCopy = button.getAttribute('copytext');
        
        // 使用 Clipboard API 复制文本
        navigator.clipboard.writeText(textToCopy).then(() => {
            // 复制成功的提示
            alert('已复制到剪贴板: ' + textToCopy);
        }).catch(err => {
            // 复制失败的处理
            console.error('复制失败:', err);
        });
    };
});

//图片点击切换黑白
var images = document.querySelectorAll('img');
images.forEach(function(img){
    img.addEventListener('click',function(){
        if (img.style.filter === 'grayscale(100%)'){
            img.style.filter = 'none';
        } else {
            img.style.filter =  'grayscale(100%)';
        }
    });
});


//页脚
const muban = document.getElementById('muban');//获取容器

const a = document.createElement('p');//创建元素
a.textContent = '本网站由"VanillaNya5"制作';
muban.appendChild(a);

const b = document.createElement('p');//创建元素
b.textContent = '©2025 保留所有权利.';
muban.appendChild(b);

const c = document.createElement('p');
const link = document.createElement('a');
link.href = 'https://pages.github.com/';
link.target = 'blank';
link.rel = 'noopener noreferrer';
link.textContent = 'Powered by GitHub Pages';
c.appendChild(link);
c.style.fontSize = '0.85em';
c.style.margin = '0';
muban.appendChild(c);

// 新增：在页面加载完成时显示 UTC 时间（加载完成时刻）
document.addEventListener('DOMContentLoaded', function () {
  const footer = document.getElementById('muban') || muban;
  if (!footer) return;
  const utcP = document.createElement('p');
  utcP.id = 'muban-utc';
  utcP.textContent = 'Dom加载完成系统时间：' + new Date().toUTCString();
  utcP.style.fontSize = '0.8em'; // 调小字体，可修改为 0.75em / 0.9em 等
  utcP.style.margin = '0';
  footer.appendChild(utcP);
});

// 获取页脚元素
const body = document.querySelector('body');
// 创建图片
const bodyImage = document.createElement('img');
bodyImage.src = '/data/momo.png';
bodyImage.alt = '右下角图片';
bodyImage.style.width = '50px'; // 设置图片宽度
bodyImage.style.height = '65px'; // 设置图片高度
bodyImage.style.cursor = 'pointer'; // 鼠标悬停时显示手型
// 设置图片样式，使其在最下方并与右边保持 40px 距离
bodyImage.style.position = 'absolute'; // 绝对定位
bodyImage.style.bottom = '0'; // 距离底部 0
bodyImage.style.right = '50px'; // 距离右侧 40px
bodyImage.title = '点击桃井回到顶部！\n可以右键查看桃井的信息！'; // 设置鼠标悬停时显示的文字
// 确保父容器是相对定位
body.style.position = 'relative';
// 将图片添加到页脚
body.appendChild(bodyImage);
bodyImage.setAttribute('data-menu-id', 'footer-momo');  // 设置自定义属性，用于右键菜单

document.addEventListener("DOMContentLoaded", () => {
    // 加载 context-menus.html 文件
    fetch("/context-menus.html")
        .then(response => response.text())
        .then(html => {
            const tempDiv = document.createElement("div");
            tempDiv.innerHTML = html;

            // 获取所有右键菜单
            const menus = Array.from(tempDiv.querySelectorAll(".custom-menu"));

            // 绑定右键菜单逻辑
            document.querySelectorAll("[data-menu-id]").forEach(element => {
                const menuId = element.getAttribute("data-menu-id");
                const menuTemplate = menus.find(m => m.getAttribute("data-menu-id") === menuId);

                if (menuTemplate) {
                    element.addEventListener("contextmenu", event => {
                        event.preventDefault();
                        showContextMenu(event, menuTemplate);
                    });
                }
            });
        })
        .catch(error => console.error("加载右键菜单失败:", error));
});

// 显示右键菜单的函数
function showContextMenu(event, menuTemplate) {
    // 移除之前显示的菜单
    document.querySelectorAll(".custom-menu").forEach(menu => menu.remove());

    // 克隆菜单并显示
    const clonedMenu = menuTemplate.cloneNode(true);
    clonedMenu.style.display = "block";
    clonedMenu.style.position = "absolute";
    document.body.appendChild(clonedMenu);

    // 设置菜单位置
    const { left, top } = calculateMenuPosition(event, clonedMenu);
    clonedMenu.style.left = `${left}px`;
    clonedMenu.style.top = `${top}px`;

    // 夜间模式样式
    if (getCookie('nightmode')) {
        // 设置菜单背景颜色
        clonedMenu.style.backgroundColor = '#333';
    
        // 设置 <li> 标签的颜色
        clonedMenu.querySelectorAll('li').forEach(li => {
            li.style.backgroundColor = '#333'; // 设置文字颜色为白色
        });
    }

    // 点击其他地方时隐藏菜单
    document.addEventListener("click", () => clonedMenu.remove(), { once: true });
}

// 计算菜单位置，避免超出窗口边界
function calculateMenuPosition(event, menu) {
    const menuWidth = menu.offsetWidth;
    const menuHeight = menu.offsetHeight;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    let left = event.pageX;
    let top = event.pageY;

    if (left + menuWidth > windowWidth) {
        left = event.pageX - menuWidth;
    }
    if (top + menuHeight > windowHeight) {
        top = event.pageY - menuHeight;
    }

    return { left, top };
}




function openUrl(url) {
    window.open(url, '_blank'); // 在新标签页中打开指定的 URL
}




// 动态添加CSS样式（兼容所有浏览器）
const styleTag = document.createElement('style');
styleTag.textContent = `
  .link-error {
    background-color: #ffeb3b;  /* 黄色背景 */
  }
  .link-timeout {
    text-decoration: line-through;
    color: #f44336 !important;  /* 红色文本 */
    background-color: #ffebee;   /* 浅红色背景 */
  }
`;
document.head.appendChild(styleTag);

// 防止重复访问
function normalizeUrl(url) {
  return url.endsWith('/') ? url.slice(0, -1) : url;
}

const currentUrl = normalizeUrl(window.location.href);
const linkStatusMap = new Map();

// 使用XMLHttpRequest代替fetch提高兼容性
function checkLinkStatus(link) {
  return new Promise((resolve) => {
    if (!link.href.startsWith('http') || normalizeUrl(link.href) === currentUrl) {
      resolve(false);
      return;
    }

    const xhr = new XMLHttpRequest();
    xhr.open('HEAD', link.href, true);
    
    let timedOut = false;
    const timeoutId = setTimeout(() => {
      timedOut = true;
      xhr.abort();
      resolve('timeout');
    }, 5000); // 5秒超时
    
    xhr.onload = function() {
      if (timedOut) return;
      clearTimeout(timeoutId);
      
      if (xhr.status >= 200 && xhr.status < 400) {
        resolve(xhr.status);
      } else if (xhr.status) {
        resolve(xhr.status);
      } else {
        resolve('error');
      }
    };
    
    xhr.onerror = function() {
      if (timedOut) return;
      clearTimeout(timeoutId);
      resolve('error');
    };
    
    // 设置超时处理
    xhr.ontimeout = function() {
      if (timedOut) return;
      clearTimeout(timeoutId);
      resolve('timeout');
    };
    
    try {
      xhr.send();
    } catch (e) {
      if (!timedOut) clearTimeout(timeoutId);
      resolve('error');
    }
  });
}

// 标记问题链接
function markProblemLink(link, status) {
  if (status === 'timeout') {
    link.classList.add('link-timeout');
    link.dataset.statusCode = '超时';
  } else if (status === 'error' || status >= 400) {
    const definiteErrorCodes = [404, 410, 500]; // 确定错误状态码
    
    if (status >= 400 && definiteErrorCodes.includes(status)) {
      link.classList.add('link-timeout');
    } else {
      link.classList.add('link-error');
    }
    
    link.dataset.statusCode = status === 'error' ? '网络错误' : status;
  }
}

// 并行处理函数
async function processInParallel(tasks, maxConcurrent = 5) {
  let index = 0;
  let activeCount = 0;
  
  return new Promise((resolve) => {
    function runNext() {
      if (index >= tasks.length) {
        if (activeCount === 0) resolve();
        return;
      }
      
      activeCount++;
      const currentIndex = index++;
      const task = tasks[currentIndex];
      
      task().then(result => {
        if (result && result.link && result.status) {
          if (result.status === 'timeout' || result.status === 'error' || result.status >= 400) {
            markProblemLink(result.link, result.status);
          }
        }
      }).finally(() => {
        activeCount--;
        runNext();
      });
    }
    
    // 创建并行任务
    for (let i = 0; i < Math.min(maxConcurrent, tasks.length); i++) {
      runNext();
    }
  });
}

// 主函数：初始化处理所有链接
async function processAllLinks() {
  if (!window.enableLinkChecking) return;
  
  const links = document.querySelectorAll('a');
  links.forEach(link => {
    link.setAttribute('rel', 'noopener noreferrer');
  });
  
  const tasks = Array.from(links).map(link => async () => {
    const status = await checkLinkStatus(link);
    return { link, status };
  });
  
  await processInParallel(tasks, 5);
}

// 处理链接点击
function handleLinkClick(event) {
  const link = event.target.closest('a');
  if (!link) return;
  
  const isSameOrigin = link.origin === window.location.origin;
  const linkUrl = normalizeUrl(new URL(link.href, window.location.origin).href);
  
  // 检查是否重复访问
  if (isSameOrigin && linkUrl === currentUrl) {
    event.preventDefault();
    alert('您已经在这里啦~\n如果确实需要重新载入可以浏览器刷新~');
    return;
  }
  
  // 处理问题链接
  if (link.classList.contains('link-timeout') || link.classList.contains('link-error')) {
    event.preventDefault();
    const statusCode = link.dataset.statusCode || '未知错误';
    
    const message = link.classList.contains('link-timeout') 
      ? `该链接无法访问（状态: ${statusCode})\n你可能需要VPN\n是否坚持尝试访问？` 
      : `该链接可能存在问题（状态: ${statusCode})\n可能可以访问也可能受限\n是否坚持尝试访问？`;
    
    if (confirm(message)) {
      window.open(link.href, '_blank');
    }
  }
}

// 页面加载完成后执行
document.addEventListener("DOMContentLoaded", async function() {
  // 获取Cookie设置
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }
  
  window.enableLinkChecking = true; // 默认启用
  
  // 覆盖默认设置的cookie
  if (getCookie('linkCheckDisable') !== undefined) {
    window.enableLinkChecking = false;
  }
  
  if (window.enableLinkChecking) {
    await processAllLinks();
  }
  
  document.addEventListener('click', handleLinkClick);
});







if (!getCookie('toTopDisable')) {
    // 回顶部
    const totop = document.createElement('div');
    totop.id = 'toTop';
    totop.title = '点我可以快速到达顶部哦';
    totop.textContent = '点我回顶部';
    muban2.appendChild(totop);

    var toTop = document.querySelector("#toTop");
    toTop.style.display = "none"; // 初始隐藏

    // 滚动监听
    window.addEventListener("scroll", scrollHandler);

    function scrollHandler() {
        var distanceY = document.documentElement.scrollTop || document.body.scrollTop;
        if (distanceY > 200) {
            toTop.style.display = "block";
            if (isFooterImageFullyVisible()) {
                toTop.classList.add('fade-out');
            } else {
                toTop.classList.remove('fade-out');
            }
        } else {
            toTop.classList.remove('fade-out');
            toTop.style.display = "none";
        }
    }

    // 动画结束后彻底隐藏
    toTop.addEventListener('transitionend', function() {
        if (toTop.classList.contains('fade-out')) {
            toTop.style.display = "none";
        }
    });

    // 回顶部点击事件
    toTop.addEventListener("click", function() {
        let timer = setInterval(function () {
            var distanceY = document.documentElement.scrollTop || document.body.scrollTop;
            if (distanceY == 0){
                clearInterval(timer);
                return;
            }
            var speed = Math.ceil(distanceY/16);
            document.documentElement.scrollTop = distanceY - speed;
        }, 16);
    });
}

// 判断页脚图片是否完全显示
function isFooterImageFullyVisible() {
    const rect = bodyImage.getBoundingClientRect();
    return rect.bottom <= window.innerHeight && rect.right <= window.innerWidth;
}

// 页脚图片绑定回顶部事件
bodyImage.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


(function(){
  const IGNORE=new Set(['SCRIPT','STYLE','TEXTAREA','INPUT','CODE','PRE','A']);
  // 支持 {'a','b','c'} 格式，c 可选（单双引号都支持）
  const RE=/{\s*(['"])([^'"]+)\1\s*,\s*(['"])([^'"]+)\3(?:\s*,\s*(['"])([^'"]+)\5)?\s*}/g;
  const MIN_MS=3000;
  let cnt=0, active=null;
  const map=new Map();

  // 注入样式（包含 target 加粗样式）
  (function injectStyles(){
    const css = `
      #annotation { position: static !important; width: auto; max-height: none; overflow: visible; padding: 0; margin: 0; font-size: 0.7em; }

      #annotation .annotation-item {
        padding: 6px 8px;
        margin: 4px 0;
        border-radius: 4px;
        cursor: pointer;
        word-break: break-word;
        background: transparent;
        transition: background-color .18s ease, color .12s ease;
        color: inherit;
      }
      #annotation .annotation-item:hover { background: rgba(0,0,0,0.04); }

      /* 父元素负责位移（动画），不包含 scale */
      .annotation-marker, .annotation-item-marker {
        display: inline-block;
        line-height: 1;
        vertical-align: baseline;
        margin-left: 4px;
        margin-right: 2px;
        position: relative;
        top: -0.15em;
        padding: 0 2px;
        cursor: pointer;
        user-select: none;
      }

      /* 子元素负责放大（scale），立即生效 —— 不对 transform 做 transition */
      .annotation-scale {
        display: inline-block;
        font-size: 0.7em;
        transform-origin: center center;
        transition: color .12s ease;
        color: inherit;
      }

      /* 列表内 marker 的子项相对大小 */
      .annotation-item-marker .annotation-scale,
      .annotation-item-marker > .annotation-scale {
        font-size: 1em;
      }

      /* 放大态：只作用于子元素 .annotation-scale（立即生效） */
      .annotation-scale.annotation-active {
        transform: scale(1.6);
      }

      .annotation-active {
        font-weight: 700 !important;
        background: rgba(0,0,0,0.06);
        border-radius: 3px;
      }

      /* target 在悬停时加粗 */
      .annotation-target-bold { font-weight: 700; }

      /* 跳动动画：单峰回弹（只做 translateY），去掉中间回弹帧 */
      .anno-jump-list { animation: anno-jump-list 560ms cubic-bezier(.1,.85,.25,1) both; }
      @keyframes anno-jump-list {
        0%   { transform: translateY(0); }
        40%  { transform: translateY(-28px); }
        100% { transform: translateY(0); }
      }

      .anno-jump { animation: anno-jump 450ms cubic-bezier(.1,.85,.25,1) both; }
      @keyframes anno-jump {
        0%   { transform: translateY(0); }
        40%  { transform: translateY(-22px); }
        100% { transform: translateY(0); }
      }
    `;
    const s=document.createElement('style');
    s.textContent=css;
    document.head.appendChild(s);
  })();

  const container = document.getElementById('annotation') || null;
  if(!container){
    if(console && console.debug) console.debug('注释：未找到 div#annotation，注释功能已停用（不创建浮窗）');
    return;
  }

  function waitForScrollEnd(target, timeout = 900) {
    return new Promise(resolve => {
      const start = Date.now();
      const desiredTop = (window.innerHeight - target.getBoundingClientRect().height) / 2;
      let lastScroll = window.scrollY;
      function check(){
        const rect = target.getBoundingClientRect();
        const curScroll = window.scrollY;
        const still = Math.abs(curScroll - lastScroll) < 2;
        lastScroll = curScroll;
        const nearCenter = Math.abs(rect.top - desiredTop) < 6;
        if (nearCenter || still || (Date.now() - start) > timeout) {
          setTimeout(resolve, 500); // 0.5s 延迟再触发动画
        } else {
          requestAnimationFrame(check);
        }
      }
      requestAnimationFrame(check);
    });
  }

  function walk(){
    const w=document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(n){
        if(!n.nodeValue || !n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        const p=n.parentNode; if(!p || IGNORE.has(p.tagName)) return NodeFilter.FILTER_REJECT;
        if(p.closest && p.closest('#annotation')) return NodeFilter.FILTER_REJECT;
        RE.lastIndex=0; return RE.test(n.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    const nodes=[]; while(w.nextNode()) nodes.push(w.currentNode); nodes.forEach(processTextNode);
  }

  function processTextNode(textNode){
    const s=textNode.nodeValue; let last=0, m; const frag=document.createDocumentFragment(); RE.lastIndex=0;
    while((m=RE.exec(s))!==null){
      const start=m.index, end=RE.lastIndex, a=m[2], b=m[4], c=m[6]||null; // a,b 必有，c 可选
      if(start>last) frag.appendChild(document.createTextNode(s.slice(last,start)));
      const id='id'+(++cnt);

      // 正文显示：如果有 c，先插入 c（span）再插入 [a]（sup）
      let bodyTargetSpan = null;
      if(c){
        bodyTargetSpan = document.createElement('span');
        bodyTargetSpan.className = 'annotation-target';
        bodyTargetSpan.dataset.id = id;
        bodyTargetSpan.textContent = c;
        frag.appendChild(bodyTargetSpan);
      }

      // 正文角标：sup 为位移容器，内部放 .annotation-scale 负责 scale
      const sup=document.createElement('sup');
      sup.className='annotation-marker';
      sup.dataset.id=id;
      const supScale = document.createElement('span');
      supScale.className = 'annotation-scale';
      supScale.textContent = `[${a}]`;
      supScale.title = b; // b 作为 tooltip（注释文本）
      sup.appendChild(supScale);

      // 鼠标悬停时让 c 加粗（若存在）
      sup.addEventListener('mouseenter', ()=> {
        if(bodyTargetSpan) bodyTargetSpan.classList.add('annotation-target-bold');
        const rec = map.get(id);
        if(rec && rec.listTargetSpan) rec.listTargetSpan.classList.add('annotation-target-bold');
      });
      sup.addEventListener('mouseleave', ()=> {
        if(bodyTargetSpan) bodyTargetSpan.classList.remove('annotation-target-bold');
        const rec = map.get(id);
        if(rec && rec.listTargetSpan) rec.listTargetSpan.classList.remove('annotation-target-bold');
      });

      // 点击跳转到列表并在滚动结束后触发列表 marker 跳动和激活
      sup.addEventListener('click', (e)=>{
        e.stopPropagation();
        const li=document.getElementById('item-'+id);
        if(li){
          li.scrollIntoView({behavior:'smooth', block:'center'});
          waitForScrollEnd(li).then(()=> {
            animateListMarker(id);
            activate(id);
          });
        }
      });
      frag.appendChild(sup);

      // 列表项： "[a]c  b" 形式
      const li=document.createElement('div');
      li.id='item-'+id;
      li.className='annotation-item';
      // marker 外层（用于位移动画），内有 .annotation-scale
      const markerOuter = document.createElement('span');
      markerOuter.className = 'annotation-item-marker';
      markerOuter.dataset.id = id;
      const markerScale = document.createElement('span');
      markerScale.className = 'annotation-scale';
      markerScale.textContent = `[${a}]`;
      markerOuter.appendChild(markerScale);
      li.appendChild(markerOuter);

      // 列表中的 c（可选），作为独立 span 以便加粗/放大
      let listTargetSpan = null;
      if(c){
        listTargetSpan = document.createElement('span');
        listTargetSpan.className = 'annotation-target';
        listTargetSpan.dataset.id = id;
        listTargetSpan.textContent = c;
        li.appendChild(listTargetSpan);
      }

      // 两个空格后再显示 b（注释文本）
      li.appendChild(document.createTextNode('   ' + b));

      // 列表点击行为：跳回正文并激活
      li.addEventListener('click', (e)=>{
        e.stopPropagation();
        const m=document.querySelector(`.annotation-marker[data-id="${id}"]`);
        if(m){
          m.scrollIntoView({behavior:'smooth', block:'center'});
          waitForScrollEnd(m).then(()=> {
            // 让正文 sup 也跳动并激活
            activate(id);
          });
        }
      });
      container.appendChild(li);

      // 存入映射，后续操作使用
      map.set(id, {sup, li, supScale, markerOuter, markerScale, bodyTargetSpan, listTargetSpan});
      last=end;
    }
    if(last<s.length) frag.appendChild(document.createTextNode(s.slice(last)));
    if(frag.childNodes.length) textNode.parentNode.replaceChild(frag, textNode);
  }

  function clearActiveImmediate(){
    if(!active) return;
    try{
      if(active.supScale) active.supScale.classList.remove('annotation-active');
      if(active.markerScale) active.markerScale.classList.remove('annotation-active');
      if(active.li) active.li.classList.remove('annotation-active');
      if(active.bodyTargetSpan) active.bodyTargetSpan.classList.remove('annotation-target-bold');
      if(active.listTargetSpan) active.listTargetSpan.classList.remove('annotation-target-bold');
      if(active.sup) active.sup.classList.remove('anno-jump');
      if(active.markerOuter) active.markerOuter.classList.remove('anno-jump-list');
    }catch(e){}
    if(active.timer) { clearTimeout(active.timer); active.timer = null; }
    if(active.handler) removeInteraction(active.handler);
    active = null;
  }

  function clearOnUser(){ clearActiveImmediate(); }

  function addInteraction(h){
    document.addEventListener('click', h, true);
    document.addEventListener('keydown', h, true);
    document.addEventListener('wheel', h, {passive:true, capture:true});
    document.addEventListener('touchstart', h, {passive:true, capture:true});
  }
  function removeInteraction(h){
    document.removeEventListener('click', h, true);
    document.removeEventListener('keydown', h, true);
    document.removeEventListener('wheel', h, true);
    document.removeEventListener('touchstart', h, true);
  }

  // 列表 marker 的位移动画（父元素），放大由子元素 markerScale 立即生效
  function animateListMarker(id){
    const rec = map.get(id);
    if(!rec || !rec.markerOuter) return;
    const outer = rec.markerOuter;
    const scaleEl = rec.markerScale;
    const listTarget = rec.listTargetSpan;
    // 立即给子元素放大（列表中的 marker）
    if(scaleEl) scaleEl.classList.add('annotation-active');
    // 触发位移动画（父元素），并在 animationend 后移除动画类
    outer.classList.remove('anno-jump-list');
    void outer.offsetWidth;
    outer.classList.add('anno-jump-list');
    outer.addEventListener('animationend', function handler(){
      outer.classList.remove('anno-jump-list');
      outer.removeEventListener('animationend', handler);
    }, {once:true});
    // 若列表中有 target，则短暂加粗（保留直到 clearActiveImmediate）
    if(listTarget) listTarget.classList.add('annotation-target-bold');
  }

  // 激活：正文 sup 放大（子元素立即放大），父元素触发位移动画；对应列表项也高亮/放大
  function activate(id){
    const rec=map.get(id); if(!rec) return;
    const sup=rec.sup, li=rec.li;
    const supScale = rec.supScale, markerScale = rec.markerScale, markerOuter = rec.markerOuter;
    const bodyTarget = rec.bodyTargetSpan, listTarget = rec.listTargetSpan;
    if(active && active.sup!==sup) clearActiveImmediate();
    if(active && active.sup===sup){
      active.at=Date.now();
      if(active.timer){ clearTimeout(active.timer); active.timer = setTimeout(clearActiveImmediate, MIN_MS); }
      return;
    }
    // 立即放大子元素（scale）并高亮列表项
    if(supScale) supScale.classList.add('annotation-active');
    if(markerScale) markerScale.classList.add('annotation-active');
    if(li) li.classList.add('annotation-active');
    if(bodyTarget) bodyTarget.classList.add('annotation-target-bold');
    if(listTarget) listTarget.classList.add('annotation-target-bold');

    // 父元素触发位移动画（正文 sup）
    sup.classList.remove('anno-jump');
    void sup.offsetWidth;
    sup.classList.add('anno-jump');
    sup.addEventListener('animationend', function handler(){
      sup.classList.remove('anno-jump');
      sup.removeEventListener('animationend', handler);
    }, {once:true});

    const handler = clearOnUser;
    const timer = setTimeout(clearActiveImmediate, MIN_MS);
    active = { sup, li, supScale, markerScale, markerOuter, bodyTargetSpan: bodyTarget, listTargetSpan: listTarget, handler, at: Date.now(), timer };
    addInteraction(handler);
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', walk); else walk();
  })();

// 粒子效果：点击或输入时产生彩色糖豆，带重力与模式设置
// 模式通过 localStorage 控制：particle_click_mode / particle_input_mode ('normal'|'reduced'|'off')
(function(){
  const COLORS = ['#ff6b6b','#feca57','#48dbfb','#1dd1a1','#5f27cd','#ff9ff3','#54a0ff','#f368e0','#00d2d3'];
  const CLASS = 'pe-particle';
  const MAX_PARTICLES = 200;

  const style = document.createElement('style');
  style.textContent = `
    .${CLASS}{
      position: fixed;
      left: 0;
      top: 0;
      pointer-events: none;
      will-change: transform, opacity;
      z-index: 2147483647;
      opacity: 1;
    }
  `;
  document.head.appendChild(style);

  function rand(min,max){ return Math.random()*(max-min)+min; }

  const particles = new Set();
  let lastTime = performance.now();
  const GRAVITY = 1200; // px/s^2

  function createParticle(x,y,opts){
    const el = document.createElement('div');
    el.className = CLASS;
    const size = opts.size || Math.round(rand(6,12));
    el.style.width = size+'px';
    el.style.height = size+'px';
    el.style.background = opts.color || COLORS[Math.floor(Math.random()*COLORS.length)];
    el.style.borderRadius = opts.shape === 'square' ? '3px' : '50%';
    document.body.appendChild(el);

    const now = performance.now();
    const p = {
      el,
      x: x,
      y: y,
      vx: (opts.vx !== undefined) ? opts.vx : rand(-180,180),
      vy: (opts.vy !== undefined) ? opts.vy : rand(-520,-240),
      size,
      birth: now,
      life: opts.life || 2000
    };
    particles.add(p);
    if (particles.size > MAX_PARTICLES) {
      let oldest = null;
      particles.forEach(pp => { if (!oldest || pp.birth < oldest.birth) oldest = pp; });
      if (oldest) removeParticle(oldest);
    }
    return p;
  }

  function removeParticle(p){
    try{ p.el.remove(); }catch(e){}
    particles.delete(p);
  }

  function update(now){
    const dt = Math.min(40, now - lastTime) / 1000;
    lastTime = now;
    const toRemove = [];
    particles.forEach(p => {
      p.vy += GRAVITY * dt;
      p.x += p.vx * dt;
      p.y += p.vy * dt;

      const age = now - p.birth;
      const life = p.life;
      const fadeStart = Math.max(0, life - 300);
      if (age >= fadeStart) {
        const t = Math.max(0, Math.min(1, (age - fadeStart) / 300));
        p.el.style.opacity = String(1 - t);
      }

      const offsetX = p.x - p.size/2;
      const offsetY = p.y - p.size/2;
      p.el.style.transform = `translate3d(${Math.round(offsetX)}px, ${Math.round(offsetY)}px, 0) scale(${Math.max(0.6, 1 - age / (p.life*2))}) rotate(${(p.vx%360).toFixed(1)}deg)`;

      if (age >= life) toRemove.push(p);
      if (p.y > window.innerHeight + 200) toRemove.push(p);
    });
    toRemove.forEach(removeParticle);
    requestAnimationFrame(update);
  }

  requestAnimationFrame(update);

  function spawnBurst(x,y,count,mode,life){
    if (mode === 'off') return;
    if (mode === 'reduced') count = Math.max(1, Math.round(count/2));
    const l = life !== undefined ? life : 1800 + rand(-300,300);
    for(let i=0;i<count;i++){
      createParticle(x + rand(-6,6), y + rand(-6,6), { size: Math.round(rand(6,12)), life: l });
    }
  }

  function getMode(key, def){
    try{ const v = localStorage.getItem(key); return v || def; }catch(e){ return def; }
  }

  function getCaretCoords(){
    const active = document.activeElement;
    if (!active) return null;

    // 处理 input 和 textarea：计算光标位置
    if (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA'){
      try{
        const rect = active.getBoundingClientRect();
        const selectionStart = active.selectionStart || 0;
        const value = active.value.substring(0, selectionStart);
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const computed = window.getComputedStyle(active);
        ctx.font = `${computed.fontSize} ${computed.fontFamily}`;
        const textWidth = ctx.measureText(value).width;
        const paddingLeft = parseFloat(computed.paddingLeft) || 0;
        const paddingTop = parseFloat(computed.paddingTop) || 0;
        const cursorX = rect.left + paddingLeft + textWidth;
        const cursorY = rect.top + paddingTop + (rect.height / 2);
        return { x: cursorX, y: cursorY };
      }catch(e){}
    }

    // 处理 contentEditable
    try{
      const sel = window.getSelection && window.getSelection();
      if (sel && sel.rangeCount){
        const range = sel.getRangeAt(0).cloneRange();
        if (range.getClientRects){
          const rects = range.getClientRects();
          if (rects.length){
            const r = rects[0];
            return { x: r.left + r.width/2, y: r.top + r.height/2 };
          }
        }
      }
    }catch(e){}

    return null;
  }

  document.addEventListener('click', function(e){
    const mode = getMode('particle_click_mode','normal');
    if (mode === 'off') return;
    const count = (mode === 'normal') ? 10 : 4;
    spawnBurst(e.clientX, e.clientY, count, mode);
  }, { passive: true });

  function handleTyping(){
    const mode = getMode('particle_input_mode','normal');
    if (mode === 'off') return;
    const count = (mode === 'normal') ? 3 : 3;
    const c = getCaretCoords();
    if (c) spawnBurst(c.x, c.y, count, mode, 800 + rand(-200,200));
  }

  document.addEventListener('input', handleTyping, { passive: true });
  document.addEventListener('keydown', function(e){
    if (e.key.length === 1 || e.key === 'Backspace' || e.key === 'Enter' || e.key === 'Delete') handleTyping();
  });



})();

/* Ensure footer is hidden by 1px when page content is shorter than viewport.
   Calculates required margin-top and applies inline style. Runs on load/resize/DOMContentLoaded. */
function adjustFooterOnePx() {
  try {
    const footer = document.querySelector('footer');
    if (!footer) return;

    // 清除之前设置的 inline margin，以准确测量 footer 的自然位置
    footer.style.marginTop = '';

    // footer 在文档中的顶部位置（相对于文档）
    const rect = footer.getBoundingClientRect();
    const footerTop = rect.top + window.scrollY;
    const footerHeight = footer.offsetHeight || 0;

    // 不包含 footer 部分的内容高度即 footerTop
    const contentHeightNoFooter = footerTop;

    // 使 footer 的顶部位于视口底部下方若干像素（避免顶部可见）
    const extraHide = 25; // 调整此值以控制初始需要滚动的距离（像素）
    const desiredMarginTop = Math.max(0, window.innerHeight + extraHide - contentHeightNoFooter);
    footer.style.marginTop = desiredMarginTop + 'px';
  } catch (e) {
    console.error('adjustFooterOnePx error:', e);
  }
}

window.addEventListener('load', adjustFooterOnePx);
window.addEventListener('resize', adjustFooterOnePx);
document.addEventListener('DOMContentLoaded', adjustFooterOnePx);