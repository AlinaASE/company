"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

import Project from '../app/assets/timeline.png'

gsap.registerPlugin(ScrollTrigger);

function ProjectShow() {
  useEffect(() => {
    const getXValueForContainer = (containerId: string | number) => {
      if (window.innerWidth <= 1024) {
        // For mobile screens, subtract 40 from the original x values
        if (containerId === "container5") return -125 + 43;
        if (containerId === "containerD5") return 125 - 43;
        if (containerId === "container4") return -243 + 88;
        if (containerId === "containerD4") return 243 - 88;
        if (containerId === "container3") return -347 + 133;
        if (containerId === "containerD3") return 347 - 133;
        if (containerId === "container2") return -437 + 177;
        if (containerId === "containerD2") return 437 - 177;
        if (containerId === "container1") return -517 + 223;
        if (containerId === "containerD1") return 517 - 223;
      }
      if (containerId === "container5") return -125;
      if (containerId === "containerD5") return 125;
      if (containerId === "container4") return -243;
      if (containerId === "containerD4") return 243;
      if (containerId === "container3") return -347;
      if (containerId === "containerD3") return 347;
      if (containerId === "container2") return -437;
      if (containerId === "containerD2") return 437;
      if (containerId === "container1") return -517;
      if (containerId === "containerD1") return 517;
    };

    // 5 start
    gsap.to("#container5", {
      x: getXValueForContainer("container5"),
      scrollTrigger: {
        trigger: "#container5",
        start: "0% 95%",
        end: "0% 30%",
        scrub: true,
      },
    });
    gsap.to("#containerD5", {
      x: getXValueForContainer("containerD5"),
      scrollTrigger: {
        trigger: "#containerD5",
        start: "0% 95%",
        end: "0% 30%",
        scrub: true,
      },
    });
    //5 end
    // 4 start
    gsap.to("#container4", {
      x: getXValueForContainer("container4"),
      scrollTrigger: {
        trigger: "#container4",
        start: "0% 95%",
        end: "0% 30%",
        scrub: true,
      },
    });
    gsap.to("#containerD4", {
      x: getXValueForContainer("containerD4"),
      scrollTrigger: {
        trigger: "#containerD4",
        start: "0% 95%",
        end: "0% 30%",
        scrub: true,
      },
    });
    //4 end
    // 3 start
    gsap.to("#container3", {
      x: getXValueForContainer("container3"),
      scrollTrigger: {
        trigger: "#container3",
        start: "0% 95%",
        end: "0% 30%",
        scrub: true,
      },
    });
    gsap.to("#containerD3", {
      x: getXValueForContainer("containerD3"),
      scrollTrigger: {
        trigger: "#containerD3",
        start: "0% 95%",
        end: "0% 30%",
        scrub: true,
      },
    });
    //3 end
    // 2 start
    gsap.to("#container2", {
      x: getXValueForContainer("container2"),
      scrollTrigger: {
        trigger: "#container2",
        start: "0% 95%",
        end: "0% 30%",
        scrub: true,
      },
    });
    gsap.to("#containerD2", {
      x: getXValueForContainer("containerD2"),
      scrollTrigger: {
        trigger: "#containerD2",
        start: "0% 95%",
        end: "0% 30%",
        scrub: true,
      },
    });
    //2 end
    // 1 start
    gsap.to("#container1", {
      x: getXValueForContainer("container1"),
      scrollTrigger: {
        trigger: "#container1",
        start: "0% 95%",
        end: "0% 30%",
        scrub: true,
      },
    });
    gsap.to("#containerD1", {
      x: getXValueForContainer("containerD1"),
      scrollTrigger: {
        trigger: "#containerD1",
        start: "0% 95%",
        end: "0% 30%",
        scrub: true,
      },
    });
    //1 end
  }, []);

  return (
    <div className="dark:bg-primaryD bg-primary relative flex justify-center items-center min-h-screen gap-2 overflow-hidden max-w-[380px] sm:max-w-[1600px]">
      {/* 1 */}
      <div id="container1" className="absolute flex flex-col gap-2">
        <div className="h-[26px] w-[25px] lg:h-[76px] lg:w-[65px]  flex justify-center items-center  rounded-[7px]">
          <Image
            src={Project}
            alt="timeline"
            className="h-full w-full object-cover rounded-md"
          />
        </div>
        <div className="h-[26px] w-[25px] lg:h-[76px] lg:w-[65px]  flex justify-center items-center  rounded-[7px]">
          <Image
            src={Project}
            alt="timeline"
            className="h-full w-full object-cover rounded-md"
          />
        </div>
        <div className="h-[26px] w-[25px] lg:h-[76px] lg:w-[65px]  flex justify-center items-center  rounded-[7px]">
          <Image
            src={Project}
            alt="timeline"
            className="h-full w-full object-cover rounded-md"
          />
        </div>
      </div>
      {/* 2 */}
      <div id="container2" className="absolute flex flex-col gap-2">
        <div className="h-[45px] w-[35px] lg:h-[95px] lg:w-[75px]  flex justify-center items-center  rounded-[7px]">
          <Image
            src={Project}
            alt="timeline"
            className="h-full w-full object-cover rounded-md"
          />
        </div>
        <div className="h-[45px] w-[35px] lg:h-[95px] lg:w-[75px]  flex justify-center items-center  rounded-[7px]">
          <Image
            src={Project}
            alt="timeline"
            className="h-full w-full object-cover rounded-md"
          />
        </div>
        <div className="h-[45px] w-[35px] lg:h-[95px] lg:w-[75px]  flex justify-center items-center  rounded-[7px]">
          <Image
            src={Project}
            alt="timeline"
            className="h-full w-full object-cover rounded-md  rounded-[7px]"
          />
        </div>
      </div>
      {/* 3 */}
      <div id="container3" className="absolute flex flex-col gap-2">
        <div className="h-[62px] w-[45px] lg:h-[112px] lg:w-[85px]  flex justify-center items-center  rounded-[7px]">
          <Image
            src={Project}
            alt="timeline"
            className="h-full w-full object-cover rounded-md"
          />
        </div>
        <div className="h-[62px] w-[45px] lg:h-[112px] lg:w-[85px]  flex justify-center items-center  rounded-[7px]">
          <Image
            src={Project}
            alt="timeline"
            className="h-full w-full object-cover rounded-md"
          />
        </div>
        <div className="h-[62px] w-[45px] lg:h-[112px] lg:w-[85px]  flex justify-center items-center  rounded-[7px]">
          <Image
            src={Project}
            alt="timeline"
            className="h-full w-full object-cover rounded-md"
          />
        </div>
      </div>
      {/* 4 */}
      <div id="container4" className="absolute flex flex-col gap-2">
        <div className="h-[78px] w-[65px] lg:h-[128px] lg:w-[105px]  flex justify-center items-center  rounded-[7px]">
          <Image
            src={Project}
            alt="timeline"
            className="h-full w-full object-cover rounded-md"
          />
        </div>
        <div className="h-[78px] w-[65px] lg:h-[128px] lg:w-[105px]  flex justify-center items-center  rounded-[7px]">
          <Image
            src={Project}
            alt="timeline"
            className="h-full w-full object-cover rounded-md"
          />
        </div>
        <div className="h-[78px] w-[65px] lg:h-[128px] lg:w-[105px]  flex justify-center items-center  rounded-[7px]">
          <Image
            src={Project}
            alt="timeline"
            className="h-full w-full object-cover rounded-md"
          />
        </div>
      </div>
      {/* 5 */}
      <div id="container5" className="absolute flex flex-col gap-2">
        <div className="h-[92px] w-[73px] lg:h-[142px] lg:w-[113px]  flex justify-center items-center  rounded-[7px]">
          <Image
            src={Project}
            alt="timeline"
            className="h-full w-full object-cover rounded-md"
          />
        </div>
        <div className="h-[92px] w-[73px] lg:h-[142px] lg:w-[113px]  flex justify-center items-center  rounded-[7px]">
          <Image
            src={Project}
            alt="timeline"
            className="h-full w-full object-cover rounded-md"
          />
        </div>
        <div className="h-[92px] w-[73px] lg:h-[142px] lg:w-[113px]  flex justify-center items-center  rounded-[7px]">
          <Image
            src={Project}
            alt="timeline"
            className="h-full w-full object-cover rounded-md"
          />
        </div>
      </div>
      {/* 6 */}
      <div className="absolute flex flex-col gap-2 z-[40]">
        <div className="h-[105px] w-[80px] lg:h-[155px] lg:w-[120px]  flex justify-center items-center  rounded-[7px]">
          <Image
            src={Project}
            alt="timeline"
            className="h-full w-full object-cover rounded-md"
          />
        </div>
        <div className="h-[105px] w-[80px] lg:h-[155px] lg:w-[120px]  flex justify-center items-center  rounded-[7px]">
          <Image
            src={Project}
            alt="timeline"
            className="h-full w-full object-cover rounded-md"
          />
        </div>
        <div className="h-[105px] w-[80px] lg:h-[155px] lg:w-[120px]  flex justify-center items-center  rounded-[7px]">
          <Image
            src={Project}
            alt="timeline"
            className="h-full w-full object-cover rounded-md"
          />
        </div>
      </div>
      {/* D5 */}
      <div id="containerD5" className="absolute flex flex-col gap-2">
        <div className="h-[92px] w-[73px] lg:h-[142px] lg:w-[113px]  flex justify-center items-center  rounded-[7px]">
          <Image
            src={Project}
            alt="timeline"
            className="h-full w-full object-cover rounded-md"
          />
        </div>
        <div className="h-[92px] w-[73px] lg:h-[142px] lg:w-[113px]  flex justify-center items-center  rounded-[7px]">
          <Image
            src={Project}
            alt="timeline"
            className="h-full w-full object-cover rounded-md"
          />
        </div>
        <div className="h-[92px] w-[73px] lg:h-[142px] lg:w-[113px]  flex justify-center items-center  rounded-[7px]">
          <Image
            src={Project}
            alt="timeline"
            className="h-full w-full object-cover rounded-md"
          />
        </div>
      </div>
      {/* D4 */}
      <div id="containerD4" className="absolute flex flex-col gap-2">
        <div className="h-[78px] w-[65px] lg:h-[128px] lg:w-[105px]  flex justify-center items-center  rounded-[7px]">
          <Image
            src={Project}
            alt="timeline"
            className="h-full w-full object-cover rounded-md"
          />
        </div>
        <div className="h-[78px] w-[65px] lg:h-[128px] lg:w-[105px]  flex justify-center items-center  rounded-[7px]">
          <Image
            src={Project}
            alt="timeline"
            className="h-full w-full object-cover rounded-md"
          />
        </div>
        <div className="h-[78px] w-[65px] lg:h-[128px] lg:w-[105px]  flex justify-center items-center  rounded-[7px]">
          <Image
            src={Project}
            alt="timeline"
            className="h-full w-full object-cover rounded-md"
          />
        </div>
      </div>
      {/* D3 */}
      <div id="containerD3" className="absolute flex flex-col gap-2">
        <div className="h-[62px] w-[45px] lg:h-[112px] lg:w-[85px]  flex justify-center items-center  rounded-[7px]">
          <Image
            src={Project}
            alt="timeline"
            className="h-full w-full object-cover rounded-md"
          />
        </div>
        <div className="h-[62px] w-[45px] lg:h-[112px] lg:w-[85px]  flex justify-center items-center  rounded-[7px]">
          <Image
            src={Project}
            alt="timeline"
            className="h-full w-full object-cover rounded-md"
          />
        </div>
        <div className="h-[62px] w-[45px] lg:h-[112px] lg:w-[85px]  flex justify-center items-center  rounded-[7px]">
          <Image
            src={Project}
            alt="timeline"
            className="h-full w-full object-cover rounded-md"
          />
        </div>
      </div>
      {/* D2 */}
      <div id="containerD2" className="absolute flex flex-col gap-2">
        <div className="h-[45px] w-[35px] lg:h-[95px] lg:w-[75px]  flex justify-center items-center  rounded-[7px]">
          <Image
            src={Project}
            alt="timeline"
            className="h-full w-full object-cover rounded-md"
          />
        </div>
        <div className="h-[45px] w-[35px] lg:h-[95px] lg:w-[75px]  flex justify-center items-center  rounded-[7px]">
          <Image
            src={Project}
            alt="timeline"
            className="h-full w-full object-cover rounded-md"
          />
        </div>
        <div className="h-[45px] w-[35px] lg:h-[95px] lg:w-[75px]  flex justify-center items-center  rounded-[7px]">
          <Image
            src={Project}
            alt="timeline"
            className="h-full w-full object-cover rounded-md"
          />
        </div>
      </div>
      {/* D1 */}
      <div id="containerD1" className="absolute flex flex-col gap-2">
        <div className="h-[26px] w-[25px] lg:h-[76px] lg:w-[65px]  flex justify-center items-center  rounded-[7px]">
          <Image
            src={Project}
            alt="timeline"
            className="h-full w-full object-cover rounded-md"
          />
        </div>
        <div className="h-[26px] w-[25px] lg:h-[76px] lg:w-[65px]  flex justify-center items-center  rounded-[7px]">
          <Image
            src={Project}
            alt="timeline"
            className="h-full w-full object-cover rounded-md"
          />
        </div>
        <div className="h-[26px] w-[25px] lg:h-[76px] lg:w-[65px]  flex justify-center items-center  rounded-[7px]">
          <Image
            src={Project}
            alt="timeline"
            className="h-full w-full object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectShow;
