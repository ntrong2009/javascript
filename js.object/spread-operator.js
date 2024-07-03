/*
Trong JavaScript, bạn có thể sử dụng cú pháp spread operator kết hợp với conditional (toán tử ba ngôi) 
để thêm một property vào object nếu một điều kiện nào đó đúng.
*/

// object spread operator
const condition = true;
const obj = {
    existingProp: 'existingValue',
    ...(condition && { newProp: 'newValue' })
}

console.log(obj);



const condition2 = true;
const obj2 = Object.assign(
    { existingProp: 'existingValue' },
    condition2 ? { newProp: 'newValue' } : {}
);

console.log(obj);