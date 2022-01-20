1. What is the difference between a regular function and an arrow function?
	- khai báo: arrow function sử dụng mũi tên, regular function sử dụng keyword function
	- khác với regular function, arrow function không có bind vì vậy, không định nghĩa lại this, this sẽ tương ứng với ngữ cảnh gần nhất của nó
	- => arrow function không phù hợp làm method của object
	- arrow function không bind argument => sử dụng rest parameters thay thế arguments
2. What is a React Component?
	- là đoạn code nhỏ, có thể tái sử dụng
	- 1 React app là sự kết hợp của nhiều component
3. How do you make a React functional component?
	- syntax:
	const jsx = <tag> Content </tag>
	const ComponentName = () => {
  		return jsx
	}
4. What is the difference between a pure JavaScript function and a functional component?
	- functional component return HTML dưới dạng JSX
5. How small is a React component?
	- 1 component return 1 HTML duy nhất dưới dạng JSX
6. Can we make a button or input field component? yes