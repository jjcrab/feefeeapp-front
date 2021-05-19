import React, { useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';

const data = [
	{
		title: 'Anger 😠',
		value: 16,
		color: '#C4C4C4',
	},
	{ title: 'Fear 😨', value: 16, color: '#C4C4C4' },
	{ title: 'Surprise 😲', value: 16, color: '#C4C4C4' },
	{ title: 'Yuck 🤮', value: 16, color: '#C4C4C4' },
	{ title: 'Happy 😀', value: 16, color: '#C4C4C4' },
	{ title: 'Sad 😟', value: 16, color: '#C4C4C4' },
];

function feelingWheel(props) {
	const lineWidth = 85;

	return (
		<div id='container'>
			<h3>
				How are you feeling <br /> today?
			</h3>
			<PieChart
				lineWidth={99.9}
				radius={PieChart.defaultProps.radius - 14}
				label={({ dataEntry }) => dataEntry.title}
				data={data}
				labelStyle={{
					fill: 'black',
					opacity: 1,
					pointerEvents: 'none',
					fontSize: '5px',
					fontWeight: 'bold',
				}}
				labelPosition={100 - lineWidth / 2.4}
				onClick={(e) => {
					e.preventDefault();
					console.log(e.target.textContent);
				}}
			/>
			;
		</div>
	);
}

export default feelingWheel;
