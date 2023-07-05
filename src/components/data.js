// Set the countdown date and time (YYYY-MM-DD HH:MM:SS format)
const countdownDate = new Date('2033-12-31 18:30:00').getTime();

// Update the countdown every second
const countdownTimer = setInterval(() => {
  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the time remaining
  const timeRemaining = countdownDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Display the countdown in the console or update the DOM with the values
var data=[
    {
    "id":1,
    "day":days,
    "time":"DAYS"
    },
    {
    "id":2,
    "day":hours,
    "time":"HOURS"
    },
    {
    "id":3,
    "day":minutes,
    "time":"MINUTES"
    },
    {
    "id":4,
    "day":seconds,
    "time":"SECONDS"
    }
]

  // Check if the countdown has finished
  if (timeRemaining < 0) {
    clearInterval(countdownTimer);
    console.log('Countdown has ended!');
  }
  
}, 1000); // Update every second (1000 milliseconds)


