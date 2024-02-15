import { useState } from "react";

const OrderFilter = ({ orderQuery, setSearchParams }) => {
	const [search, setSearch] = useState(orderQuery)

	const handleSubmit = (e) => {
		e.preventDefault()
		const form = e.target
		const query = form.search.value
		setSearchParams({ orderUserID: query })
	}

	return (
		<form className="orders__form" autoComplete="off" onSubmit={handleSubmit}>
			<input className="input__search" type="search" name="search" value={search} onChange={e => setSearch(e.target.value)} />
			<input className="input__btn" type="submit" value="Search" />
		</form>
	);
}

export default OrderFilter;