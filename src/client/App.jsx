import React from 'react';

import Language from './components/Language';
import Stack from './components/Stack';

export default function App() {
	return (
		<div>
			<h1>Linus Sköld</h1>
			<h2>Software Developer</h2>
			<li>Github</li>
			<li>LinkedIn</li>
			<li>CV</li>
			<li></li>
			
			<section>
				<img id="profile" src='./static/self.png' />

			</section>
			<section>
				<Stack animation={'static'}>
					<Language title="Hello" />

				</Stack>
			</section>
		</div>
	);
}
