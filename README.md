# Chrome插件

Chrome插件就是一个简单HTML静态文件，和正常的网页开发一样，遵循插件的格式和使用对应的API就可以了。并且可以支持向服务端发送请求。

## 文档
[Chrome插件](https://developer.chrome.com/docs/extensions?hl=zh-cn)

## 安装
在新标签页中输入 chrome://extensions，转到“扩展程序”页面。右侧打开 开发者模式 会有几个按钮。
点击 加载已解压的扩展程序 按钮，选择对应的文件就会把插件加载到浏览器中。
然后把插件固定到右上角的插件栏，点击就可以执行插件了。

## manifest.json
manifest.json文件用来描述插件和配置插件使用哪些功能。相当于入口文件。

* action 配置插件的图片和弹窗内容
* content_scripts 配置插件的内容脚本
* background 配置插件的Service Worker

## 弹窗
popup为插件的弹窗内容，弹窗相当于一个单独的浏览器页面，可以在这个窗口进行界面开发，使用HTML、JS、CSS和正常的一样使用。
审查元素需要打开弹窗，右击点击检查。

## 内容脚本
用来处理插件所在网页相关的JS内容，比如获取页面中的DOM元素、页面内容、手动触发按钮、操作DOM元素等，无法直接处理popup内容。
调试可以直接在所在网页中进行调试。


## Service Worker
只用来处理一些核心线程问题，无法访问DOM元素。


## 发布
[发布插件](https://developer.chrome.com/docs/webstore/register?hl=zh-cn)

## 官方示例
[chrome-extensions-samples](https://github.com/GoogleChrome/chrome-extensions-samples)
