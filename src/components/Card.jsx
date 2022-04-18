import React from 'react';
import './Card.style.css'
export const Card = () => {
	return (
		<div class='card'>
			<img src='https://www.w3schools.com/howto/img_avatar.png' alt='Avatar'/>
			<div class='container'>
				<h4>
					<b>Jane Doe</b>
				</h4>
				<p>Interior Designer</p>
			</div>
		</div>
	);
};
