// khởi tạo mảng
arr1 = [1, 2, 3, 4, 5]
arr2 = [4, 5, 6, 7, 8]

// ----------------------------------------------------------------
// vòng lặp forEach
arr1.forEach(function(item, index, array) {
    console.log(index, item, array);
})

// ----------------------------------------------------------------
// hàm filter
// arr1 = arr1.filter(function(val) {
//     return arr2.indexOf(val) == -1;
// })
// console.log(arr1);