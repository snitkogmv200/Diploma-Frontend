import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import Layout from "./../components/Layout";
import UsersPages from "./../pages/UsersPages/UsersPages";
import ProductsPages from "./../pages/ProductsPages/ProductsPages";
import HomePage from "./../pages/HomePage/HomePage";
import NotFoundPages from "./../pages/NotFoundPages/NotFoundPages";

import OrdersPageAdd from "../pages/OrdersPage/OrdersPageAdd/OrdersPageAdd";
import OrdersPageChange from "../pages/OrdersPage/OrdersPageChange/OrdersPageChange";
import OrdersPageDelete from "../pages/OrdersPage/OrdersPageDelete/OrdersPageDelete";
import OrdersPageViewing from "../pages/OrdersPage/OrdersPageViewing/OrdersPageViewing";
import { orderLoader, Ordered } from "../pages/OrdersPage/OrdersPageViewing/Ordered";

const routerCreate = createBrowserRouter(createRoutesFromElements(
	<Route path='/' element={<Layout></Layout>}>
		<Route index element={<HomePage></HomePage>}></Route>
		<Route path='orders' element={<Ordered></Ordered>} loader={orderLoader}></Route>
		<Route path='orders/change' element={<OrdersPageChange></OrdersPageChange>}></Route>
		<Route path='orders/add' element={<OrdersPageAdd></OrdersPageAdd>}></Route>
		<Route path='orders/delete' element={<OrdersPageDelete></OrdersPageDelete>}></Route>
		<Route path='products' element={<ProductsPages></ProductsPages>}></Route>
		<Route path='users' element={<UsersPages></UsersPages>}></Route>
		<Route path='*' element={<NotFoundPages></NotFoundPages>}></Route>
	</Route>
))

const router = () => {
	return (
		<RouterProvider router={routerCreate}></RouterProvider>
	);
}

export default router;