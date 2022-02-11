1. What package do you use to implement routing in react?
	- react router dom
2. What is the default export in react-router-dom?
	- nothing
3. What is the use of the following Components(Route, NavLink, Switch, Redirect, Prompt)
	- Route được định nghĩa một ánh xạ (mapping) giữa một URL và một component. Nói đơn giản là khi người dùng truy cập theo một URL trên trình duyệt, một component tương ứng sẽ được hiển thị trên giao diện.
	- NavLink cho phép điều hướng từng component, yêu cầu params, nhấp vào liên kết NavLink không refresh trang, có các style attribute như activeClassName và activeStyle.  Khi URL trên browser trùng khớp với attribute to trong NavLink thì 2 thuộc tính này sẽ được tự động thêm vào.
	- Switch: chỉ cho phép 1 component được render
	- Redirect: giúp điều hướng route đến 1 path nhất định dựa vào điều kiện thỏa mãn
	- Prompt: hiển thị thông báo khi user chưa hoàn thành task