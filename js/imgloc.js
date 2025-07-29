// 引入 ImgLoc 上传插件
(function() {
  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://imgloc.com/sdk/pup.js';
  script.dataset.url = 'https://imgloc.com/upload';
  document.head.appendChild(script);
})();