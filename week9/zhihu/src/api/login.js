import http from './index'

export function login(option){
    return http.post('https://www.easy-mock.com/mock/5cd2a79858a77829095bd1a9/api/v3/oauth/sign_in',option)
}