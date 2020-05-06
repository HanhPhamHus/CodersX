//Bai 1:  Viết hàm đảo ngược chuỗi: 
// Example
// reverse('abc') // 'cba'
function reverse(str) {
  // viết code ở đây.
  return str.split("").reverse().join('');
}


//bai
// viết hàm kiểm tra xem một chuỗi bắt đầu bằng "Java" hay không 
function startWith(str){
  // viết code ở đây.
  var arr = str.split('');
  if( arr[0] == 'J' && arr[1] == 'a' && arr[2] == 'v' && arr[3] == 'a'){
      return true;
  }
  else return false
  
}

// Bai tap : Viết hàm lấy extension của một file
// Example
// getExtensionFilename("abc.mp3") // "mp3"

function getExtensionFilename(filename) {
  // viết code ở đây.
  
   var strArr = filename.split(".");
  return strArr[strArr.length-1];
}


/*
  - Viết hàm findMaxDiff nhận tham số là một mảng integer (mảng số nguyên)
  - Trả về sự khác biệt lớn nhất giữa hai phần tử liền kề của mảng đó.
  - Nếu mảng có 1 phần tử hoặc không có phần tử nào trả về 0
  Example: 
  [1, -10, 5, 18, -9, 5] => 27
*/
function findMaxDiff(arr) {
  // viết code ở đây.
  if (arr.lenght < 2) {
    return 0;
  } else {
    var maxDiff = 0;
    for (var i = 1; i < arr.length; i++)
      maxDiff = (maxDiff < Math.abs(arr[i] - arr[i - 1])) ? Math.abs(arr[i] - arr[i - 1]) : maxDiff;
    return maxDiff;
  }
}

//Viết 1 function kiểm tra số lương kí tự 'p' và 't' của 1 chuỗi có bằng nhau hay không
//=============================
//input : string
//output : true or false
//=============================
function equal_pt(str) {
  // viết code ở đây.
  var arr = str.split('');
  var countT = 0;
  var countP = 0;
  for (var val of arr) {
    if (val == 'p') {
      countP += 1;
    } else if(val == 't') {
      countT += 1;
    }
  }
  return countP == countT
}

// viết hàm first trả về giá trị đầu tiên của mảng, nếu n được truyền vào thì trả về 1 mảng chứa n giá trị đầu tiên của mảng (hoặc cả mảng nếu n lớn hơn số phần tử của mảng). Nếu n <= 0 thì trả về mảng trống.
// Tham số:
//	- array: mảng gốc
//	- n: số phần tử trả về
function first(array, n) {
  // viết code ở đây.
  var newArr = [];
  if( n <= 0){
      return [];
  }
  else if( n === undefined){
      newArr.push(array[0]);
      return  newArr;
  }
  else if(n <= array.length){
      for(var i = 0; i < n; i ++){
          newArr.push(array[i]);
      }
      return newArr;
      
  }
  else
    return array
}

///Bai 15 viết hàm tạo mới một 1 string từ n ký tự từ vị trí đầu và cuối của chuỗi cũ
// newString("1wyg5yhd45", 2) // "1w45"
function newString(str, n){
// viết code ở đây.
    var arr = str.split('');
    
    var res = [];
    
    for( var i = 0; i < n ; i++){
        res.push(arr[i]);
    }
    
    for(var j = str.length - n; j < str.length; j++){
        res.push(arr[j]);
    }
    
    return res.join('')
}

/* Bai 16 Write a function that splits an array (first argument) into groups 
the length of size(second argument) and returns them as a two-dimensional array.
Example
 chunkArrayInGroups(["a", "b", "c", "d", "e"], 2) // [["a", "b"], ["c", "d"], ["e"]]
*/
function chunkArrayInGroups(arr, size){
  // write code here.
  var kq=[],j=1,temp=[];
  
  for(var i=0;i<arr.length;i++)
    {
        if(j<=size){
            temp.push(arr[i]);
            j++;
        }
        if(j>size||i==arr.length-1){
            j=1;
            kq.push(temp);
            temp=[];
        }
    }
    return kq;
}
/*Bài 17: tính tống lớn nhất của k phần tử trong mảng Write a function return maximum possible sum of some of its k consecutive numbers 
(numbers that follow each other in order.) of a given array of positive integers
*/
function maxOfSumChain(arr, k) {
  // write code here.
  var sums = 0,
    temp = 0;
  for (var i = 0; i <= arr.length - k; i++) {
    for (var j = i; j < i + k; j++)
      temp += arr[j];
    if (sums < temp)
      sums = temp;
    temp = 0;
  }
  return sums;
}
/* Bài 19
Hãy viết một hàm để kiểm tra xem có thể sắp xếp các kí tự 
của 1 chuỗi String cho trước thành 1 chuỗi String cho trước khác không?

Input: 2 chuỗi String
Output: True hoặc False

ví dụ:

Input: abc cba
Output: True

Input: abx abb
Output: False
*/

function rearrangeChar(str1, str2) {
// Viết code tại đây!
var dem1=[],dem2=[];
    for(var i=0;i<=26;i++)
    {
        dem1[i]=0;
        dem2[i]=0;
    }
    if(str1.length!=str2.length)
        return false;
    for(var i=0;i<str1.length;i++){
        dem1[str1.charCodeAt(i)-97]++;
         dem2[str2.charCodeAt(i)-97]++;
    }
    for(var i=0;i<=26;i++)
    {
        if(dem1[i]!=dem2[i])
            return false;
    }
    return true;
}




