1. What is a controlled input?
	- sử dụng state của component để quản lý input
2. What is an uncontrolled input
	- dữ liệu đc quản lý bởi DOM, sử dụng ref để lấy dữ liệu từ input khi cần thiết
3. How do you get a content of a certain HTML element in React ?
	- using ref
4. Why it is not a good idea to touch the DOM directly in React ?
	- vì React sử dụng DOM ảo để xử lý thao tác DOM
5. What is most frequently used in React ? Controlled or Uncontrolled input.
	- Controlled input
6. What do you need to write uncontrolled input?
	- ref
7. Does state require to write uncontrolled input?
	- No
8. When do you use uncontrolled input?
	- khi cần code nhanh, form đơn giản, truy xuất giá trị 1 lần, validate khi submit
9. When do you use controlled input?
	- truy xuất giá trị 1 lần, validate khi submit, xác thực field tức thì, vô hiệu hóa nút submit có điều kiện, định dạng input, xử lý nhiều đầu vào cho 1 data, input động
10. Do you use a controlled or uncontrolled input to validate form input fields?
	- controlled input