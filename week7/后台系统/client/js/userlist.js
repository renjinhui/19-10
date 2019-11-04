$(function () {
    let $tbody = $('.tableBox tbody'),
        $deleteAll = $('.deleteAll'),
        $selectAll = $('.tableBox thead .w3'),
        $handle = $('.tableBox thead .w12'),
        $selectItems = null,
        $deleteBtns = null,
        $resetBtns = null;

    let canShow = true;

    function role(){
        // 按照 resetpassword 这个权限进行判断
        let power = localStorage.getItem('power');
        if(power.indexOf('resetpassword')==-1){
            canShow = false;
            $deleteAll.hide();
            $selectAll.hide();
            $handle.hide();
        }
    }
    role();

    function getData(){
        axios.get('/user/list').then((data)=>{
            console.log(data)
            render(data.data);
            $selectItems = $('.tableBox tbody input[type=checkbox]');
            eventBind();//数据渲染完成之后再去绑定事件
        }).catch(()=>{
            alert('系统繁忙')
        })
    }
    function render(data){
        let str = '';
        data.forEach(item=>{
            let {id,name='',sex='',email='',phone='',department='',jobId='',job='',desc=''} = item;
            str += `
                <tr>
                    ${
                        canShow ? 
                        '<td class="w3"><input type="checkbox"></td>':''
                    }
                    <td class="w10">${name}</td>
                    <td class="w5">${sex==0?'男':'女'}</td>
                    <td class="w10">${department}</td>
                    <td class="w10">${job}</td>
                    <td class="w15">${email}</td>
                    <td class="w15">${phone}</td>
                    <td class="w20">${desc}</td>
                    ${
                        canShow ? 
                        `<td class="w12 btnBox">
                            <a href="javascript:;">编辑</a>
                            <a href="javascript:;" data-id=${id}>删除</a>
                            <a href="./reset.html?id=${id}" data-id=${id}>重置密码</a>
                        </td>`:''
                    }
                </tr>`
        })
        $tbody.html(str);
    }
    getData();

    // 实现全选功能
    $selectAll.find('input').on('change',function(){
        console.dir(this.checked)
        // $selectItems.attr('checked',this.checked)
        $selectItems.get().forEach(item=>{
            item.checked = this.checked;
        })
    })
    function eventBind(){
        $deleteBtns = $('.tableBox tbody .btnBox a:nth-child(2)');
        $resetBtns = $('.tableBox tbody .btnBox a:nth-child(3)');
        // 给所有的  删除按钮 和 重置按钮  绑定点击事件
        $deleteBtns.on('click',function(){
            console.log(this);
            let ele = this;
            alert('确定删除吗',{
                confirm:true,
                handled(type){
                    console.log(type)
                    if(type == 'CONFIRM'){
                        // 1、怎么告诉后端对应的ID
                        // 2、删除成功之后 前端怎么移除这一条
                        deleteFn($(ele).attr('data-id'))
                    }
                }
            })
        })
        $resetBtns.on('click',function(){
            //
        })
    }
    function deleteFn(id){
        axios.get('/user/delete',{
            params:{
                userId:id
            }
        }).then(data=>{
            if(data.code == 0){
                // 删除成功；
            }
        })
    }
})