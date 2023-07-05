import React from 'react';
import Time from './components/Time';
import Header from "./components/Header"
import Footer from './components/Footer';
import MyComponent from './components/MyComponent';
import "./App.css"
const App = () => {
  const countdownDate = new Date('2033-12-31 18:30:00').getTime();
  const [countdown, setCountdown] = React.useState([]);

  React.useEffect(() => {
    const countdownTimer = setInterval(() => {
      const now = new Date().getTime();
      const timeRemaining = countdownDate - now;

      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      const data = [
        {
          id: 1,
          day: days,
          time: 'DAYS',
        },
        {
          id: 2,
          day: hours,
          time: 'HOURS',
        },
        {
          id: 3,
          day: minutes,
          time: 'MINUTES',
        },
        {
          id: 4,
          day: seconds,
          time: 'SECONDS',
        },
      ];

      setCountdown(data);

      if (timeRemaining < 0) {
        clearInterval(countdownTimer);
        console.log('Countdown has ended!');
      }
    }, 1000);

    return () => {
      clearInterval(countdownTimer);
    };
  }, [countdownDate]);

  return (
    <div className='inner'> 
    <div><Header/></div>
      
    <div className='main'>
      
      {countdown.map((item) => (
        
        <Time key={item.id}
          day={item.day} time={item.time}
        />
      ))}
    </div>
    <Footer/>
    
    
    </div>
  );
};

export default App;
