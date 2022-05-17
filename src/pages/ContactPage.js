import React, { useEffect } from 'react';

import Section from '../components/layout/Section';
import HeroImage from '../components/layout/HeroImage';
import Contact from '../components/contact/Contact';
import Map from '../components/contact/Map';

const ContactPage = () => {
  useEffect(() => {
    console.log('Contact');
  }, []);

  return (
    <React.Fragment>
      <Section containerClass="container-image">
        <HeroImage />
      </Section>

      <Section containerClass="flex-column">
        <h2>Contact Us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          fuga dolores nihil! Consequatur ratione corporis nobis deleniti
          tempora dolor ex sit. Voluptas mollitia ea ducimus explicabo
          repellendus incidunt possimus veritatis?
        </p>
      </Section>

      <Section sectionClass="bg-awhite">
        <Contact />
      </Section>

      <Section>
        <Map />
      </Section>
    </React.Fragment>
  );
};

export default ContactPage;
