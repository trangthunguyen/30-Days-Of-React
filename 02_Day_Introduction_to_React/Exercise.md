Exercises: What is React?
1. What is React?
  - React được tạo ra bởi Facebook (Meta), released vào tháng 5, 2013
  - là một thư viện Javascript để xây dựng UI
  - tạo single page applications, và những components UI có thể tái sử dụng
2. What is a library?
	- Librariy in programming are collections of prewritten code that users can use to optimize tasks
3. What is a single page application?
	- một ứng dụng chỉ có 1 trang HTML, tất cả các components sẽ được hiển thị trên trang index.html và sẽ không có bất kỳ HTML nào khác trong toàn bộ ứng dụng
4. What is a component ?
  - một component là một class hoặc function có thể có đầu vào là thuộc tính và trả về một React element mô tả cách hiển thị một phần nào UI nào đó
5. What is the latest version of React? v17.0.2
6. What is DOM?
  - document object model - mô hình đối tượng trong tài liệu HTML, DOM giúp Js có thể truy cập đến các thành phần trong HTML
  - DOM gồm 3 thành phần chính: element, attribute, text
7. What is React Virtual DOM?
  - React sử dụng React Virtual DOM để thực hiện các thay đổi mới và nó chỉ cập nhật phần tử cần thay đổi mà không cần phải render cả trang
8. What does a web application or a website(composed of) have?
	- A web application, or a website, is made of buttons, links, forms with different input fields, header, footer, sections, articles, texts, images, audios, videos and boxes with different shapes

Exercises: Why React?
1. Why did you chose to use react?
  - cộng đồng sử dụng và phát triển lớn, thuận lợi trong việc tìm kiếm và trao đổi
  - mã nguồn mở
  - tách thành nhiều component, gom html, xử lý trong component nên viết code nhanh hơn và tái sd; dùng dom ảo nên tốc độ nhanh
2. What measures do you use to know popularity ?
  - So sánh lượng stars, watchers và forks của 2 github repo
3. What is more popular, React or Vue ?
  - React nhưng Vuejs cũng đang pt rất nhanh
  
Exercises: JSX
1. What is an HTML element?
  - HTML element được xác định bởi thẻ mở, content và thẻ đóng, thuộc tính ở trong thẻ mở
  - có một vài HTML element không có content và thẻ đóng (<br>) được gọi là self closing HTML element
2. How to write a self closing HTML element?
  - chỉ có thẻ mở, không có content và thẻ đóng
3. What is an HTML attribute? Write some of them
  - HTML attribute cung cấp thông tin bổ dung thông tin cho các element
  - Một số HTML attribute: alt, src, href, id, class,...
4. What is JSX?
  - JSX viết tắt của Javascript XML, cho phép viết HTML element trong code Js
5. What is babel?
  - là một thư viện giúp chuyển code JSX sang code thuần Js và Js mới nhất sang ver cũ hơn
6. What is a transpiler?
  - Transpiler là một thuật ngữ chỉ các công cụ đọc source code được viết bằng một ngôn ngữ lập trình và tạo ra code tương đương của một ngôn ngữ khác

Exercises: JSX Elements
1. What is a JSX element?
  - JSX element có thể là một HTML element đơn hoặc nhiều HTML element được bao bởi một HTML element cha

Write your name in a JSX element and store it in a name variable
const name = (<span>Trang</span>)
Write a JSX element which displays your full name, country, title, gender, email, phone number. Use h1 for the name and p for the rest of the information and store it in a user variable
const user = (
    <div>
        <h1>Fullname: Nguyen Thu Trang</h1>
        <p>Country: Vietnam</p>
        <p>Gender: Female</p>
        <p>Email: trangnt.itds@gmail.com</p>
        <p>Phone number:087589147599</p>
    </div>
)
Write a footer JSX element
const footer = (
  <footer>
    <p>Copyright 2022</p>
  </footer>
)

Exercises: Inline Style
Create a style object for the main JSX
Create a style object for the footer and app JSX
Add more styles to the JSX elements

Exercises: Internal Styles
Apply different styles to your JSX elements
Exercise: Inject data to JSX
Practice how to make JSX element and injecting dynamic data(string, number, boolean, array, object)