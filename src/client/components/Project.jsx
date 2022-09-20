import React from 'react';
import PropTypes from 'prop-types';

Project.propTypes =  {
	title: PropTypes.string
};


export default function Project({ title }) {
    
	return (
		<section>
			<h1> { title } </h1>
		</section>
	);

}