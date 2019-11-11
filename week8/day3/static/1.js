var btn = document.getElementById('btn');

btn.onclick = function(){
    var h1 = document.getElementsByTagName('h1')[0];
    h1.style.background = 'blue';
    fetch('http://localhost:8000/add?type=pro',{
        method:'post',
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({a:[100,200,300]})
    }).then(data=>data.json()).then(data=>{
        console.log(data);
    })
}