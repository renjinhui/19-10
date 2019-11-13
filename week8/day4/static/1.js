var btn = document.getElementById('btn');

btn.onclick = function(){
    var h1 = document.getElementsByTagName('h1')[0];
    h1.style.background = 'blue';
    fetch('http://localhost:8080/add?type=pro',{
        method:'post',
        credentials:'include',
        body:JSON.stringify({f:[100,200,300]})
    }).then(data=>data.json()).then(data=>{
        console.log(data);
    })
    $.post('http://localhost:8080/add?type=pro',{
        a:123,
        b:234,
        c:345
    })
    $.post('http://localhost:8080/add?type=pro',{
        a2:123,
        b2:234,
        c2:345
    })
    $.post('http://localhost:8080/add?type=pro',{
        a3:123,
        b3:234,
        c3:345
    })
}

btn2.onclick = function(){
    fetch('http://localhost:8080/list?type=cookie',{
        method:'get'
    }).then(data=>data.json()).then(data=>{
        console.log(data);
    })
}