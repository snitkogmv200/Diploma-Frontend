import { Button } from "@mui/base";
import { Link } from "react-router-dom";

const CreateForm = ({ link }) => {
	return (
		<div>
			<Link to={link}>
				<Button variant="contained" color="success">
					ДОБАВИТЬ КОМПОНЕНТ
				</Button>
			</Link>
		</div>
	);
}

export default CreateForm;