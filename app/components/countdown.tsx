"use client"
import { useState, useEffect } from "react";

// Define the props type for the countdown component
interface CountdownProps {
  targetDate: string; // Target date in string format, e.g., "2024-12-31T00:00:00"
}

const Countdown = ({ targetDate }: CountdownProps) => {
  // State to store the remaining time
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Function to calculate the remaining time
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        // Set to 0 when countdown finishes
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="text-gray-950 ">
     {`${timeLeft.days}d : ${timeLeft.hours}h : ${timeLeft.minutes}m : ${timeLeft.seconds}s`}
    </div>
  );
};

export default Countdown;
