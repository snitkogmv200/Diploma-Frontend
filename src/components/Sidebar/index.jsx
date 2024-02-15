import { sidebarData } from "../../data/data"
import { useState } from "react"
import { Link } from 'react-router-dom'

import logo from "../../img/sidebar/logo.svg"
import back_arrow from "../../img/sidebar/arrow_back.svg"

import "./index.scss"


const Sidebar = () => {
	const [selected, setSelected] = useState(0)

	console.log(selected)

	return (
		<div className="sidebar">

			<div className="sidebar__logo">
				<Link to="/"><img src={logo} alt="logo" /></Link>
				<span>DeliveryService</span>
			</div>

			<div className="menu">
				{sidebarData.map((item, index) => {
					return (
						<Link to={item.to} className={selected === index ? 'menu__item active' : 'menu__item'}
							key={index}
							onClick={() => setSelected(index)}
						>
							<img src={item.icon} alt={item.icon} />
							<span>
								{item.heading}
							</span>
						</Link>
					)
				})}

				<div className="menu__item">
					<img src={back_arrow} alt="back_arrow" />
					<Link to="/">Collapse</Link>
				</div>
			</div>

		</div>
	);
}

export default Sidebar;

