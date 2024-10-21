// 执行内容脚本，针对的是使用插件的网页，审查也是使用的页面审查元素

console.log('This is a content!')
console.log(document)


// 接收弹窗发送的消息
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(request)
  console.log(sender)
  console.log(sendResponse)

  const body = document.querySelector('body');
  console.log(body);
  body.style.background = 'red';
})
