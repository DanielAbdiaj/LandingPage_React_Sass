

import './projectCard.scss'


const ProjectCard = ({ title, text, image }) => {
    
    return (
      <div className="projectCard__container">
        <div className="projectCard__imageContainer">
            <img src={image} alt="" className='projectCard__image' />
        </div>
        <p className="projectCard__title">{title}</p>
        <p className="projectCard__text">{text}</p>
      </div>
    );
  };
  
  export default ProjectCard;