import picture from '../assets/images/bio.webp';
import { FaRegHandPointRight, FaRegEnvelope } from 'react-icons/fa';

function Bio(props) {
    const { bioOpacity } = props;

	return (
		<div id="about" className='sticky top-24 pt-12 px-24 z-0 flex flex-row justify-between' style={{ opacity: bioOpacity }}>
            <div className='relative w-8/12'>
                <div className='mb-4'>
                    Hi! I'm Issac. 
                </div>
                <div>
                    I currently attend Stevens Institute of Technology and study Computer Science. 
                    <br/>
                    I enjoy music, exploring, and the little things; related to my position, problem solving and a solid challenge. I'm looking for work in a warm, 
                    ever-improving environment driven by a shared goal where I could palpably reap the rewards of my years of work and make a difference.
                </div>
                <br/>
                <div className='absolute bottom-0'>
                    Wanna reach out to me? <FaRegHandPointRight className='inline'/> <a href='mailto:izheng@stevens.edu'><FaRegEnvelope className='inline'/></a>
                </div>
            </div>
			<img src={picture} width={400} className='rounded-full' alt='me' title='me'/>
		</div>
	);
};

export default Bio;
