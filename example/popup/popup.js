
// 插件弹窗JS内容，右键弹窗审查会审查弹窗的DOM内容，而不是网页的

console.log("This is a popup!");


var startBtn1 = document.getElementById('start-btn1');

startBtn1.addEventListener('click', function() {
  startServiceAssistant();
})

async function startServiceAssistant() {
  var dom = document.getElementsByClassName('index')[0];
  console.log(dom);

  // 向内容脚本发送消息
  const [tab] = await chrome.tabs.query({active: true});
  await chrome.tabs.sendMessage(tab.id, {greeting: 'hello this is popup'});
}
