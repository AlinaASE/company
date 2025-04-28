"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Feature from "@/components/Feature";
import HowWork from "@/components/HowWork";
import { ServicesData } from "@/service";

const DetailsService = () => {
  const { id } = useParams();

  const service = ServicesData.find((item) => item.id.toString() === id);
console.log(service, "service");
  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center h-auto md:h-screen px-[4%] py-8">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start md:items-start space-y-4">
          <h3 className="text-[14px] text-orange font-bold">
            {service.heading}
          </h3>
          <h1 className="text-[24px] lg:text-[35px] leading-[29px] lg:leading-[39px] font-bold">
            {service.FD}
          </h1>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
          <Image
            src={service.image}
            alt="Description of image"
            width={500}
            height={300}
          />
        </div>
      </div>

      <Feature />
      <HowWork />
    </>
  );
};

export default DetailsService;
