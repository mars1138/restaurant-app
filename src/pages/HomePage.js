import { useEffect } from 'react';

const HomePage = () => {
  useEffect(() => {
    console.log('Home');
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque
        voluptatum est quam dolores vel, sit accusamus id harum facilis eveniet
        nulla quis asperiores eius minus inventore, doloribus necessitatibus
        fugit.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque
        voluptatum est quam dolores vel, sit accusamus id harum facilis eveniet
        nulla quis asperiores eius minus inventore, doloribus necessitatibus
        fugit.
      </p>
    </div>
  );
};

export default HomePage;
