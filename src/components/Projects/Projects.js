import React, {useState} from 'react';
import Slider from '../Slider/Slider';
import style from './projects.module.css';

import calc from '../../assets/image/calculator.jpg';
import weather from '../../assets/image/weather.png';
import cinema from '../../assets/image/Cinema.jpg';
import todo from '../../assets/image/react_TODO.png';
import petShop from '../../assets/image/PetShop.png';
import slider from '../../assets/image/Slider.png';
import clothStore from '../../assets/image/clothing-store.png';
import computer from '../../assets/image/Computer.png';
import jsToDo from '../../assets/image/js_todo.png';
import news from '../../assets/image/news.png';
import samurai from '../../assets/image/samurai.png';
import JSONPlaceholder from '../../assets/image/JsonPlaceholder.png';

const projectList = [
  {
    id: 1,
    screenShot: calc,
    title: 'Calculator',
    url: 'https://beliy-beret.github.io/Calculator/',
  },
  {
    id: 2,
    screenShot: weather,
    title: 'Weather app',
    url: 'https://weather-app-mauve-pi.vercel.app/',
  },
  {
    id: 3,
    screenShot: cinema,
    title: 'Cinema',
    url: 'https://beliy-beret.github.io/Search_movies/',
  },
  {
    id: 4,
    screenShot: todo,
    title: 'React ToDo list',
    url: 'https://beliy-beret.github.io/DAO_Tech-test/',
  },
  {
    id: 5,
    screenShot: petShop,
    title: 'Pet shop',
    url: 'https://pet-shop-a5zi30f0r-beliy-beret.vercel.app/',
  },
  {
    id: 6,
    screenShot: slider,
    title: 'JS slider',
    url: 'https://beliy-beret.github.io/JS_Slider/',
  },
  {
    id: 7,
    screenShot: clothStore,
    title: 'Clothing store',
    url: 'https://artisant-test-qzbrl943q-beliy-beret.vercel.app/',
  },
  {
    id: 8,
    screenShot: computer,
    title: 'Computer courses',
    url: 'https://beliy-beret.github.io/Computer_course/',
  },
  {
    id: 9,
    screenShot: jsToDo,
    title: 'JavaScript ToDo list',
    url: 'https://beliy-beret.github.io/JS_ToDo/',
  },
  {
    id: 10,
    screenShot: news,
    title: 'News portal',
    url: 'https://beliy-beret.github.io/News/',
  },
  {
    id: 11,
    screenShot: samurai,
    title: 'Social network',
    url: 'https://github.com/beliy-beret/the_way_of_samurai/deployments/activity_log?environment=github-pages',
  },
  {
    id: 12,
    screenShot: JSONPlaceholder,
    title: 'JSONPlaceholder project',
    url: 'https://jsonp-laceholder-1cv36q6m9-beliy-beret.vercel.app/',
  },
];

const Projects = () => {
  const [activeSlide, setActiveSlide] = useState(2);
  const projectPerSlide = 3;
  const numberOfSlides = Math.ceil(projectList.length / projectPerSlide);
  const lastProjectIndex = activeSlide * projectPerSlide;
  const firstProjectIndex = lastProjectIndex - projectPerSlide;
  const currentProjectPortion = projectList.slice(firstProjectIndex, lastProjectIndex);

  const nextSlide = () => {
    if(activeSlide < numberOfSlides) {
      setActiveSlide(activeSlide + 1);
    }
  };
  const prevSlide = () => {
    if(activeSlide > 1) {
      setActiveSlide(activeSlide - 1);
    }
  };

  return(
    <section className={style.projects}>
      <h2>Мои работы:</h2>
      <Slider
        projects={currentProjectPortion}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
        slides={numberOfSlides}
        activeSlide={activeSlide}
      />
    </section>
  );
};

export default Projects;
