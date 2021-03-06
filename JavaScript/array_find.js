// Viết hàm trả về số chẵn đầu tiên trong mảng sử dụng find method
// Nếu không tìm thấy số chẵn nào thì trả về undefined
function findFirstEvenNumber(array) {
  // your code here
  return array.find(function(item){
      if(item % 2 === 0) return true
      else return false
  })
}

/**
 * viết hàm tìm số chia hết cho x đầu tiên có trong mảng
 * @params {array} array - Mảng các chữ số
 * @params {number} x - Số bị chia
 * Nếu không có trả về undefined
 * Example: 
 * findDivisibleNum([1, 3, 4], 2) => 4
 */
function findDivisibleNum(array, x) {
  // viết code ở đây.
  return array.find(function(array) {
    if (array % x == 0)
      return array;
    else
      return undefined;
  });
}
