import React from 'react';
import Types from 'prop-types';
import style from './projectCard.module.css';

const ProjectCard = ({title, screenShot, url}) => {
  return(
    <div className={style.card}>
      <a href={url} target={'_blank'} rel="noreferrer"><img src={screenShot} alt={'Screen project'} /></a>
      <h2 className={style.title}><a href={url} target={'_blank'} rel="noreferrer">{title}</a></h2>
    </div>
  );
};

ProjectCard.propTypes = {
  title: Types.string,
  screenShot: Types.string,
  url: Types.string
};

export default ProjectCard;
