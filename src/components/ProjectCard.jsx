function ProjectCard(props) {
    const {name, desc, image, link, repo} = props;

    console.log(image);
    
	return (
		<div className='flex flex-row justify-between'>
            <img src={image} width={400} height={400} />
            <div className='w-8/12'>
                <h3>{name}</h3>
                <p>{desc}</p>
                <a className="p-4" href={link} target='_blank' rel='noopener noreferrer'>Link</a>
                <a className="p-4" href={repo} target='_blank' rel='noopener noreferrer'>Repo</a>
            </div>
		</div>
	);
};

export default ProjectCard;
