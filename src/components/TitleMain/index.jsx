import { useLocation } from "react-router-dom";
import "./index.scss"

const TitleMain = () => {
	const title = useLocation().pathname.substring(1);

	return (
		<div className="title">
			<h1>{title}</h1>
		</div>
	);
}

export default TitleMain;