import customers from "./../img/sidebar/customers.svg"
import home from "./../img/sidebar/home.svg"
import orders from "./../img/sidebar/orders.svg"
import products from "./../img/sidebar/products.svg"
import warehouses from "./../img/sidebar/warehouses.svg"

export const sidebarData = [
	{
		icon: home,
		heading: "Home",
		to: "/"
	},
	{
		icon: orders,
		heading: "Orders",
		to: "/orders"
	},
	{
		icon: products,
		heading: "Products",
		to: "/products"
	},
	{
		icon: customers,
		heading: "Customers",
		to: "/customer"
	},
	{
		icon: warehouses,
		heading: "Warehouses",
		to: "/warehouses"
	},
]

export const homeData = [
	{
		title: "Просмотр компонента Orders",
		img: orders,
		to: "/orders"
	},
	{
		title: "Просмотр компонента Products",
		img: products,
		to: "/products"
	},
	{
		title: "Просмотр компонента Customers",
		img: customers,
		to: "/customers"
	},
	{
		title: "Просмотр компонента Warehouses",
		img: warehouses,
		to: "/warehouses"
	}
]

