document.write(`
    <ul class="cl">
        <li><a href="chat.html" target="_self" title="首页">首页</a></li>
        <li><a href="chat.html" target="_self" title="AI对话">对话</a></li>
        <li><a href="draw.html" target="_self" title="AI绘画">绘画</a></li>
        <li><a href="write.html" target="_self" title="AI写作">写作</a></li>
        <li><a href="design.html" target="_self" title="AI设计">设计</a></li>
        <li><a href="work.html" target="_self" title="AI办公">办公</a></li>
        <li><a href="image.html" target="_self" title="AI图像">图像</a></li>
        <li><a href="video.html" target="_self" title="AI视频">视频</a></li>
        <li><a href="audio.html" target="_self" title="AI音频">音频</a></li>
        <li><a href="code.html" target="_self" title="AI编程">编程</a></li>
        <li><a href="3d.html" target="_self" title="3d三维">三维</a></li>
        <li><a href="prompt.html" target="_self" title="AI指令">指令</a></li>
        <li><a href="build.html" target="_self" title="AI开发">开发</a></li>
        <li><a href="business.html" target="_self" title="商务">商务</a></li>
        <li><a href="assistant.html" target="_self" title="AI助手">助手</a></li>
        <li><a href="live.html" target="_self" title="生活">生活</a></li>
        <li><a href="plus.html" target="_self" title="AI新知">其他</a></li>
    </ul>
`)
let li = document.querySelector('ul').querySelectorAll('li');
let file = location.pathname;
if(file=='/'){file='/index.html'}
for(let i of li){
    let a = i.querySelector('a');
    if(file.includes('/'+ a.getAttribute('href'))){
        i.className = "current"
    }
}