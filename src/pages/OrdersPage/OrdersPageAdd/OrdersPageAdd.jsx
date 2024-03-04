import React from 'react'
import axios from "axios"
import { useForm } from "react-hook-form"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonBack from "../../../components/ButtonBack";
import { FormField, Button, Checkbox, Form, FormGroup } from 'semantic-ui-react'
import "./OrdersPageAdd.scss"

const src = "http://localhost:7050/api/order"

const OrdersPageAdd = () => {
	const [values, setValues] = useState({})
	const [valueInputWeight, setValueInputWeight] = useState()

	const onSubmit = e => {
		e.preventDefault()
		axios
			.post(src, values)
			.then(res => {
				setValues(res.data.data)
				alert("ЗАКАЗ ДОБАВЛЕН!")
			})
			.catch(err => console.log(err))
	}

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		reset
	} = useForm({
		mode: "onBlur"
	})

	const navigate = useNavigate()
	const goBack = () => navigate(-1)

	return (
		<div className='wrapperd'>
			<Form className='form' onSubmit={handleSubmit(onSubmit)}>
				<FormGroup className='form__top'>
					<FormField className='input__text'>
						<label>Общий вес заказа
							<input
								type='number'
								min="0"
								{...register("weight", {
									required: "Поле обязательно к заполнению",
									max: {
										value: 1000,
										message: "Максимум 1000 киллограм"
									},
									min: {
										value: 0,
										message: "Минимум 0 киллограм"
									}
								})} placeholder='Введите значение' />
							<div style={{ height: 20, color: 'red' }}>
								{errors?.weight && <p>{errors?.weight?.message || "Error"}</p>}
							</div>
						</label>
					</FormField>
					<FormField>
						<label>Общие габариты заказа
							<input
								{...register("dimension", {
									minLength: {
										value: 5,
										message: "Минимум 5 символов"
									},
									maxLength: {
										value: 255,
										message: "Максимум 255 символов"
									},
								})} placeholder='Введите значение' />
							<div style={{ height: 20, color: 'red' }}>
								{errors?.dimension && <p>{errors?.dimension?.message || "Error"}</p>}
							</div>
						</label>
					</FormField>
				</FormGroup>

				<FormField>
					<textarea className='textarea' {...register("description", {
						required: "Поле обязательно к заполнению",
						minLength: {
							value: 5,
							message: "Минимум 5 символов"
						},
						maxLength: {
							value: 255,
							message: "Максимум 255 символов"
						},
					})} placeholder='Введите значение'>
					</textarea >
					<div style={{ height: 20, marginRight: "-20px", color: 'red', fontWeight: 600 }}>
						{errors?.description && <p>{errors?.description?.message || "Error"}</p>}
					</div>
				</FormField>
				<FormGroup className='form__bottom'>
					<FormField className='input__bottom'>
						<label>Приоритет доставки</label>
						<select name="priority" id="priority-select">
							<option value="dog">Скорость</option>
							<option value="cat">Бюджет</option>
							<option value="hamster">Надёжность</option>
						</select>
					</FormField>
					<FormField className='input__bottom'>
						<label>Метод доставки</label>
						<select name="method" id="method-select">
							<option value="">Почта России</option>
							<option value="dog">ЖД Пути</option>
							<option value="cat">Самолёт</option>
							<option value="hamster">Автобус</option>
						</select>
					</FormField>
				</FormGroup>

				<FormField>
					<label>Адрес доставки заказа
						<input
							{...register("dimension", {
								minLength: {
									value: 5,
									message: "Минимум 5 символов"
								},
								maxLength: {
									value: 255,
									message: "Максимум 255 символов"
								},
							})} placeholder='Введите значение' />
						<div style={{ height: 20, color: 'red' }}>
							{errors?.dimension && <p>{errors?.dimension?.message || "Error"}</p>}
						</div>
					</label>
				</FormField>

				<FormField>
					<Checkbox label='Согласие на обработку персональных данных' />
				</FormField>
				<Button type='submit' disabled={!isValid}>Submit</Button>
			</Form>
		</div>
	)
}

export default OrdersPageAdd;

{/* <div className="d-flex vh-100 justify-content-center align-items-center" style={{ backgroundColor: "var(--greyBold)" }}>
			<div className="w-50 bg-white rounded p-3">
				<form onSubmit={handleSubmit(onSubmit)}>
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
		</div> */}