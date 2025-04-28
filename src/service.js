import CodeIcon from "@mui/icons-material/Code";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SecurityIcon from "@mui/icons-material/Security";
import StorageIcon from "@mui/icons-material/Storage";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import BuildIcon from "@mui/icons-material/Build";
import RefreshIcon from "@mui/icons-material/Refresh";
import BugReportIcon from "@mui/icons-material/BugReport";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import MemoryIcon from "@mui/icons-material/Memory";
import VisibilityIcon from "@mui/icons-material/Visibility";
import SyncIcon from "@mui/icons-material/Sync";

import WebDevelopment from "./app/assets/web.webp";
import AppDevelopment from "./app/assets/app.webp";
import Testing from "./app/assets/testing.png";



const Services_Data = [
  {
    id: 1,
    heading: "App Development",
    icon: "📱",
    image: AppDevelopment,
    FD: " Checkmate specializes in creating robust mobile applications tailored to your business needs, providing seamless user experiences and advanced functionalities.",
    description: [
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit...",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit...",
    ],
    services: [
      { icon: PhoneIphoneIcon, text: "Native and Hybrid App Development" },
      { icon: CodeIcon, text: "Custom App Design and Development" },
      { icon: CloudDownloadIcon, text: "App Deployment and Distribution" },
      { icon: DashboardIcon, text: "App Analytics and Performance Monitoring" },
    ],
    rightCard: {
      title: "Feature",
      points: [
        { icon: CodeIcon, text: "User Interface (UI) Design" },
        { icon: StorageIcon, text: "Functionality and Performance" },
        { icon: DashboardIcon, text: "Scalability" },
        { icon: SecurityIcon, text: "Security" },
        { icon: CloudDownloadIcon, text: "Integration" },
      ],
    },
  },
  {
    id: 2,
    heading: "Web Maintenance",
    icon: "🔧",
    image: WebDevelopment,
    FD: "Checkmate ensures your website stays up-to-date with regular maintenance, performance optimization, and security updates to guarantee a seamless user experience.",
 
    description: [
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit...",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit...",
    ],
    services: [
      { icon: BuildIcon, text: "Website Monitoring and Maintenance" },
      { icon: RefreshIcon, text: "Bug Fixes and Performance Optimization" },
      { icon: StorageIcon, text: "Data Backup and Recovery" },
      { icon: SyncIcon, text: "Software Updates and Compatibility" },
    ],
    rightCard: {
      title: "Feature",
      points: [
        { icon: DashboardIcon, text: "Regular Backups" },
        { icon: StorageIcon, text: "Performance Monitoring" },
        { icon: SecurityIcon, text: "Security Patches" },
        { icon: BuildIcon, text: "Bug Fixes" },
        { icon: RefreshIcon, text: "Software Updates" },
      ],
    },
  },
  {
    id: 3,
    heading: "Web Testing",
    icon: "🧪",
    image: Testing,
    FD: "Checkmate offers comprehensive web testing services to ensure your site functions smoothly across all devices and browsers, delivering a flawless user experience.",
    
    description: [
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit...",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit...",
    ],
    services: [
      { icon: BugReportIcon, text: "Manual and Automated Testing" },
      { icon: CheckCircleIcon, text: "Functional Testing" },
      { icon: MemoryIcon, text: "Performance Testing" },
      { icon: VisibilityIcon, text: "Cross-Browser Compatibility Testing" },
    ],
    rightCard: {
      title: "Feature",
      points: [
        { icon: DashboardIcon, text: "Bug Tracking and Reporting" },
        { icon: SecurityIcon, text: "Security Testing" },
        { icon: MemoryIcon, text: "Load and Stress Testing" },
        { icon: CheckCircleIcon, text: "User Acceptance Testing" },
        { icon: VisibilityIcon, text: "Usability Testing" },
      ],
    },
  },
];

export const ServicesData = Services_Data;





