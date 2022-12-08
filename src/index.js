import './index.css'

function init() {
    var element = document.createElement('div');

    // lodash 是由当前 script 脚本 import 导入进来的
    element.innerHTML = 'HC-ice1111';
+   element.classList.add('hello');

    return element;
}
document.body.appendChild(init());