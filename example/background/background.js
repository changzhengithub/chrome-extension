console.log("Service worker 已加载");

// 监听插件的安装或更新事件
chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === chrome.runtime.OnInstalledReason.INSTALL) {
    console.log("插件已安装");
    // 这里可以执行一些初始化操作，比如设置默认配置
    chrome.storage.local.set({ installed: true });
  } else if (details.reason === chrome.runtime.OnInstalledReason.UPDATE) {
    console.log("插件已更新");
    // 这里可以执行一些更新后的操作，比如迁移数据
  } else if (details.reason === chrome.runtime.OnInstalledReason.CHROME_UPDATE) {
    console.log("Chrome 浏览器已更新");
  }
});


// 定义一个对象，用于映射 action 到相应的处理函数
const actionHandlers = {
  
  // 接收Content发送的消息
  getReplyMessage: function(message, sendResponse) {
    console.log("收到消息Content发送的消息", message);
    // 调用API请求
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
    }).then(response => response.json())
    .then(res => {
      console.log(res)
      sendResponse(res)
    })
    .catch(err => console.log('Request Failed', err)); 
  },

  // 接收弹窗发送的消息
  startServiceWorkerMsg: function(message, sendResponse) {
    console.log('接收弹窗发送的消息', message)
    sendResponse('我是ServiceWorker')
  }
};

// 监听来自弹窗和Content的消息
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  // 检查是否有处理该 action 的函数
  if (actionHandlers[message.action]) {
      // 调用对应的处理函数
      actionHandlers[message.action](message, sendResponse);
  } else {
      console.warn(`未处理的 action: ${message.action}`);
  }
  // 必须返回 true 以异步响应消息
  return true;
});
