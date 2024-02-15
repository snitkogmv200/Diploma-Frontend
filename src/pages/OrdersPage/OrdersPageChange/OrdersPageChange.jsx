import "./OrdersPageChange.scss"
import { useButton } from "@mui/base";

const OrdersPageChange = () => {
	const { getRootProps } = useButton({})
	return (
		<div>
			<button className="btn" {...getRootProps()}>Use</button>
		</div>
	);
}

export default OrdersPageChange;