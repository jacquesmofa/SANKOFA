import { useState, useEffect } from "react";

interface CountdownProps {
  targetDate: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(targetDate: Date): TimeLeft {
  const difference = targetDate.getTime() - new Date().getTime();
  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="glass-card px-3 py-3 md:px-5 md:py-4 text-center min-w-[70px] md:min-w-[90px]">
      <div className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold text-primary-400 leading-none">
        {String(value).padStart(2, "0")}
      </div>
      <div className="font-label text-[10px] md:text-xs uppercase tracking-widest text-foreground-600 mt-2">
        {label}
      </div>
    </div>
  );
}

export default function CountdownTimer({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <CountdownUnit value={timeLeft.days} label="Days" />
      <span className="text-primary-500 text-xl md:text-3xl font-heading">:</span>
      <CountdownUnit value={timeLeft.hours} label="Hours" />
      <span className="text-primary-500 text-xl md:text-3xl font-heading">:</span>
      <CountdownUnit value={timeLeft.minutes} label="Minutes" />
      <span className="text-primary-500 text-xl md:text-3xl font-heading">:</span>
      <CountdownUnit value={timeLeft.seconds} label="Seconds" />
    </div>
  );
}