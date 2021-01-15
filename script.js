// 3 cách tạo Object

// literal
const x = 'sua';
const dog = {
    [x]: 'gau gau'  // thuộc tính được tính toán
};
console.log('dog sua : ', dog.sua);
// thuộc tính của Object có thể được xóa với từ khóa delete
delete dog.sua;
console.log('dog', dog);

// constructor
const cat = new Object();

// static method
const horse = Object.create({});


// phương thức trong Object : là một thuộc tính của Object và có giá trị là một hàm
function person(name, age) {
    this.name = name;
    this.age = age;
    this.changeName = function (name) {
        this.name = name;
    }
}
// khởi tạo Object
var p = new person("Trong", 23);
p.changeName("Hanh");


/* Object.assign(target, ...sources) được sử dụng để sao chép các giá trị của tất cả
các thuộc tính có thể liệt kê từ một hoặc nhiều đối tượng nguồn đến một đối tượng đích.
Nó sẽ trả về đối tượng đích đó*/
var Obj = { a : 1 }
var copy = Object.assign({}, Obj);
console.log(copy) // {a : 1}

/* Các property trong đối tượng đích sẽ bị ghi lại bởi các thuộc tính trong đối tượng
nguồn nếu chúng có cùng key. Tương tự, các thuộc tính nguồn sau sẽ ghi đè lên những 
thuộc tính nguồn trước*/
const a = { name : 'foo'}
const b = Object.assign(a, { name: 'bar', age : 1}, {id : 9});
console.log(b) // {name: 'bar', age: 1, id: 9}
console.log(a) // giá trị của a bị thay đổi thành {name: 'bar', age: 1, id: 9}
console.log(a === b) // true

// gộp các thuộc tính có cùng key
let o1 = { a: 21, b: 22, c: 24 };
let o2 = { b: 25, c: 26 };
let o3 = { c: 27 };

let finalObj = Object.assign({}, o1, o2, o3);
console.log(finalObj); //{a: 21, b: 25, c: 27}