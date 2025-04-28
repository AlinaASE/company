"use client";
import { useEffect } from "react";

const ScrollWave = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      const topValue = 100 - scrollPercent * 100;

      const wave1 = document.querySelector(".wave1") as HTMLElement;
      const wave2 = document.querySelector(".wave2") as HTMLElement;
      const wave3 = document.querySelector(".wave3") as HTMLElement;

      if (wave1 && wave2 && wave3) {
        wave1.style.top = `${topValue}%`;
        wave2.style.top = `${topValue + 5}%`;
        wave3.style.top = `${topValue + 10}%`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const ArrowUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="fixed bottom-12 sm:bottom-4 right-4 w-16 h-16 rounded-full overflow-hidden z-[11000] bg-tertiaryClr cursor-pointer"
      onClick={ArrowUp}
      title="Back to Top"
    >
      <div className="wave1 absolute left-[-25%] w-[200%] h-[200%] rounded-[40%]  bg-[#FFAA17] animate-wave1"></div>
      <div className="wave2 absolute left-[-25%] w-[200%] h-[200%] rounded-[35%]  bg-[#FFAA17] animate-wave2"></div>
      <div className="wave3 absolute left-[-25%] w-[200%] h-[200%] rounded-[33%]  bg-[#FFAA17] animate-wave3"></div>
    </div>
  );
};

export default ScrollWave;
