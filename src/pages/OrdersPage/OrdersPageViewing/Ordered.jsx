// import { Link, useLoaderData, useLocation, useNavigate, useSearchParams, defer, Await } from "react-router-dom"
// import axios from "axios"

// import removeBox from "./../../../img/changeBox/remove.svg"
// import deleteBox from "./../../../img/changeBox/delete.svg"

// import "./OrdersPageViewing.scss"
// import OrderFilter from "../../../components/OrderFilter"
// import Loader from "../../../components/Loader"
// import { Suspense } from "react"
// import CreateForm from "../../../components/CreateForm"
// import ButtonBack from "../../../components/ButtonBack"

// const src = "http://localhost:7050/api/order"

// const Ordered = () => {
// 	let location = useLocation()
// 	console.log(location)

// 	const { orders } = useLoaderData()

// 	const [searchParams, setSearchParams] = useSearchParams()
// 	const orderQuery = searchParams.get('orderUserID') || ''

// 	const navigate = useNavigate()

// 	const goBack = () => navigate(-1)

// 	return (
// 		<div className="orders">
// 			<div className="orders__wraper">
// 				<h2 className="orders__title">Все заказы</h2>
// 				<div className="orders__menu">
// 					<CreateForm link="add" />
// 					<OrderFilter orderQuery={orderQuery} setSearchParams={setSearchParams}></OrderFilter>
// 				</div>
// 				<div className="orders__items">
// 					<Suspense fallback={<Loader></Loader>}>
// 						<Await resolve={orders}>
// 							{
// 								(resolvedOrders) => (
// 									<>
// 										{resolvedOrders.map((order, index) => {
// 											{ console.log(order) }
// 											return (
// 												<div className="order" key={index}>

// 													<div className="order__id">{index + 1}</div>

// 													<div className="box">
// 														<div className="box__item">
// 															<h3 className="box__title">ОПИСАНИЕ</h3>
// 															<p className="box__text">{order.description}</p>
// 														</div>
// 														<div className="box__item">
// 															<h3 className="box__title">ВЕС</h3>
// 															<p className="box__text">{order.massa}</p>
// 														</div>
// 														<div className="box__item">
// 															<h3 className="box__title">ГАБАРИТЫ</h3>
// 															<p className="box__text">{order.dimension}</p>
// 														</div>
// 														<div className="box__item">
// 															<h3 className="box__title">ПРИОРИТЕТ</h3>
// 															<p className="box__text">{order.priority}</p>
// 														</div>
// 														<div className="box__item">
// 															<h3 className="box__title">ДАТА ЗАКАЗА</h3>
// 															<p className="box__text">{order.date}</p>
// 														</div>
// 													</div>

// 													<div className="box__buttons">
// 														<Link to="/" className="box__link">
// 															<img className="box__button" src={deleteBox}></img>
// 														</Link>
// 														<Link to="/" className="box__link">
// 															<img className="box__button" src={removeBox}></img>
// 														</Link>
// 													</div>
// 												</div>
// 											)
// 										})}
// 									</>
// 								)
// 							}
// 						</Await>
// 					</Suspense>

// 				</div>


// 				<ButtonBack name="Назад" link={goBack} />
// 			</div>
// 		</div>
// 	);
// }

// async function getOrders() {
// 	const res = await axios.get(src)
// 	return res.data.data
// }

// const orderLoader = async () => {
// 	return defer({
// 		orders: getOrders()
// 	})
// }

// export { orderLoader, Ordered }
