import React, { useState } from 'react';

const Input3 = () => {
	const initialState = '';
	const [formState, setFormState] = useState(initialState);

	const handleChange = (event) => {
		setFormState(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setFormState(initialState);
	};

	return (
		<div>
			<div>
				<h3>How did that make you feel?</h3>
				<p>Hopefully not afraid!</p>
			</div>

			<form onSubmit={handleSubmit}>
				<textarea
					cols='30'
					rows='10'
					onChange={handleChange}
					value={formState}></textarea>
				<button type='submit'>See what we get</button>
			</form>
			<p>pssssst! You can fill in that box too!</p>
		</div>
	);
};

export default Input3;
