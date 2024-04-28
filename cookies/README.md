https://viblo.asia/p/security-testing-tutorial-part-4-same-origin-policy-cookies-bWrZnOLwlxw

Có 2 loại cookie

Session Cookies : Được lưu trữ trong bộ nhớ của trình duyệt và tự động xóa khi trình duyệt đóng
Persistent Cookies : Được lưu trữ trên ổ cứng máy tính người dùng và có thể tồn tại trong thời gian dài hơn, thậm chí sau khi người dùng 
đóng trình duyệt. Loại này thường dùng để nhớ thông tin đăng nhập, tùy chọn web cá nhân hóa và theo dõi người dùng qua lượt truy cập.


Lợi ích của cookie
Hỗ trợ tùy chọn HTTPOnly không cho phép đọc cookie qua mã js
Hỗ trợ tùy chọn Secure chỉ gửi cookie thông qua HTTPS


Trình duyệt thuòng bật thông báo yêu cầu chấp nhận cookie trong các trường hợp sau
Lần đầu truy cập trang web
Sau khi xóa cookie hoặc làm mới trình duyệt
Khi trang web thay đổi cài đặt cookie, thay đổi cách thức sử dụng cookie hoặc cài đặt liên quan đến cookie