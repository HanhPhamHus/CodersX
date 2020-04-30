/**
 * Sử dụng Promise.all + axios để tải về 3 đường link sau cùng lúc và hiển thị ra kết quả:
 * https://jsonplaceholder.typicode.com/todos/1
 * https://jsonplaceholder.typicode.com/todos/2
 * https://jsonplaceholder.typicode.com/todos/3
 */
var axios = require('axios');

function loadData(link){
  return new Promise(function(resolve, reject){
    axios.get(link,function(err, data){
      if(link == null ){
        reject(err);
      }
      else{
        resolve(data);
      }
    });
  });
}

Promise.all([
  axios.get(https://jsonplaceholder.typicode.com/todos/1),
  axios.get(https://jsonplaceholder.typicode.com/todos/2),
  axios.get(https://jsonplaceholder.typicode.com/todos/3)
])
.then(function(data){
  console.log(data);
})
.then(function(err){
  console.log(err);
});
