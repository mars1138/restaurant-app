import React, { useEffect, useContext, useState } from 'react';

import Section from '../components/layout/Section';
import History from '../components/layout/History';
import FeaturedDishes from '../components/home/FeaturedDishes';
import Locations from '../components/home/Locations';

import CartContext from '../components/store/cart-context';

const HomePage = (props) => {
  const [cartReloaded, setCartReloaded] = useState(false);
  const cartCtx = useContext(CartContext);

  const { addItem, items } = cartCtx;

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem('items'));
    if (!cartReloaded && items.length === 0 && savedItems.length > 0) {
      savedItems.forEach((item) => addItem(item));
    }
  }, [addItem, cartReloaded, items.length]);

  useEffect(() => {
    setCartReloaded(true);
  }, [setCartReloaded]);

  return (
    <React.Fragment>
      <Section>
        <History />
      </Section>

      <Section sectionClass="bg-awhite" containerClass="flex-column">
        <FeaturedDishes featured={props.featured} />
      </Section>

      <Section>
        <Locations />
      </Section>
    </React.Fragment>
  );
};

export default HomePage;
