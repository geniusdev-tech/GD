import { FaHtml5, FaCss3, FaNodeJs, FaReact, FaSass, FaFigma, FaPhoneAlt, FaUser, FaMapMarkerAlt, FaPaperPlane, FaInstagram, FaLinkedin,FaWhatsapp, FaGithub, FaPython, FaLinux, FaCloud, FaHackerNews} from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom";
//import { BsMedium } from "react-icons/bs";
//import portfolio from "./assets/portfolio.jpg"


export const navLinks = ["home", "about", "skills", "Blog", "contact"]

export const socialIcons = [
  <SocialIcon url="https://linkedin.com/in/geniusdev"  network="linkedin" style={{ height: 35, width: 35 }} />,
  <SocialIcon url="https://github.com/geniusdev-tech/"  network="github" style={{ height: 35, width: 35 }} />,
  <SocialIcon url="https://instagram.com/_rodrigo.doctor_/"  network="instagram" style={{ height: 35, width: 35 }} />,


]

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Rodrigo Lima"
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "+5582999993986"
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "datasense.it@proton.me"
  }
]

export const icons = [<FaHtml5 />, <FaCss3 />, <DiJavascript />, <SiTypescript />, <FaReact />, <FaNodeJs />, <FaSass />, <FaFigma />, <FaPython />, <FaLinux />, <FaCloud />, <FaHackerNews />]

export const experiences = [
  {
    id: 1,
    year: "2022",
    position: "Senior Web Developer",
    
  },
  {
    di: 2,
    year: "2021",
    position: "Junior Web Developer",
   
  },
  {
    id: 3,
    year: "2019",
    position: "Intern Web Dveloper",
    
  }
]
export const finishes = [
  {
    id: 1,
    number: '6+',
    itemName: "Years Of Experience"
  },
  {
    id: 2,
    number: "150+",
    itemName: "Satisfied Customers"
  },
  {
    id: 3,
    number: "253+",
    itemName: "Designed Items"
  },
  {
    id: 4,
    number: "117+",
    itemName: "Clients Served"
  }
]

/*
export const workImages = [
  {
    id: 1,
    img: work1,
    name: "project 1",
    category: "web"
  },
  {
    id: 2,
    img: work2,
    name: "project 2",
    category: "web"
  },
  {
    id: 3,
    img: work3,
    name: "project 3",
    category: "web"
  },
  {
    id: 4,
    img: work4,
    name: "project 4",
    category: "app"
  },
  {
    id: 5,
    img: work5,
    name: "project 5",
    category: 'app'
  },
  {
    id: 6,
    img: work6,
    name: "project 6",
    category: "design"
  }
]


export const workNavs = [
  "All", "Web", "App", "Design"
]
*/

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "World"
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "datasense.it@proton.me"
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "+55 (82)99999-3986"
  }
]
