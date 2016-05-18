// 引入模板
var indexTpl = require('../tpl/index.string');

// 定义一个视图
SPA.defineView('index', {
  // 将模板写在body里
  html: indexTpl,
// 定义子视图

  plugins: [
    'delegated'
  ],

  bindActions: {
 
  }
});
  
