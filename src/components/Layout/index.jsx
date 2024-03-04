import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import "./index.scss"

const Layout = () => {
	return (
		<div className="App">
			<div className="wrapper">
				<Sidebar></Sidebar>
				<div className="main">
					<div className="main__wrapper">
						<Outlet></Outlet>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Layout;