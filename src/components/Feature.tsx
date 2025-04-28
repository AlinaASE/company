import CheckIcon from "@mui/icons-material/Check";
function Feature() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center h-auto md:h-screen px-[4%] py-8 space-y-8 md:space-y-0">
      {/* Left Side */}
      <div className="w-full md:w-[65%] flex flex-col justify-center items-start space-y-4">
        <h1 className="text-[32px] md:text-[40px] font-bold">
          website development
        </h1>
        <p className="text-[14px] md:text-[16px]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
          modi impedit sapiente necessitatibus, culpa soluta illo saepe tempore
          aspernatur, similique consectetur amet praesentium, aperiam aliquam!
          Necessitatibus ad possimus sed dicta!
        </p>
        <p className="text-[14px] md:text-[16px]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
          modi impedit sapiente necessitatibus, culpa soluta illo saepe tempore
          aspernatur, similique consectetur amet praesentium, aperiam aliquam!
          Necessitatibus ad possimus sed dicta!
        </p>

        {/* Features List */}
        <div className="flex flex-col md:flex-row justify-center items-center py-4 w-full border-orange border-y-[1px] space-y-4 md:space-y-0">
          <div className="w-full md:w-1/2">
            <ul className="space-y-2">
              <li>
                <CheckIcon sx={{ color: "#FFAA17" }} /> Comprehensive Website
                Development
              </li>
              <li>
                <CheckIcon sx={{ color: "#FFAA17" }} /> Custom Web Design and
                Development
              </li>
              <li>
                <CheckIcon sx={{ color: "#FFAA17" }} /> E-commerce Solutions
              </li>
              <li>
                <CheckIcon sx={{ color: "#FFAA17" }} /> Content Management
                Systems (CMS)
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2">
            <ul className="space-y-2">
              <li>
                <CheckIcon sx={{ color: "#FFAA17" }} /> Comprehensive Website
                Development
              </li>
              <li>
                <CheckIcon sx={{ color: "#FFAA17" }} /> Custom Web Design and
                Development
              </li>
              <li>
                <CheckIcon sx={{ color: "#FFAA17" }} /> E-commerce Solutions
              </li>
              <li>
                <CheckIcon sx={{ color: "#FFAA17" }} /> Content Management
                Systems (CMS)
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Right Side (Card) */}
      <div className="w-full md:w-[30%] flex flex-col items-start border border-orange rounded-[12px] p-6 md:p-8 bg-gradient-to-b from-[#4A4B4F] to-[#000000]">
        <h1 className="text-xl md:text-2xl font-bold text-white mb-6">
          Feature
        </h1>
        <ul className="w-full space-y-4 text-white">
          <li className="flex items-center justify-start border-b border-orange pb-2">
            <CheckIcon
              sx={{ color: "#FFAA17", fontSize: 24 }}
              className="mr-2"
            />{" "}
            User Interface (UI) Design
          </li>
          <li className="flex items-center justify-start border-b border-orange pb-2">
            <CheckIcon
              sx={{ color: "#FFAA17", fontSize: 24 }}
              className="mr-2"
            />{" "}
            Functionality and Performance
          </li>
          <li className="flex items-center justify-start border-b border-orange pb-2">
            <CheckIcon
              sx={{ color: "#FFAA17", fontSize: 24 }}
              className="mr-2"
            />{" "}
            Scalability
          </li>
          <li className="flex items-center justify-start border-b border-orange pb-2">
            <CheckIcon
              sx={{ color: "#FFAA17", fontSize: 24 }}
              className="mr-2"
            />{" "}
            Security
          </li>
          <li className="flex items-center justify-start">
            <CheckIcon
              sx={{ color: "#FFAA17", fontSize: 24 }}
              className="mr-2"
            />{" "}
            Integration
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Feature;
