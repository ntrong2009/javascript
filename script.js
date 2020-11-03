// The Date object will do what you want - construct one for each date, then compare them using the >, <, <= or >=.
// The ==, !=, ===, and !== operators require you to use date.getTime()
// var date1 = new Date();
// var date2 = new Date("10/30/2020 17:34:24");
// if (date1 > date2) {
//     console.log('true');
// } else {
//     console.log('false');
// }
// var same = date1.getTime() === date2.getTime();
// var notSame = date1.getTime() !== date2.getTime();





// chuyển đổi một đối tượng thời gian thành một chuỗi thời gian dựa theo quy tắc thời gian của địa phương. 
// Chuỗi trả về sẽ bao gồm các thông tin giờ, phút, giây, ngày, tháng, năm
// hàm toLocaleString nhận vào 2 tham số tùy chọn : locale, option
// locale : en-US, en-GB, ko-KR, fa-IR, ar-EG, ja-JP-u-ca-japanese
// option : {}
// - month : long, short
// - weekday : long, short
// - year : numeric
// - day : numeric
// - timeZone : UTC
// - timeZoneName : long, short
// const today = new Date();
// console.log(`toLocaleString: ${today.toLocaleString('default', { month : 'short', day : 'numeric', year : 'numeric' })}`);







//getTimezoneOffset() trả về khoảng thời gian khác biệt giữa múi giờ hiện tại của hệ thống và giờ UTC tính bằng phút.
const today = new Date();
console.log(`mui gio cua ban la ${ -(today.getTimezoneOffset() / 60)}`)