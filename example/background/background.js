// 安装
chrome.runtime.onInstalled.addListener((details) => {
  if(details.reason !== "install" && details.reason !== "update") return;
  console.log('this is background!')

  // 调用API请求
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  }).then(response => response.json())
  .then(json => console.log(json))
  .catch(err => console.log('Request Failed', err)); 
});