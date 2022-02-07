1. What is an event?
	- action or occurrence recognized by a software
2. What is the different between an HTML element event and React event?
	- React: events được đặt tên theo camelCase, pass a function as the event handler, không dùng return false để prevent default behavior - dùng preventDefault
	- HTML: element events được đặt tên theo lowercase, pass a function as a string, có thể dùng return false để prevent default behavior
3. Write at least 4 keyboard events?
	- onKeyDown, onKeyPress, onKeyUp
4. Write at least 8 mouse events?
	- onMouseMove, onMouseEnter, onMouseLeave, onMouseOut, onClick, onContextMenu, onMouseOver, onMouseUp
5. What are the most common mouse and keyboard events?
	- onClick
6. Write an event specific to input element?
	- onChange
7. Write an event specific to form element?
	- onSubmit
Display the coordinate of the view port when a mouse is moving on the body?
8. What is the difference between onInput, onChange and onBlur?
	- onInput: event diễn ra ngay sau khi value của element thay đổi
	- onChange: event diễn ra khi element không được focus, sau khi nội dung đc thay đổi, có thể dùng với <select>
	- onBlur: event diễn ra khi element không được focus
9. Where do we put the onSubmit event ?
	- khi thao tác submit với form