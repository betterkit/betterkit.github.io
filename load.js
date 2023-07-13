// tongji
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?1a49e58055a62016311777d33eeddf60";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
// loading img
window.onload = () => {
    var eles = document.querySelectorAll('.icon'); // 获取所有列表元素
    // 监听回调
    var callback = (entries) => {
        entries.forEach(item => {
            // 出现到可视区
            if (item.intersectionRatio > 0) {
                var ele = item.target;
                var imgSrc = ele.getAttribute('data-src');
                if (imgSrc) {
                    // 预加载
                    var img = new Image();
                    img.addEventListener('load', function() {
                        ele.src = imgSrc;
                    }, false);
                    ele.src = imgSrc;
                    // 加载过清空路径，避免重复加载
                    ele.removeAttribute('data-src');
                }
            }
        })
    }
    var observer = new IntersectionObserver(callback);
    // 列表元素加入监听
    eles.forEach(item => {
        observer.observe(item);
    })
}