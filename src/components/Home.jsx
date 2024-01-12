import { useState, useEffect, useContext } from 'react';
import Bio from './Bio';
import Featured from './Featured';
import Experience from './Experience';

function Home() {
	const [bioOpacity, setBioOpacity] = useState(100);
	const [bioHidden, setBioHidden] = useState(false);

	const handleScroll = () => {
		const scrollPos = window.scrollY;
		const maxScrollPos = document.querySelector('#about').offsetHeight;
		const ratio = 1 - (scrollPos / maxScrollPos);
		if(ratio >= 0) {
			setBioOpacity(ratio < 0.15 ? 0 : ratio);
			setBioHidden(ratio < 0.15)
		}
	};
	
	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		// neon theme your site up
		// https://www.oakharborwebdesigns.com -> dark mode
        // https://m7mad.dev -> single-page scrolling style
		// https://komlankodoh.com
		// https://www.karanpratapsingh.com
        // we can do scroll style, but still have a separate page for ALL projects. 
        // use right/left empty spaces for forward and back?
		// add a scrolly thingy so that scrolling down from the Bio doesn't move Bio, just moves everything below it up as a page, which then covers the Bio. (not in m7mad)
		// https://dev.to/erikkarlsson/how-to-add-a-preview-of-your-react-or-any-other-site-when-sharing-it-2fhf -> set meta tags for our site when previewed on other sites

		// TODO: add experiences
		// TODO: styling on content
		// TODO: add about content
		// Then production
		// Then work on extras (sandbox/playground, dark/light toggle, gamemode, etc..)

		<>
			<Bio bioOpacity={bioOpacity} />
			<Featured bioHidden={bioHidden} />
			<Experience bioHidden={bioHidden}/>
		</>
	);
};

export default Home;
