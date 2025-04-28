import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Aziz from "./app/assets/abdulaziz.jpeg";

const Link_Header = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Services",
    url: "/service",
  },
  {
    name: "Out Team",
    url: "/team",
  },
  {
    name: "Contact",
    url: "/contact",
  },
];

const Link_Social = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/yourcompany",
    icon: <LinkedInIcon sx={{ color: "#FFAA17" }} />,
  },
  {
    name: "Instagram",
    url: "https://www.linkedin.com/company/yourcompany",
    icon: <LinkedInIcon sx={{ color: "#FFAA17" }} />,
  },
  {
    name: "Github",
    url: "https://www.linkedin.com/company/yourcompany",
    icon: <LinkedInIcon sx={{ color: "#FFAA17" }} />,
  },
  {
    name: "Facebook",
    url: "https://www.linkedin.com/company/yourcompany",
    icon: <LinkedInIcon sx={{ color: "#FFAA17" }} />,
  },
];

const Services_Link = [
  { name: "Services", url: "#" },
  { name: "Web Development", url: "/" },
  { name: "App Development", url: "/" },
  { name: "UI/UX Design", url: "/" },
];

const Team_Members = [
  {
    name: "Abdul Aziz",
    role: "CO-FOUNDER",
    image: Aziz,
  },
  {
    name: "John Doe",
    role: "CEO",
    image: Aziz,
  },
  {
    name: "Jane Smith",
    role: "CTO",
    image: Aziz,
  },
];

export const HeaderLink = Link_Header;
export const SocialLink = Link_Social;
export const ServicesLink = Services_Link;
export const ChevronIcon = ChevronRightIcon;
export const TeamMembers = Team_Members;
