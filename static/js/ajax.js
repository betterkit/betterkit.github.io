export function ajax(argument) {
    // 默认参数
    let defaults = {
        type:'GET',
        url:'',
        header: 'application/x-www-form-urlencoded',
        data:{},
        success: (res)=>{},
        error: (res)=>{}
    }
    Object.assign(defaults,argument);
    // 组合参数
    let params = '';
    for(let attr in defaults.data){
        params += attr + '=' + defaults.data[attr] + '&';
    }
    params = params.substr(0,params.length-1);
    // 添加参数
    if(defaults.type == 'get'){
        defaults.url += '?' + params;
    }
    // 创建对象
    const xhr = new XMLHttpRequest();
    // 配置对象
    xhr.open(defaults.type,defaults.url);
    // 判断方法
    if (defaults.type=='post') {
        xhr.setRequestHeader('content-type',defaults.header)
        if(defaults.header.includes('json')){
            xhr.send(defaults.data);
        }else{
            xhr.send(params);
        }
        
    }else{
        if (defaults.jsonp) {
            let cb = 'cb'+ Math.random().toString().replace('.','');
            window[cb] = defaults.success;
            let script = document.createElement('script');
            script.src = defaults.url+'&cb='+cb;
            document.body.appendChild(script);
            script.onload = ()=>{
                document.body.removeChild(script)
            }
        }
        else{xhr.send();} 
    }
    // 处理返回
    xhr.onload=()=>{
        console.log(xhr.responseText)
    }
}