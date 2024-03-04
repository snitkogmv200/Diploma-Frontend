import { Link } from "react-router-dom";
import { homeData } from "../../data/data";
import "./HomePage.scss"

const HomePage = () => {
	return (
		<div className="editing__items">
			{homeData.map((item, index) => {
				return (
					<Link key={index} className="editing__item" to={item.to}>
						<h2>{item.title}</h2>
						<img src={item.img} alt={item.img} />
					</Link>
				)
			})}
		</div>
	);
}

export default HomePage;