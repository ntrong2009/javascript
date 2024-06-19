// Toán tử sẽ gán một giá trị mới nếu giá trị hiện tại null/undefined
var x = null;
var y = 5;
x ??= y;

console.log(x); // 5

// toán tử ở trên tương đương
x = (x ?? y);