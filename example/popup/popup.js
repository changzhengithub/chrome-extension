
// 插件弹窗JS内容，右键弹窗审查会审查弹窗的DOM内容，而不是网页的

console.log("This is a popup!");


var startBtn1 = document.getElementById('start-btn1');
var startBtn2 = document.getElementById('start-btn2');

startBtn1.addEventListener('click', function() {
  console.log('点击按钮1');
  sendMessageToContent('startContentMsg', function(response) {
    console.log('向Content发送消息成功', response);
  })
})

startBtn2.addEventListener('click', function() {
  console.log('点击按钮2');
  sendMessageToServiceWorker('startServiceWorkerMsg', function(response) {
    console.log('向ServiceWorker发送消息成功', response);
  })
})


/**
 * @desc 向内容脚本发送消息
 * @param action 消息类型
 * */ 
function sendMessageToContent(action, callback) {
  chrome.tabs.query({active: true}, function(tabs) {
    const tab = tabs[0];
    chrome.tabs.sendMessage(tab.id, { action: action }, callback);
  });
}

/**
 * @desc 向Service Worker 发送消息
 * @param action 消息类型
 * */ 
function sendMessageToServiceWorker(action, callback) {
  chrome.runtime.sendMessage({ action: action }, callback);
}