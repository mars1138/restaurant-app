import React, { useEffect } from 'react';

import Logo from './Logo';
import MainNav from '../layout/MainNav';
// import HeroVideo from '../layout/HeroVideo';
import classes from './HeaderNav.module.css';
import { Route } from 'react-router-dom';
import HeroVideo from '../layout/HeroVideo';
import HeroImage from '../layout/HeroImage';
import Hero from '../layout/Hero';

const HeaderNav = (props) => {
  useEffect(() => {
    // console.log(header);
    const nav = document.getElementById('stickyNav');
    // const navHeight = nav.getBoundingClientRect().height;
    const target = nav.parentElement.childNodes[1];

    const stickyNav = function (entries) {
      const [entry] = entries;

      if (!entry.isIntersecting) nav.classList.add('sticky');
      else nav.classList.remove('sticky');
    };

    const headerObserver = new IntersectionObserver(stickyNav, {
      root: null,
      threshold: 0.1,
      // rootMargin: `${navHeight}px`,
    });

    headerObserver.observe(target);
  }, []);

  // useEffect(() => {
  //   const nav = document.getElementById('stickyNav');
  //   const navHeight = nav.getBoundingClientRect().height;
  //   // console.log(nav);
  //   const target = nav.parentElement.childNodes[1];
  //   console.log('traget: ', target);
  //   const initialCoords = target.getBoundingClientRect();
  //   // console.log('Sticky Nav initial coords: ', initialCoords);
  //   // scroll event is not efficient, and usually should be avoided
  //   window.addEventListener('scroll', function () {
  //     console.log(window.scrollY);
  //     if (window.scrollY > initialCoords.bottom - navHeight)
  //       nav.classList.add('sticky');
  //     else nav.classList.remove('sticky');
  //   });
  // }, []);

  const headerClasses = `${classes.header}`;

  return (
    <React.Fragment>
      <header className={headerClasses}>
        <div className={classes.headerControl} id="stickyNav">
          <Logo />
          <h2 className={classes.title}>Ristorante San Giorgio</h2>
          <MainNav onShowCart={props.onShowCart} />
        </div>
        <Hero />
      </header>
    </React.Fragment>
  );
};

export default HeaderNav;
