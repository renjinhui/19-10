import http from './index'
let that = null;
export function init(_this) {
    that = _this;
}

export function login(option) {
    return http.post('/user/login', option).then(data => {
        if (data.code == 1) {
            // that.$message.error('用户名密码错误')
            that.$alert('用户名密码错误', '提示', {
                confirmButtonText: '确定',
                // callback: action => {
                //     that.$message({
                //         type: 'info',
                //         message: `action: ${ action }`
                //     });
                // }
            });
        }
        return data //给后边then的参数
    })
}