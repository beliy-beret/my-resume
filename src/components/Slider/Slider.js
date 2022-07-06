import React from 'react';
import Types from 'prop-types';
import ProjectCard from '../ProjectCard/ProjectCard';
import style from './slider.module.css';

const Slider = ({projects, nextSlide, prevSlide, activeSlide, slides}) => {
  return(
    <div className={style.slider}>
      <button className={activeSlide === 1 ? style.disabled : style.navigation} onClick={prevSlide}>&#171;</button>
      <div className={style.projectList}>
        {projects.map((item) => (
          <ProjectCard
            key={item.id}
            url={item.url}
            title={item.title}
            screenShot={item.screenShot}
          />
        ))}
      </div>
      <button className={activeSlide === slides ? style.disabled : style.navigation} onClick={nextSlide}>&#187;</button>
    </div>
  );
};

Slider.propTypes = {
  projects: Types.array,
  nextSlide: Types.func,
  prevSlide: Types.func,
  activeSlide: Types.number,
  slides: Types.array
};

export default Slider;
