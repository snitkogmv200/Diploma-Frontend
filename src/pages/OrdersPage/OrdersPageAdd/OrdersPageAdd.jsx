import axios from "axios"
import { useState } from "react";
import "./OrdersPageAdd.scss"
import { useNavigate } from "react-router-dom";
import ButtonBack from "../../../components/ButtonBack";
const src = "http://localhost:7050/api/order"

const OrdersPageAdd = () => {
	const [values, setValues] = useState({
		dimension: 22,
		description: '',
		massa: 33,
		ordr_priority: ''
	})

	console.log(values)

	const handleSubmit = e => {
		e.preventDefault()
		axios
			.post(src, values)
			.then(res => {
				setValues(res.data.data)
				console.log("Всё ок")
			})
			.catch(err => console.log(err))
	}

	const navigate = useNavigate()
	const goBack = () => navigate(-1)

	return (
		<div className="d-flex vh-100 justify-content-center align-items-center" style={{ backgroundColor: "var(--greyBold)" }}>
			<div className="w-50 bg-white rounded p-3">
				<form onSubmit={handleSubmit}>
					<h2>Add order</h2>
					<div className="mb-2">
						<label htmlFor="">Dimension</label>
						<input type="text" placeholder="Enter Name" className="form-control" onChange={e => setValues({ ...values, dimension: +(e.target.value) })} />
					</div>
					<div className="mb-2">
						<label htmlFor="">Description</label>
						<input type="text" placeholder="Enter Name" className="form-control" onChange={e => setValues({ ...values, description: e.target.value })} />
					</div>
					<div className="mb-2">
						<label htmlFor="">Massa</label>
						<input type="text" placeholder="Enter Name" className="form-control" onChange={e => setValues({ ...values, massa: +(e.target.value) })} />
					</div>
					<div className="mb-2">
						<label htmlFor="">Order Priority</label>
						<input type="text" placeholder="Enter Name" className="form-control" onChange={e => setValues({ ...values, ordr_priority: e.target.value })} />
					</div>
					<button className="btn btn-success">Submit</button>
				</form>
			</div>
			<ButtonBack name="Назад" link={goBack} style={{ position: "absolute", bottom: "6%", left: "25%" }} />
		</div>
	);
}

export default OrdersPageAdd;