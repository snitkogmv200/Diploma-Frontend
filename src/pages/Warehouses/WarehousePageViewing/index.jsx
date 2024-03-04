import { useEffect } from "react"
import { useLocation, useSearchParams, useHistory } from "react-router-dom"
import axios from "axios"
import { useState } from "react"
import { editText } from "../../../utils/editText"

import "./index.scss"

import FormViewing from "../../../components/FormViewing"
import TitleMain from "../../../components/TitleMain"
import MenuMain from "../../../components/MenuMain"

const WarehouseViewing = () => {
	const location = useLocation()
	const src = `http://localhost:7050/api${location.pathname}`

	const [response, setResponse] = useState([])
	const [searchParams, setSearchParams] = useSearchParams()
	const history = useHis

	const productQuery = searchParams.get('warehouse') || ''

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
			<MenuMain needQuery={productQuery} setSearchParams={setSearchParams} keyAddress="warehouse" />
			<div className="products__items">
				{response
					.filter(name => editText(name.warehouse_name).includes(editText(productQuery)) || editText(name.city).includes(editText(productQuery)))
					.map((item, index) => <FormViewing item={item} index={index}></FormViewing>)}
			</div>
		</>
	);
}

export default WarehouseViewing;

