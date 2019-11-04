$(function(){
    let $username = $('.username'),
        $man = $('#man'),
        $woman = $('#woman'),
        $useremail = $('.useremail'),
        $userphone = $('.userphone'),
        $userdepartment = $('.userdepartment'),
        $userjob = $('.userjob'),
        $userdesc = $('.userdesc'),
        $submit = $('.submit');
    let id = location.href.queryURLParams().id;
    if(id != undefined){
        // 是编辑状态
        axios.get('/user/info?userId='+id).then(data=>{
            if(data.code == 0){
                let {name,sex,email,phone,departmentId,jobId,desc} = data.data;
                $username.val(name);
                sex == 0 ? $man.attr('checked',true) : $woman.attr('checked',true);
                $useremail.val(email);
                $userphone.val(phone);
                $userdesc.val(desc);
                // $userdepartment
                // $userjob
            }else{
                alert('系统繁忙')
            }
        })
    }
})