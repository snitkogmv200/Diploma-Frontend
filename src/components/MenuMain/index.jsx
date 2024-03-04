import "./index.scss"

import CreateForm from "../CreateForm";
import OrderFilter from "../OrderFilter";

const MenuMain = ({ needQuery, setSearchParams, keyAddress }) => {
	return (
		<div className="menu__bar">
			<CreateForm link="add" />
			<OrderFilter productQuery={needQuery} setSearchParams={setSearchParams} keyAddress={keyAddress} />
		</div>
	);
}

export default MenuMain;