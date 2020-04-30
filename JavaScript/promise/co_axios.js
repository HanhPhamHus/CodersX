/**
 * Sử dụng node co + axios để tải về các đường link sau theo 2 cách:
 */
var urls = [
  'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/todos/2',
  'https://jsonplaceholder.typicode.com/todos/3',
  'https://jsonplaceholder.typicode.com/todos/4',
  'https://jsonplaceholder.typicode.com/todos/5'
];

var co = require('co');
var axios = require('axios');

function load(link){
  return new Promise(function(resolve, reject){
    axios.get(link, function(err, data){
      if(link == null){
        reject(err);
      }
      else{
        resolve(data);
      }
    });
  });
}

// Cách 1: Sử dụng vòng lặp for
for(var i=0;i<urls.length;i++)
  axios.get(urls[i]).then(function(response){
   console.log(response.data);
  }).catch(function(err){
   
  });

// Cách 2: Sử dụng array.map
var readFiles=co.wrap(function*(files){
	return yield files.map(function(file){
		return  axios.get(file).then(function(response){
      return  response.data;
     });
	});
});

readFiles(urls)
	.then(function(values){
		console.log(values);
	});
// Gợi ý: Có thể yield 1 array các Promise
