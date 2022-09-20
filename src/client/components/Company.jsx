import React from 'react';
import PropTypes from 'prop-types';

Company.propTypes =  {
	title: PropTypes.string
};


export default function Company({ title }) {
    
	return (
		<section>
			<h1> { title } </h1>
		</section>
	);

}