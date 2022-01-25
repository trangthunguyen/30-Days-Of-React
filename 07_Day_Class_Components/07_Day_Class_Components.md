1. How do you write a pure JavaScript function
	- function <tên hàm> (<đối số>) {
		//code
		//(return <variable>)
	}
2. What is inheritance and how do you make a child from a parent class?
	- inheritance: tính kế thừa, class con kế thừa thuộc tính và phương thức của class cha
	- class <tên class con> extends <tên class cha> {
		constructor(props) {
    			super(props)
  		}
		//code
	}
3. What is class based React component ?
	- class được viết bằng JS và kế thừa class React Component
4. What is the difference between functional React component and class based React component ?
	- syntax khác nhau
	- class based React component là class con của React component, dùng render method để return React element, có thể có constructor, có thể dùng react lifecycle method trong function component
	- function React component không kế thừa, return React element không cần dùng render method, không render method, không constructor, không dùng react lifecycle method trong function component
5. When do we need to use class based components instead of functional components What is the use cases of class based component ?
	- Whenever we have the use case with the State of the component and rendering the UI based on the Component State, use the Class Components
Which type of component do use most frequently ? functional or class-based component
6. What is React life cycle ? (not covered yet) ?
	- Mounting, Updating, Unmounting, Error Handling
7. What is state in React ? (not covered yet)
	- state là một object có thể được sử dụng để chứa dữ liệu hoặc thông tin về components
	- có thể được thay đổi bất cứ khi nào mong muốn
	- chỉ tồn tại trong phạm vi của components chứa nó, mỗi khi state thay đổi thì components đó sẽ được render lại