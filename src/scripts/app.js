require('./lib/spa.min.js');
require('./lib/swiper-3.3.1.min.js');

// require views
require('./views/index.js');

// 定义默认视图
SPA.config({
  indexView: 'index'
});
