import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import axios from "axios"
import { useState } from "react"

import "./OrdersPageViewing.scss"

import FormViewing from "../../../components/FormViewing"
import TitleMain from "../../../components/TitleMain"
// import MenuMain from "../../../components/MenuMain"

const OrdersPageViewing = () => {
	const location = useLocation()
	const src = `http://localhost:7050/api${location.pathname}`
	console.log(src)

	const [response, setResponse] = useState([])

	useEffect(() => {
		axios
			.get(src)
			.then(res => {
				console.log(res)
				setResponse(res.data.data)
			})
			.catch(err => console.log(err))
	}, [])

	return (
		<>
			<TitleMain />
			<div className="products__items">
				{response.map((item, index) => <FormViewing item={item} index={index}></FormViewing>)}
			</div>
		</>
	);
}

export default OrdersPageViewing;

