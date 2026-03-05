(function () {
    // 注入样式
    function injectStyles() {
    const styles = `
        #console-panel {
            position: fixed;
            bottom: 60px;
            right: 20px;
            width: 400px;
            height: 320px;
            background: #1a1a1a;
            color: #00ff00;
            border-radius: 8px;
            font-family: 'Courier New', monospace;
            display: none;
            flex-direction: column;
            z-index: 2147483647;
            box-shadow: 0 4px 20px rgba(0,0,0,0.5);
            border: 1px solid #444;
        }
        #console-panel {
            display: flex;
            flex-direction: column;
        }
        #console-panel .header {
            padding: 8px 12px;
            background: #2a2a2a;
            border-bottom: 1px solid #444;
            display: flex;
            justify-content: space-between;
            align-items: center;
            user-select: none;
        }
        #console-panel .header .btn {
            background: none;
            border: none;
            color: #fff;
            cursor: pointer;
            font-size: 14px;
            padding: 4px 10px;
            border-radius: 4px;
            pointer-events: auto;
            transition: all 0.2s;
            user-select: none;
            margin-left: 4px;
        }
        #console-panel .clear-btn { color: #00ff00; }
        #console-panel .close-btn { color: #ff5555; }
        #console-panel .btn:hover {
            background: rgba(255, 255, 255, 0.1);
        }
        #console-panel .history {
            height: 180px;
            overflow-y: auto;
            padding: 12px;
            box-sizing: border-box;
        }
        #console-panel .console-line {
            margin: 4px 0;
            white-space: pre-wrap;
            word-break: break-all;
        }
        #console-panel .input-area {
            height: 56px;
            padding: 12px;
            background: #1a1a1a;
            border-top: 1px solid #444;
            display: flex;
            align-items: center;
            box-sizing: border-box;
            flex-shrink: 0;
        }
        #console-input {
            flex: 1;
            background: transparent;
            border: 1px solid #444;
            color: #00ff00;
            padding: 10px;
            border-radius: 4px;
            font-family: 'Courier New', monospace;
            outline: none;
            min-width: 0;
        }
        #console-panel .input-area .btn {
            font-size: 14px;
            margin-left: 8px;
        }
    `;
    const styleTag = document.createElement('style');
    styleTag.textContent = styles;
    document.head.appendChild(styleTag);
}

    // 日志缓存，始终监听
    const logBuffer = [];
    const errorBuffer = [];

    // 重写 console.log
    const originalLog = console.log;
    console.log = function (...args) {
        originalLog.apply(console, args);
        logBuffer.push({ type: 'log', args: args });
        // 如果面板已插入，追加到面板
        const logContainer = document.getElementById('history');
        if (logContainer) {
            const logLine = document.createElement('div');
            logLine.className = 'console-line';
            logLine.textContent = args.join(' ');
            logContainer.appendChild(logLine);
            logContainer.scrollTop = logContainer.scrollHeight;
        }
    };

    // 重写 console.error
    const originalError = console.error;
    console.error = function (...args) {
        originalError.apply(console, args);
        errorBuffer.push({ type: 'error', args: args });
        const logContainer = document.getElementById('history');
        if (logContainer) {
            const logLine = document.createElement('div');
            logLine.className = 'console-line';
            logLine.style.color = '#ff5555';
            logLine.textContent = args.join(' ');
            logContainer.appendChild(logLine);
            logContainer.scrollTop = logContainer.scrollHeight;
        }
    };

    // 创建控制台面板（仅在首次打开按钮点击时插入）
    let panelCreated = false;
    function createConsolePanel() {
    if (panelCreated) return;
    injectStyles();
    panelCreated = true;
    const panel = document.createElement('div');
    panel.id = 'console-panel';
    panel.style.display = 'none';
    panel.innerHTML = `
        <div class="header">
            <span>自定义控制台</span>
            <div>
                <button class="btn clear-btn" id="clear-btn" title="清屏">清屏</button>
                <button class="btn close-btn" id="close-btn" title="关闭">关闭</button>
            </div>
        </div>
        <div class="history" id="history"></div>
        <div class="input-area">
            <input id="console-input" type="text" placeholder="输入 JS 代码并回车或点击运行" autocomplete="off">
            <button class="btn" id="run-btn" title="运行" disabled>运行</button>
        </div>
    `;
    var inbody = document.querySelector('.inbody');
    if (inbody) {
        inbody.appendChild(panel);
    } else {
        document.body.appendChild(panel);
    }

    // 回填缓存日志
    const logContainer = document.getElementById('history');
    logBuffer.forEach(item => {
        const logLine = document.createElement('div');
        logLine.className = 'console-line';
        logLine.textContent = item.args.join(' ');
        logContainer.appendChild(logLine);
    });
    errorBuffer.forEach(item => {
        const logLine = document.createElement('div');
        logLine.className = 'console-line';
        logLine.style.color = '#ff5555';
        logLine.textContent = item.args.join(' ');
        logContainer.appendChild(logLine);
    });
    logContainer.scrollTop = logContainer.scrollHeight;

    // 清屏按钮
    document.getElementById('clear-btn').onclick = function (e) {
        e.stopPropagation();
        document.getElementById('history').innerHTML = '';
    };

    // 关闭按钮
    document.getElementById('close-btn').onclick = function (e) {
        e.stopPropagation();
        document.getElementById('console-panel').style.display = 'none';
    };

    // 执行代码
    function executeCode() {
        const inputElem = document.getElementById('console-input');
        const code = inputElem.value.trim();
        if (!code) return;
        try {
            const result = eval(code);
            if (result !== undefined) {
                console.log(`结果：${JSON.stringify(result)}`);
            }
        } catch (error) {
            console.error(`错误：${error.message}`);
        }
        inputElem.value = '';
        document.getElementById('run-btn').disabled = true;
    }

    // 输入监听
    document.getElementById('console-input').addEventListener('input', function () {
        document.getElementById('run-btn').disabled = !this.value.trim();
    });

    // 回车执行
    document.getElementById('console-input').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') executeCode();
    });

    // 运行按钮
    document.getElementById('run-btn').onclick = executeCode;

    // 拖拽逻辑
    let isDrag = false, startX = 0, startY = 0, panelLeft = 0, panelTop = 0;
    document.querySelector('#console-panel .header').onmousedown = function (e) {
        isDrag = true;
        startX = e.clientX;
        startY = e.clientY;
        const panel = document.getElementById('console-panel');
        panelLeft = panel.offsetLeft;
        panelTop = panel.offsetTop;
        e.preventDefault();
    };
    document.onmousemove = function (e) {
        if (!isDrag) return;
        const panel = document.getElementById('console-panel');
        panel.style.left = Math.max(0, Math.min(panelLeft + e.clientX - startX, window.innerWidth - panel.offsetWidth)) + 'px';
        panel.style.top = Math.max(0, Math.min(panelTop + e.clientY - startY, window.innerHeight - panel.offsetHeight)) + 'px';
        panel.style.right = 'auto';
        panel.style.bottom = 'auto';
    };
    document.onmouseup = function () {
        isDrag = false;
    };
}

    function createOpenBtn() {
    const btn = document.createElement('button');
    btn.id = 'open-console-btn';
    btn.title = '打开控制台';
    btn.textContent = '</>';
    // 更小的灰色按钮样式
    btn.style.background = '#ccc';
    btn.style.color = '#444';
    btn.style.border = 'none';
    btn.style.borderRadius = '3px';
    btn.style.fontSize = '11px';
    btn.style.padding = '1px 6px';
    btn.style.margin = '4px';
    btn.style.cursor = 'pointer';
    btn.style.position = 'static';
    btn.style.boxShadow = 'none';
    btn.style.lineHeight = '1.2';
    btn.style.height = '20px';
    btn.style.minWidth = '28px';
    btn.onclick = function () {
    if (!panelCreated) createConsolePanel();
    var panel = document.getElementById('console-panel');
    panel.style.display = 'block';
    // 不要再设置 position，不要再设置宽高等
};
    // 只插入到 footer，如果没有则不插入
    var footer = document.querySelector('footer');
    if (footer) {
        footer.appendChild(btn);
    }
}
document.addEventListener('DOMContentLoaded', createOpenBtn);
})();

// 定义默认图片 URL
const defaultImageUrl = 'your-default-image-url.jpg';

// 用于存储每个图片的观察器
const imgObserverMap = new Map();

// 预加载图片并移除 loading 类
function preloadImage(imgElement) {
  const img = imgElement || document.createElement('img');
  img.src = img.src || defaultImageUrl;
  img.classList.add('loading');

  // 为图片添加唯一标识
  img.id = 'img_' + Math.random().toString(36).slice(2, 10);

  img.addEventListener('load', function () {
    img.classList.remove('loading');
    removeLoadingClassAndStopObserving(img);
  });

  const observerOptions = { rootMargin: '0px' };
  const observer = new IntersectionObserver(({ isIntersecting, target }) => {
    if (target.matches('#' + img.id)) {
      target.classList.remove('loading');
    }
    if (!img.id) {
      observer.disconnect();
      imgObserverMap.delete(target);
    }
  }, observerOptions);

  imgObserverMap.set(img, observer);
  observer.observe(img);
}

// 页面加载完成时，遍历并预加载图片
document.addEventListener('DOMContentLoaded', function () {
  const imgElements = document.getElementsByTagName('img');
  for (let i = 0; i < imgElements.length; i++) {
    preloadImage(imgElements[i]);
  }
});

// 用于清除单个图片的观察器和移除loading类
function removeLoadingClassAndStopObserving(img) {
  img.classList.remove('loading');
  if (imgObserverMap.has(img)) {
    const observer = imgObserverMap.get(img);
    observer.disconnect();
    imgObserverMap.delete(img);
  }
}

// 可能需要的通用停止观察器，暂停所有图片的观察
function stopObservingAll() {
  imgObserverMap.forEach((observer, img) => {
    observer.disconnect();
  });
  imgObserverMap.clear();
}

// 兼容页面渲染前插入弹窗
function safeAppendToBody(node) {
  if (document.body) {
    document.body.appendChild(node);
  } else {
    window.addEventListener('DOMContentLoaded', function () {
      document.body.appendChild(node);
    });
  }
}

const dialogStack = [];
const BASE_Z_INDEX = 1000;

function createDialog(options) {
  return new Promise((resolve) => {
    const zIndex = BASE_Z_INDEX + dialogStack.length * 2;
    const mask = document.createElement('div');
    mask.className = 'dialog-mask';
    mask.style.zIndex = zIndex;

    const dialog = document.createElement('div');
    dialog.className = 'dialog-box';
    dialog.style.zIndex = zIndex + 1;

    if (options.title) {
      const title = document.createElement('h3');
      title.style.marginTop = '0';
      title.textContent = options.title;
      dialog.appendChild(title);
    }

    if (options.content) {
      const content = document.createElement('p');
      content.textContent = options.content;
      dialog.appendChild(content);
    }

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'dialog-buttons';

    let timers = [];
    const buttons = Array.isArray(options.buttons) ? options.buttons : [];

    buttons.forEach(btn => {
      const button = document.createElement('button');
      button.className = 'dialog-button';
      button.textContent = btn.text;
      button.style.backgroundColor = btn.color || '#f0f0f0';

      // 倒计时逻辑
      if (typeof btn.delay === 'number' && btn.delay > 0) {
        button.disabled = true;
        const originalText = btn.text;
        let countdown = btn.delay;

        const update = () => {
          button.textContent = `${originalText} (${countdown}s)`;
          if (countdown <= 0) {
            clearInterval(timer);
            button.disabled = false;
            button.textContent = originalText;
            return;
          }
          countdown--;
        };

        const timer = setInterval(update, 1000);
        timers.push(timer);
        update();
      }

      // 按钮点击事件
  if (typeof btn.onClick === 'function') {
    button.onclick = (e) => {
      btn.onClick(e, button, dialog, mask);
      // 只有 keep 不为 true 时才关闭弹窗
      if (!btn.keep) {
        cleanup();
        resolve(btn.value);
      }
    };
  } else {
    button.onclick = () => {
      // 只有 keep 不为 true 时才关闭弹窗
      if (!btn.keep) {
        cleanup();
        resolve(btn.value);
      }
    };
  }

      buttonContainer.appendChild(button);
    });

    dialog.appendChild(buttonContainer);
    mask.appendChild(dialog);
    safeAppendToBody(mask);
    dialogStack.push({ mask, timers });

    mask.onclick = (e) => {
      if (e.target === mask && options.backgroundClose !== false) {
        cleanup();
        resolve(options.backgroundValue || 'background');
      }
    };

    const cleanup = () => {
      timers.forEach(clearInterval);
      mask.remove();
      const index = dialogStack.findIndex(d => d.mask === mask);
      if (index > -1) dialogStack.splice(index, 1);
    };
  });
}


let notificationQueue = [];
let nightmode = false; // true为夜间模式，false为白天模式

function safeAppendToInbody(node) {
    var inbody = document.querySelector('.inbody');
    if (inbody) {
        inbody.appendChild(node);
    } else {
        window.addEventListener('DOMContentLoaded', function () {
            var inbody = document.querySelector('.inbody');
            if (inbody) inbody.appendChild(node);
        });
    }
}

function safeAppendToBody(node) {
  if (document.body) {
    document.body.appendChild(node);
  } else {
    window.addEventListener('DOMContentLoaded', function () {
      document.body.appendChild(node);
    });
  }
}

function showWindowsNotification(opt) {
  const config = Object.assign({title:'',content:'',duration:5000,buttons:[]}, opt);
  if (!config.content.trim()) return;
  if (notificationQueue.length >= 10) {
    const oldest = notificationQueue.shift();
    if (oldest.dom) oldest.dom.classList.remove('show');
    setTimeout(()=>{if(oldest.dom.parentNode)oldest.dom.parentNode.removeChild(oldest.dom);},250);
  }
  const n = document.createElement('div');
  n.className = 'windows-notification';
  if(nightmode) n.classList.add('night');
  n.innerHTML = `<div class="notification-title">${config.title}</div>
      <div>${config.content}</div>
      <div class="notification-buttons"></div>`;
  let progressBar, timeTip;
  if (config.duration > 0) {
    progressBar = document.createElement('div');
    progressBar.className = 'notification-progress';
    progressBar.innerHTML = `<div class="progress-fill"></div>`;
    timeTip = document.createElement('div');
    timeTip.className = 'notification-timetip';
    timeTip.textContent = `剩余 ${Math.ceil(config.duration/1000)} 秒关闭`;
    n.appendChild(progressBar); n.appendChild(timeTip);
  }
  const btns = n.querySelector('.notification-buttons');
  config.buttons.forEach(btn=>{
    const b = document.createElement('button');
    b.className = 'trigger-btn'; b.textContent = btn.text;
    b.onclick = ()=>{clearTimeout(timer);removeNotification();};
    btns.appendChild(b);
  });
  safeAppendToInbody(n); // 修改为插入到 .inbody 容器
  setTimeout(()=>n.classList.add('show'),10);
  let timer, start=Date.now();
  if(config.duration>0){
    timer=setTimeout(removeNotification,config.duration);
    function updateProgress(){
      if(progressBar){
        const elapsed=Date.now()-start,progress=Math.min(elapsed/config.duration,1);
        progressBar.querySelector('.progress-fill').style.width=`${(1-progress)*100}%`;
        timeTip.textContent=`剩余 ${Math.max(0,Math.ceil((config.duration-elapsed)/1000))} 秒关闭`;
        if(progress<1)requestAnimationFrame(updateProgress);
      }
    }
    updateProgress();
  }
  function removeNotification(){
    n.classList.remove('show');
    setTimeout(()=>{
      if(n.parentNode)n.parentNode.removeChild(n);
      notificationQueue=notificationQueue.filter(item=>item.dom!==n);
      updateStackedStyles();
    },250);
  }
  notificationQueue.push({dom:n});
  updateStackedStyles();
}

function updateStackedStyles(){
  const len = notificationQueue.length;
  notificationQueue.forEach((item, idx) => {
    const dom = item.dom;
    if (idx < 3) {
      dom.style.display = '';
      dom.classList.remove('stacked', 'stacked-bottom');
      dom.style.right = '20px';
      dom.style.bottom = `${20 + idx * 110}px`;
      dom.style.top = '';
      dom.style.zIndex = 10000 - idx;
    } else {
      dom.style.display = '';
      dom.classList.add('stacked');
      dom.classList.toggle('stacked-bottom', idx >= 10);
      dom.style.right = '20px';
      dom.style.bottom = `${20 + 2 * 110 + (idx - 2) * 10}px`;
      dom.style.top = '';
      dom.style.zIndex = 9990;
    }
  });
  if (notificationQueue.length > 10) {
    notificationQueue.slice(10).forEach(item => item.dom.style.display = 'none');
  }
}

var cookieName = 'offlineNoticeShown';
var match = document.cookie.match(new RegExp('(^| )' + cookieName + '=([^;]+)'));
var hasNotice = match ? match[2] : null;
if (!hasNotice) {
  createDialog({
    title: "提示",
    content: "我们是离线网站，不会在云端储存您的任何信息\n但会使用Cookie在本地储存信息，如果您清除浏览器数据会导致网页设置被重置\n使用工具修改Cookie或跳过本提示默认同意\n本提示确认后在365天内不会再显示",
    buttons: [
      { text: "接受", value: "yes", color: "#4CAF50" },
      { text: "拒绝", value: "no", color: "#f44336", keep:true,
        onClick: function(e, button, dialog, mask) {
        showWindowsNotification({
          title: "您已拒绝本网站",
          content: "如果不同意，恕我们无法向您提供服务"
        });}
      }
    ]
  }).then(result => {
    if (result === 'no') {
      showWindowsNotification({
        title: `您已拒绝本网站`,
        content: `如果不同意，恕我们无法向您提供服务`,
      });
      // 不关闭弹窗，用户可以继续选择
      return;
    }
    if (result === 'yes') {
      var expires = '';
      var days = 365;
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = ";expires=" + date.toUTCString();
      document.cookie = cookieName + "=1" + expires + ";path=/";
    }
  });
}