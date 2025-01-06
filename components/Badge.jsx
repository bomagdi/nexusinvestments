"use client";

import CountUp from "react-countup";


const Badge = ({ icon, endCountNum, endCountText, badgeText }) => {
  return <div className={`badge flex flex-col justify-center items-center gap-y-5`}>
    <div className="text-6xl text-primary">{icon}</div>
    <div className="flex flex-col items-center gap-y-2">
      <div className="text-5xl leading-none font-bold text-black">
        <CountUp end={endCountNum} delay={1} duration={3} />
        {endCountText}
      </div>
      <div className="max-w- leading-none text-[15px] font-medium text-muted-foreground">{badgeText}</div>
    </div>
  </div>;
};

export default Badge;