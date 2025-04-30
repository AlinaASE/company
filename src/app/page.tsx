import { TeamMembers } from "@/utils";
import { ServicesData } from "@/service";
import Image from "next/image";
import Link from "next/link";
import HowWork from "@/components/HowWork";
import ProjectShow from "@/components/ProjectShow";

export default function Home() {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center min-h-screen gap-6 p-4 dark:bg-primaryD bg-primary">
        {TeamMembers.map((member, index) => (
          <div
            key={index}
            className="border border-customOrange rounded-[12px] p-1"
          >
            <div
              className="relative w-[330px] h-[330px] rounded-xl overflow-hidden bg-cover bg-center"
              style={{ backgroundImage: "url(/teamBackgroung.png)" }}
            >
              <Image
                src={member.image}
                alt={member.name}
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[170px] h-[170px] rounded-full object-cover"
              />
            </div>
            <div className="w-full text-center px-4 mt-2">
              <h2 className="text-2xl font-bold text-customOrange">
                {member.name}
              </h2>
              <p className="text-white font-semibold mt-1">{member.role}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-6 items-stretch dark:bg-primaryD bg-primary">
        {ServicesData.map((service, index) => (
          <div
            key={index}
            className="w-[330px] p-6 rounded-xl border border-customOrange flex flex-col justify-between bg-gradientCard dark:bg-gradientCardD"
          >
            <div>
              <div className="flex items-center mb-4">
                <div className="text-4xl">{service.icon}</div>
              </div>
              <h2 className="text-2xl font-semibold mb-4">{service.heading}</h2>
              <p className="text-gray-300 mb-6">{service.FD}</p>
            </div>
            <div className="flex justify-start">
              <Link href={`/details/${service.id}`}>Learn More</Link>
            </div>
          </div>
        ))}
      </div>
      <ProjectShow />

      <HowWork />
    </>
  );
}
