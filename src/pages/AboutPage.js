import React, {useState, useContext, useEffect} from 'react';

import Section from '../components/layout/Section';
import Gallery from '../components/layout/Gallery';
import History from '../components/layout/History';
import FeaturedChef from '../components/about/FeaturedChef';

import CartContext from '../components/store/cart-context';


const About = (props) => {
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

      <Section sectionClass="bg-awhite">
        <FeaturedChef />
      </Section>

      <Section>
        <Gallery />
      </Section>
    </React.Fragment>
  );
};

export default About;
