import React from 'react';

import image1 from '../../assets/menu/pexels-darya-sheydel-10456297.jpg';
import classes from './OrderOnline.module.css';

const FeaturedDishes = () => {
  return (
    <React.Fragment>
      <div className="container-text container-text-50 flex-column">
        <h2>Order Online</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque
          voluptatum est quam dolores vel, sit accusamus id harum facilis
          eveniet nulla quis asperiores eius minus inventore, doloribus
          necessitatibus fugit.
        </p>
      </div>
      <div className={classes.featured}>
        <div className={classes.mainImage}>
          <img src={image1} alt="featured" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default FeaturedDishes;
