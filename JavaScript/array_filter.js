// Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
function fiveAndGreaterOnly(arr) {
  // your code here
  return arr.filter(function(item){
      if(item >= 5) return item
  })
}

// Given an array of numbers, return a new array that only includes the even numbers.
function evensOnly(arr) {
  // your code here!
  return arr.filter(function(x){
      if(x % 2 === 0 ) return x
  })
}
/**
 * Give a list of students, filter out non-female 
 */
var members = [{
    name: 'Lan',
    gender: 'female'
  },
  {
    name: 'Linh',
    gender: 'female'
  },
  {
    name: 'Trung',
    gender: 'male'
  },
  {
    name: 'Peter',
    gender: 'gay'
  }
];

function filterOutFemales(members) {
  // your code here!
  return members.filter(function(members) {
    if (members.gender !== 'female')
      return members.name;
  })
}
