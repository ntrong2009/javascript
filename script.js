// var date1 = new Date();
// var date2 = new Date("10/30/2020 17:34:24");
// // compare 2 day với nhau
// if (date1 > date2) {
//     console.log('true');
// } else {
//     console.log('false');
// }


// hàm toLocaleString nhận vào 2 tham số tùy chọn : locale, option
// locale : en-US, en-GB, ko-KR, fa-IR, ar-EG, ja-JP-u-ca-japanese
// option : {}
// - month : long, short
// - weekday : long, short
// - year : numeric
// - day : numeric
// - timeZone : UTC
// - timeZoneName : long, short
const today = new Date();
console.log(`toLocaleString: ${today.toLocaleString('default', { month : 'short', day : 'numeric', year : 'numeric' })}`);