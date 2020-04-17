// Use array map make an array of strings of the names
//Viết hàm trả về 1 mảng chứa tên của các user
var users = [
  {
    name: "Angelina Jolie",
    age: 80
    
  },
  {
    name: "Eric Jones",
    age: 2
    
  },
  {
    name: "Paris Hilton",
    age: 5
  },
  {
    name: "Kayne West",
    age: 16
    
  },
  {
    name: "Bob Ziroll",
    age: 100
  }
]

function namesOnly(arr) {
  // Write code here...
  return arr.map(function(arr){
      return arr.name;
  })
}
