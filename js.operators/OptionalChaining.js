// toán tử chuỗi tùy chọn
// được giới thiệu trong phiên bản ECMAScript 2020 (ES11)

// khi sử dụng ?. nếu biểu thức bên trái null/undefined
// nó sẽ ngừng đánh giá và return undefined thay vì tạo ra lỗi (TypeError)
// điều này làm mã nguồn an toàn hơn khi làm việc với các đối tượng ko định nghĩa đầy đủ.

var travelPlans = {
    destination: 'DC',
    monday: {
        location: 'National Mall',
        budget: 200
    }
};

const tuesdayPlans = travelPlans.tuesday?.location;
console.log(tuesdayPlans) // => undefined