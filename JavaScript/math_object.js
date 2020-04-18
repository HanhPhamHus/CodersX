// Dùng hàm powerup tính bình phương các số chia hết cho 2 trong mảng truyền vào

function powerup(arr) {
  // your code here!
  var res = [];
  for(var i of arr){
    if(i % 2 === 0)
      res.push(Math.pow(i, 2));
    else{
      res.push(i);
    }
      
  }
  return res
}

/** 
 * Dùng hàm average tính điểm trung bình 3 môn của một học sinh.
 * Làm tròn điểm trung bình
 * Ví dụ: [8, 8, 6.75]  => 8
 * Gợi ý: Dùng Math.round 
*/

function average(arr) {
  // your code here!
  var sum = 0;
  for(var item of arr){
    sum = sum + item
  }
  var res =  Math.round(sum / arr.length);
  return res
}

/* 
  Viết hàm positiveNumber để chuyển các số âm trong một mảng thành các số dương.
  Yêu cầu sử dụng Math Object
*/

function positiveNumber(arr) {
  // your code here
  var res = [];
  for(var item of arr){
      var a = Math.abs(item);
      res.push(a);
  }
  return res;
}

/** 
 * Viết hàm rightTriangle nhập vào 3 cạnh của một tam giác.
 * Cho biết đó có phải là tam giác vuông hay không? 
 */
function rightTriangle(a, b, c) {
  // your code here
  var c1 = Math.pow(a, 2);
  var c2 = Math.pow(b, 2);
  var c3 = Math.pow(c, 2);
  if (a > 0 && b > 0 && c > 0) {
    if(c1 + c2 === c3 || c1 + c3 === c2 || c2 + c3 === c1){
        return true
    }
    else return false
  } 
  else
    return false
}
