import { Link } from "react-router-dom"

import removeBox from "./../../img/changeBox/remove.svg"
import deleteBox from "./../../img/changeBox/delete.svg"

import "./index.scss"

const FormViewing = ({ item, index }) => {
	const valuesArray = []
	for (let key in item) {
		valuesArray.push([key, item[key]])
	}

	return (
		<div className="item">
			<div className="item__id">{index}</div>
			<div className="box" key={index}>
				{valuesArray.map(el => {
					return (
						<div className="box__item">
							<h3 className="box__title">{el[0]}</h3>
							<p className="box__text">{el[1]}</p>
						</div>
					)
				}
				)}
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
}

export default FormViewing;
