function http(option) {
  let {
    url,
    data={},
    method = "GET"
  } = option;
  let obj = {
    method
  }
  if(method.toLowerCase()=='get'){
    let str = '';
    for(let k in data){
      str += `${k}=${data[k]}&`
    }
    url += ('?'+str);
  }else{
    Object.assign(obj,{
      body:JSON.stringify(data)
    })
  }
  return fetch(url,obj).then(data=>data.json())
}
http.get = function(url,data){
  return http({
    url,
    data,
    method:"GET"
  })
}
http.post = function(url,data){
  return http({
    url,
    data,
    method:"POST"
  })
}
export default http;