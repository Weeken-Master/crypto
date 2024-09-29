"use client";

import { useState, useEffect } from "react";

interface CountdownProps {
  targetDate: string; // Ví dụ: "2024-12-31T00:00:00"
}

const Countdown = ({ targetDate }: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    finished: boolean;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    finished: false,
  });

  useEffect(() => {
    // Hàm tính toán thời gian còn lại
    const calculateTimeLeft = () => {
      const targetTime = new Date(targetDate).getTime(); // Chuyển targetDate sang milliseconds
      const now = new Date().getTime(); // Thời gian hiện tại tính bằng milliseconds
      const difference = targetTime - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
          finished: false,
        });
      } else {
        // Đặt finished thành true khi đếm ngược kết thúc
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          finished: true,
        });
        // Dừng interval khi đếm ngược kết thúc
        clearInterval(timer);
      }
    };

    // Gọi hàm tính toán ngay lập tức
    calculateTimeLeft();

    // Cập nhật mỗi giây
    const timer = setInterval(calculateTimeLeft, 1000);

    // Xóa interval khi component bị unmount
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="countdown">
      {timeLeft.finished ? (
        <span>Kết thúc</span>
      ) : (
        <span>
          {`${timeLeft.days}d : ${timeLeft.hours}h : ${timeLeft.minutes}m : ${timeLeft.seconds}s`}
        </span>
      )}
    </div>
  );
};

export default Countdown;
