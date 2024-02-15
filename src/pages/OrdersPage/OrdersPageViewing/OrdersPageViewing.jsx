import { useState, useEffect } from "react"
import { Link, useNavigate, useSearchParams } from "react-router-dom"
import axios from "axios"

import removeBox from "./../../../img/changeBox/remove.svg"
import deleteBox from "./../../../img/changeBox/delete.svg"

import "./OrdersPageViewing.scss"
import OrderFilter from "../../../components/OrderFilter"

const src = "http://localhost:7050/api/order"

const OrdersPageViewing = () => {

	const [searchParams, setSearchParams] = useSearchParams()
	const orderQuery = searchParams.get('orderUserID') || ''

	const navigate = useNavigate()

	const [orders, setOrders] = useState([])

	const goBack = () => navigate(-1)

	useEffect(() => {
		axios
			.get(src)
			.then(res => {
				setOrders(res.data.data)
			})
			.catch(err => console.log(err))
	}, [])

	return (
		<div className="orders">
			<h2 className="orders__title">Все заказы</h2>
			<OrderFilter orderQuery={orderQuery} setSearchParams={setSearchParams}></OrderFilter>
			<div className="orders__wrapper">
				{orders.filter(order => order.usr_id.includes(orderQuery)).map((order, index) => {
					return (
						<div className="order" key={index}>

							<div className="order__id">{index + 1}</div>

							<div className="box">
								<div className="box__item">
									<h3 className="box__title">ОПИСАНИЕ</h3>
									<p className="box__text">{order.description}</p>
								</div>
								<div className="box__item">
									<h3 className="box__title">ВЕС</h3>
									<p className="box__text">{order.massa}</p>
								</div>
								<div className="box__item">
									<h3 className="box__title">ГАБАРИТЫ</h3>
									<p className="box__text">{order.dimension}</p>
								</div>
								<div className="box__item">
									<h3 className="box__title">ПРИОРИТЕТ</h3>
									<p className="box__text">{order.priority}</p>
								</div>
								<div className="box__item">
									<h3 className="box__title">ДАТА ЗАКАЗА</h3>
									<p className="box__text">{order.date}</p>
								</div>
							</div>

							<div className="box__buttons">
								<Link to="/" className="box__link">
									<img className="box__button" src={deleteBox}></img>
								</Link>
								<Link to="/" className="box__link">
									<img className="box__button" src={removeBox}></img>
								</Link>
							</div>
						</div>
					)
				})}
			</div>


			<button onClick={goBack}>Назад</button>
		</div>
	);
}

export default OrdersPageViewing;
