$(function () {
    console.log(location.hash);
    window.addEventListener('hashchange',function () {
        console.log(location.hash);
        // 将当前操作的导航存到sessionStorage中
        sessionStorage.setItem('currentUrl','./page/customerlist.html'+location.hash)
    })
    function getData(){
        axios.get('/customer/list?lx=my').then(data=>{

        })
    }
    function render() {
        
    }
})