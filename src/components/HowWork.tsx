import React from "react";

const steps = [
  {
    title: "Free Consultations",
    description:
      "We offer free consultations to tailor digital solutions that fit your unique needs and goals.",
    button: "Chat Now",
    icon: "💬",
  },
  {
    title: "Discover the product",
    description:
      "Transforms your vision into reality with innovative solutions and exceptional results.",
    button: "Learn More",
    icon: "🖥️",
  },
  {
    title: "Wireframe & Production",
    description:
      "Turning concepts into reality with precise planning and expert execution.",
    button: "Learn More",
    icon: "📐",
  },
  {
    title: "Prototype Application",
    description:
      "Bringing your ideas to life with interactive models that refine and validate your vision.",
    button: "Report",
    icon: "🧩",
  },
];

const HowItWorks = () => {
  return (
    <div>
      <div className="text-center pb-[40px] dark:bg-primaryD bg-primary">
        <h4 className="text-customOrange font-semibold mb-2">HOW IT WORKS</h4>
        <h2 className="text-[24px] lg:text-[39px] font-bold w-[80%] lg:w-[60%] mx-auto pb-4">
          Unlock Astonishing Results with Just 3 Simple Steps!
        </h2>
      </div>

      <div className="dark:bg-primaryD bg-primary grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0  px-[6%] space-x-2 pb-[20px]">
        {steps.map((step, index) => (
          <div
            key={index}
            className="min-h-[300px] flex flex-col justify-center items-center border border-customOrange lg:border-0 lg:border-r lg:border-customOrange last:lg:border-r-0 text-center p-[25px] rounded-[20px] lg:rounded-none mb-2 lg:mb-0"
          >
            <div className="flex justify-center mb-[14px]">
              <div className="bg-customOrange rounded-full w-16 h-16 flex items-center justify-center ">
                {step.icon}
              </div>
            </div>
            <h3 className="text-xl mb-[7px]">{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
