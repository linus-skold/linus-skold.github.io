import React from 'react';
import PropTypes from 'prop-types';

Language.propTypes =  {
	title: PropTypes.string
};


export default function Language({ title }) {
    
	return (
		<h1> { title } </h1>
	);

}