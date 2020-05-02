/**
 * Viết hàm isWeekend nhận vào 1 ngày dưới dạng string YYYY/MM/DD 
 * trả về true nếu ngày đó là 1 ngày cuối tuần (Thứ 7 hoặc Chủ Nhật), 
 * ngược lại trả về false
 */

function isWeekend(dateString) {
  // Write code here...
  var day = new Date(dateString);
  if(day.getDay()==0 || day.getDay()==6)
    return true;
  else return false;
}

/**
 * Viết hàm subtractDays trả về 1 ngày trong quá khứ 
 * cách ngày được truyền vào n ngày
 */

var date = new Date("06/10/2019")

function subtractDays(date, n) {
  // Write code here...
   return date.getTime()-n*24*60*60*1000;
}

/**
 * Tính số ms chênh lệch giữa date b và date a
 */

function diffMs(a, b) {
 // viết code ở đây
 return ((new Date(b)).getTime() - new Date(a).getTime()) 
}
