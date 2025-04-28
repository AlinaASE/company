"use client"; // Gsap.js
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// GSAP plugin register
gsap.registerPlugin(ScrollTrigger);

function Gsap() {
  useEffect(() => {
    // 5 start
    gsap.to("#container5", {
      x: -125,
      scrollTrigger: {
        trigger: "#container5",
        start: "0% 95%",
        end: "0% 30%",
        scrub: true,
        markers: true,
      },
    });
    gsap.to("#containerD5", {
      x: 125,
      scrollTrigger: {
        trigger: "#containerD5",
        start: "0% 95%",
        end: "0% 30%",
        scrub: true,
        markers: true,
      },
    });
    //5 end
    // 4 start
    gsap.to("#container4", {
      x: -243,
      scrollTrigger: {
        trigger: "#container4",
        start: "0% 95%",
        end: "0% 30%",
        scrub: true,
        markers: true,
      },
    });
    gsap.to("#containerD4", {
      x: 243,
      scrollTrigger: {
        trigger: "#containerD4",
        start: "0% 95%",
        end: "0% 30%",
        scrub: true,
        markers: true,
      },
    });
    //4 end
    // 3 start
    gsap.to("#container3", {
      x: -347,
      scrollTrigger: {
        trigger: "#container3",
        start: "0% 95%",
        end: "0% 30%",
        scrub: true,
        markers: true,
      },
    });
    gsap.to("#containerD3", {
      x: 347,
      scrollTrigger: {
        trigger: "#containerD3",
        start: "0% 95%",
        end: "0% 30%",
        scrub: true,
        markers: true,
      },
    });
    //3 end
    // 2 start
        gsap.to("#container2", {
          x: -437,
          opacity: 0.5,
          scrollTrigger: {
            trigger: "#container2",
            start: "0% 95%",
            end: "0% 30%",
            scrub: true,
            markers: true,
          },
        });
        gsap.to("#containerD2", {
          x: 437,
          opacity: 0.5,
          scrollTrigger: {
            trigger: "#containerD2",
            start: "0% 95%",
            end: "0% 30%",
            scrub: true,
            markers: true,
          },
        });
    //2 end
    // 1 start
        gsap.to("#container1", {
          x: -517,
          scrollTrigger: {
            trigger: "#container1",
            start: "0% 95%",
            end: "0% 30%",
            scrub: true,
            markers: true,
          },
        });
        gsap.to("#containerD1", {
          x: 517,
          scrollTrigger: {
            trigger: "#containerD1",
            start: "0% 95%",
            end: "0% 30%",
            scrub: true,
            markers: true,
          },
        });
    //1 end
  }, []);

  return (
    <div className="flex  justify-center items-center min-h-screen  gap-2  overflow-hidden">
      {/* 1 */}
      <div id="container1" className="absolute flex flex-col gap-2">
        <div className="h-[76px] w-[65px] bg-red-500 flex justify-center items-center text-white rounded-[7px]">
          hello
        </div>
        <div className="h-[76px] w-[65px] bg-blue-500 flex justify-center items-center text-white rounded-[7px]">
          hello
        </div>
        <div className="h-[76px] w-[65px] bg-green-500 flex justify-center items-center text-white rounded-[7px]">
          hello
        </div>
      </div>
      {/* 2 */}
      <div id="container2" className="absolute flex flex-col gap-2">
        <div className="h-[95px] w-[75px] bg-red-500 flex justify-center items-center text-white rounded-[7px]">
          hello
        </div>
        <div className="h-[95px] w-[75px] bg-blue-500 flex justify-center items-center text-white rounded-[7px]">
          hello
        </div>
        <div className="h-[95px] w-[75px] bg-green-500 flex justify-center items-center text-white rounded-[7px]">
          hello
        </div>
      </div>
      {/* 3 */}
      <div id="container3" className="absolute flex flex-col gap-2">
        <div className="h-[112px] w-[85px] bg-red-500 flex justify-center items-center text-white rounded-[7px]">
          hello
        </div>
        <div className="h-[112px] w-[85px] bg-blue-500 flex justify-center items-center text-white rounded-[7px]">
          hello
        </div>
        <div className="h-[112px] w-[85px] bg-green-500 flex justify-center items-center text-white rounded-[7px]">
          hello
        </div>
      </div>
      {/* 4 */}
      <div id="container4" className="absolute flex flex-col gap-2">
        <div className="h-[128px] w-[105px] bg-red-500 flex justify-center items-center text-white rounded-[7px]">
          hello
        </div>
        <div className="h-[128px] w-[105px] bg-blue-500 flex justify-center items-center text-white rounded-[7px]">
          hello
        </div>
        <div className="h-[128px] w-[105px] bg-green-500 flex justify-center items-center text-white rounded-[7px]">
          hello
        </div>
      </div>
      {/* 5 */}
      <div id="container5" className="absolute flex flex-col gap-2">
        <div className="h-[142px] w-[113px] bg-red-500 flex justify-center items-center text-white rounded-[7px]">
          hello
        </div>
        <div className="h-[142px] w-[113px] bg-blue-500 flex justify-center items-center text-white rounded-[7px]">
          hello
        </div>
        <div className="h-[142px] w-[113px] bg-green-500 flex justify-center items-center text-white rounded-[7px]">
          hello
        </div>
      </div>
      {/* 6 */}
      <div className="absolute flex flex-col gap-2 z-[40]">
        <div className="h-[155px] w-[120px] bg-red-500 flex justify-center items-center text-white rounded-[7px]">
          hello
        </div>
        <div className="h-[155px] w-[120px] bg-blue-500 flex justify-center items-center text-white rounded-[7px]">
          hello
        </div>
        <div className="h-[155px] w-[120px] bg-green-500 flex justify-center items-center text-white rounded-[7px]">
          hello
        </div>
      </div>
      {/* 5 */}
      <div id="containerD5" className="absolute flex flex-col gap-2">
        <div className="h-[142px] w-[113px] bg-red-500 flex justify-center items-center text-white rounded-[7px]">
          hello
        </div>
        <div className="h-[142px] w-[113px] bg-blue-500 flex justify-center items-center text-white rounded-[7px]">
          hello
        </div>
        <div className="h-[142px] w-[113px] bg-green-500 flex justify-center items-center text-white rounded-[7px]">
          hello
        </div>
      </div>
      {/* 4 */}
      <div id="containerD4" className="absolute flex flex-col gap-2">
        <div className="h-[128px] w-[105px] bg-red-500 flex justify-center items-center text-white rounded-[7px]">
          hello
        </div>
        <div className="h-[128px] w-[105px] bg-blue-500 flex justify-center items-center text-white rounded-[7px]">
          hello
        </div>
        <div className="h-[128px] w-[105px] bg-green-500 flex justify-center items-center text-white rounded-[7px]">
          hello
        </div>
      </div>
      {/* 3 */}
      <div id="containerD3" className="absolute flex flex-col gap-2">
        <div className="h-[112px] w-[85px] bg-red-500 flex justify-center items-center text-white rounded-[7px]">
          hello
        </div>
        <div className="h-[112px] w-[85px] bg-blue-500 flex justify-center items-center text-white rounded-[7px]">
          hello
        </div>
        <div className="h-[112px] w-[85px] bg-green-500 flex justify-center items-center text-white rounded-[7px]">
          hello
        </div>
      </div>
      {/* 2 */}
      <div id="containerD2" className="absolute flex flex-col gap-2">
        <div className="h-[95px] w-[75px] bg-red-500 flex justify-center items-center text-white rounded-[7px]">
          hello
        </div>
        <div className="h-[95px] w-[75px] bg-blue-500 flex justify-center items-center text-white rounded-[7px]">
          hello
        </div>
        <div className="h-[95px] w-[75px] bg-green-500 flex justify-center items-center text-white rounded-[7px]">
          hello
        </div>
      </div>
      {/* 1 */}
      <div id="containerD1" className="absolute flex flex-col gap-2">
        <div className="h-[76px] w-[65px] bg-red-500 flex justify-center items-center text-white rounded-[7px]">
          hello
        </div>
        <div className="h-[76px] w-[65px] bg-blue-500 flex justify-center items-center text-white rounded-[7px]">
          hello
        </div>
        <div className="h-[76px] w-[65px] bg-green-500 flex justify-center items-center text-white rounded-[7px]">
          hello
        </div>
      </div>
    </div>
  );
}

export default Gsap;
