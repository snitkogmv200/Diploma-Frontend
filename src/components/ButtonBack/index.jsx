const ButtonBack = ({ link, name }) => {

	return (
		<button
			style={{
				fontWeight: 600,
				alignSelf: 'flex-start',
				backgroundColor: "var(--greyBold)",
			}}
			onClick={link}
			type="button"
			class="btn">
			{name}
		</button>
	);
}

export default ButtonBack;