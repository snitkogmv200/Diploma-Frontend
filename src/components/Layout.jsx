import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout = () => {
	return (
		<div className="App">
			<div className="wrapper">
				<Sidebar></Sidebar>
				<Outlet></Outlet>
			</div>
		</div>
	);
}

export default Layout;