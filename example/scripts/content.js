// 执行内容脚本，针对的是使用插件的网页，审查也是使用的页面审查元素

console.log('This is a content!')
console.log(document)

// 发送消息给service worker
function sendMessageToServiceWorker(action, params, callback) {
  chrome.runtime.sendMessage({ action: action, params: params}, callback);
}

// 修改背景颜色
function changeBodyBg() {
  const body = document.querySelector('body');
  console.log(body);
  body.style.background = 'red';
}

// 向Service Worker发送消息
function getReplyMessage() {
  sendMessageToServiceWorker('getReplyMessage', '我是content消息', function(response) {
    console.log('获取Service Worker的接口数据：', response)
  })
}


// 定义一个对象，用于映射 action 到相应的处理函数
const actionHandlers = {
  
  startContentMsg: function (message, sendResponse) {
    changeBodyBg();
    getReplyMessage();
    sendResponse('返回消息成功');
  }
}

// 接收弹窗Popup和Service Worker发送来的消息
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  console.log(message)
  // 检查是否有处理该 action 的函数
  if (actionHandlers[message.action]) {
    // 调用对应的处理函数
    actionHandlers[message.action](message, sendResponse);
  } else {
    console.warn(`未处理的 action: ${message.action}`);
  }

  // 必须返回 true 以异步响应消息
  return true;
})
