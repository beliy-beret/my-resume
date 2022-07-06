import style from './projectCard.module.css';

const ProjectCard = ({title, screenShot, url}) => {
  return(
    <div className={style.card}>
      <a href={url} target={"_blank"}><img src={screenShot} alt={"Screen project"} /></a>
      <h2><a href={url} target={"_blank"}>{title}</a></h2>
    </div>
  )
}

export default ProjectCard;
