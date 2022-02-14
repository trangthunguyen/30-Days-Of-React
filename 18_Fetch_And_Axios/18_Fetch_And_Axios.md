1. What is HTTP request?
	- HTTP requestes là thông tin được gửi từ client lên server, để yêu cầu server tìm hoặc xử lý một số thông tin, dữ liệu mà client muốn
2. What are the most common HTTP requests?
	- GET, POST, PATCH, DELETE
3. What is fetch?
	- fetch api là một tiêu chuẩn để tạo 1 request gửi đến server và nhận về 1 dữ liệu, được viết dựa trên khái niệm Promise
4. What is axios?
	- axios là 'a third party package' cần cài đặt bằng npm, cách phổ biến nhất để tạo HTTP requests
5. What is the difference between fetch and axios?
    | axios| fetch |
    | ------ | ------ |
    | có một url trong request object | không có url trong request object |
    | là 'a third party package', cần cài đặt |được tạo trong các modern browser, không cần cài đặt|
    | sd data property | sd body property |
    | data có thể là một object |body phải là một string |
    | thành công khi status is 200 and statusText is ‘OK’ | thành công khi response object có chưa ok property |
    | tự động chuyển data về dạng JSON | xử lý JSON data để tạo request,tạo response bằng .json() |
    | cho phép hủy request và request timeout | không cho phép |
    | có thể chặn HTTP requests | mặc định không chặn requests |
    | hỗ trợ download | không hỗ trợ download |
    | được support bởi nhiều browser | chỉ support Chrome 42+, Firefox 39+, Edge 14+, and Safari 10.1+ |
6. Do you prefer fetch to axios for make HTTP requests?
	- axios

