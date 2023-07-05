import React, { useEffect, useState } from 'react';

const MyComponent = () => {
  const [screenHeight, setScreenHeight] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  console.log(screenHeight)
  
};

export default MyComponent;
