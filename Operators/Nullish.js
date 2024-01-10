// được gọi là toán tử liên kết nullish
// toán tử trả về đối số đầu tiên nếu not null/undefined
const a = null;
console.log(a ?? 5);


// điểm khác nhau giữa nullish với OR
const b = 0;

console.log(b || 'result') // result
console.log(b ?? 'result') // 0