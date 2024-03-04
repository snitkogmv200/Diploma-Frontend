import { Link } from "react-router-dom";
import "./index.scss"

const CreateForm = ({ link }) => {
	return (
		<div>
			<Link to={link}>
				<button className="button__form" variant="contained" color="success">
					ДОБАВИТЬ КОМПОНЕНТ
				</button>
			</Link>
		</div>
	);
}

export default CreateForm;