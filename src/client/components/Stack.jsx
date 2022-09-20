import React, { Children, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../css/slide_style.css';


Stack.propTypes =  {
	animation: PropTypes.string,
	children: PropTypes.any
};
const observer = new IntersectionObserver((entries) => {
	console.log('hello');
	entries.forEach((entry) => {
		console.log(entry);
		if(entry.isIntersecting) {
			entry.target.classList.add('show');
		}
		else {
			entry.target.classList.remove('show');
		}
	});
});

export default function Stack({ animation, children }) {
	useEffect(() =>{
		const hiddenElements = document.querySelectorAll('.hidden');
		console.log(hiddenElements);
		hiddenElements.forEach((el) => observer.observe(el));
	}, []);

	const childArr = Children.toArray(children);
	return (
		<div className={ 'stack-animate' +' '+ animation } >
			{Children.map(childArr, (child) => {
				return (<div className={'hidden'}> {child} </div> );
			})}
		</div> 
	);
}