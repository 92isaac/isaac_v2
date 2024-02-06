import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaSass,
  FaReact,
  FaFigma,
  FaGithub,
  FaGitAlt,
  FaPython,
  FaNodeJs,
} from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiTypescript,
  SiTailwindcss,
  SiUnocss,
  SiFirebase,
  SiPostman,
  SiPython,
  SiNpm,
  SiYarn,
  SiCanva,
  SiRedux,
  SiMui,
  SiStyledcomponents,
  SiDjango,
  SiMongodb,
  SiExpress,
  SiVite,
  SiWebpack,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

interface IconData {
  icon: React.ReactNode; // React.ReactNode can hold any JSX element
  name: string;
}

const dummyData: IconData[] = [
  {
    icon: <IoLogoJavascript className="text-3xl text-vegas-gold" />,
    name: "JavaScript",
  },
  {
    icon: <SiTypescript className="text-3xl text-vegas-gold" />,
    name: "Typescript",
  },
  { icon: <FaPython className="text-3xl text-vegas-gold" />, name: "Python" },
  { icon: <FaReact className="text-3xl text-vegas-gold" />, name: "React" },
  {
    icon: <FaReact className="text-3xl text-vegas-gold" />,
    name: "React Native",
  },
  {
    icon: <TbBrandNextjs className="text-3xl text-vegas-gold" />,
    name: "NextJS",
  },
  { icon: <SiRedux className="text-3xl text-vegas-gold" />, name: "Redux" },
  { icon: <FaNodeJs className="text-3xl text-vegas-gold" />, name: "NodeJS" },
  { icon: <SiExpress className="text-3xl text-vegas-gold" />, name: "Express" },
  {
    icon: <SiDjango className="text-3xl text-vegas-gold" />,
    name: "Django/ DRF",
  },
  { icon: <SiMongodb className="text-3xl text-vegas-gold" />, name: "MongoDB" },
  {
    icon: <SiFirebase className="text-3xl text-vegas-gold" />,
    name: "Firebase",
  },
  { icon: <FaCss3Alt className="text-3xl text-vegas-gold" />, name: "CSS" },
  {
    icon: <SiTailwindcss className="text-3xl text-vegas-gold" />,
    name: "Tailwind",
  },
  {
    icon: <FaBootstrap className="text-3xl text-vegas-gold" />,
    name: "Bootstrap",
  },
  { icon: <SiMui className="text-3xl text-vegas-gold" />, name: "Material UI" },
  {
    icon: <SiStyledcomponents className="text-3xl text-vegas-gold" />,
    name: "StyledComponent",
  },
  { icon: <FaSass className="text-3xl text-vegas-gold" />, name: "Sass" },
  { icon: <FaHtml5 className="text-3xl text-vegas-gold" />, name: "HTML" },
  { icon: <FaGitAlt className="text-3xl text-vegas-gold" />, name: "Git" },
  { icon: <FaGithub className="text-3xl text-vegas-gold" />, name: "Github" },
  { icon: <SiWebpack className="text-3xl text-vegas-gold" />, name: "Webpack" },
  { icon: <SiPostman className="text-3xl text-vegas-gold" />, name: "Postman" },
  { icon: <SiNpm className="text-3xl text-vegas-gold" />, name: "NPM" },
  { icon: <SiYarn className="text-3xl text-vegas-gold" />, name: "Yarn" },
  { icon: <SiVite className="text-3xl text-vegas-gold" />, name: "Vite" },
  {
    icon: <TbBrandVscode className="text-3xl text-vegas-gold" />,
    name: "VS-Code",
  },
];
const Skills = () => {
  return (
    <main className="grid gap-5">
      <div className="flex flex-col gap-2">
        <h1
          className="text-2xl md:text-[28px] font-bold"
          data-aos="fade-down"
        >
          Stack and Tools
        </h1>
        <div
          className="bg-vegas-gold h-[5px] w-[60px] rounded-full"
          data-aos="fade-down"
        ></div>
      </div>

      {/* <div className="flex flex-wrap"> */}
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {dummyData.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-start sm:justify-center gap-2 sm:gap-5 shadow-sm shadow-jet rounded-lg border border-jet border-solid p-3 md:py-5 md:px-2"
            data-aos="fade-down"
          >
            {item.icon}
            <h1 className=" text-sm md:text-lg font-bold">
              {item.name}
            </h1>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Skills;
