import NavBar from "./NavBar";
import { FiBookOpen } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";

const MyJourney = () => {
  return (
    <main className="relative ml-0 lg:ml-[26%] lg:right-0 w-full lg:w-[74%] bg-eerie-black rounded-lg border md:border-0 border-jet border-solid shadow-sm md:shadow-none shadow-jet p-5 flex flex-col gap-10 mt-5 lg:mt-0 pb-10 lg:mb-0 mb-20 overflow-hidden">
           <div className="lg:fixed lg:top-7 lg:right-7">


      <NavBar />
      </div>

      <section className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <h1
            className="text-3xl font-bold text-litewhite"
            data-aos="fade-down"
          >
            My Journey
          </h1>
          <div
            className="bg-vegas-gold h-[5px] w-[60px] rounded-full"
            data-aos="fade-down"
          ></div>
        </div>
        <div className="relative pl-8 pr-4 border-l-[2px] border-l-jet border-l-solid ml-5 md:ml-8 mt-10 mb-10 grid gap-6">
          <h1 className="text-xl font-bold text-litewhite" data-aos="fade-down">
            Working Experience
          </h1>
          <FiBookOpen className="absolute top-[-15px] left-[-25px] p-2 rounded-xl text-vegas-gold bg-smoky-black border border-jet border-solid text-5xl" />

          <div className="relative grid gap-2">
            <h3
              className="text-[16px] md:text-[18px] text-litewhite font-bold"
              data-aos="fade-down"
            >
              Usaf
            </h3>
            <h4
              className="text-[15px] md:text-[16px] text-litewhite font-italic"
              data-aos="fade-down"
            >
              Frontend Engineer
            </h4>

            <h4
              className="text-[14px] md:text-[16px] text-litewhite"
              data-aos="fade-down"
            >
              - Collaborated with cross-functional partner teams to identify and
              implement project requirements which contributed to the successful
              execution of the projects and the achievement of USAF goals.
            </h4>

            <h4
              className="text-[14px] md:text-[16px] text-litewhite"
              data-aos="fade-down"
            >
              - Participates in code review, fixes bugs, and troubleshoots web
              apps which in return improves code quality, promotes knowledge
              sharing and collaboration, drives continuous improvement, and
              builds confidence and trust in the development team
            </h4>
            <h4
              className="text-[14px] md:text-[16px] text-litewhite"
              data-aos="fade-down"
            >
              - Integrated backend APIs, which improve faster development
              cycles, improved user experience, and increased flexibility in
              implementing and optimizing features.
            </h4>

            <p
              className="text-[14px] md:text-[16px] text-vegas-gold"
              data-aos="fade-down"
            >
              Jan 2023 till date
            </p>

            <GoDotFill className="absolute top-0 left-[-45px] text-vegas-gold text-2xl p-[1px] bg-smoky-gray rounded-full" />
          </div>
          <div className="relative grid gap-2">
            <h3
              className="text-[16px] md:text-[18px] text-litewhite font-bold"
              data-aos="fade-down"
            >
              Lasop
            </h3>
            <h4
              className="text-[15px] md:text-[16px] text-litewhite font-italic"
              data-aos="fade-down"
            >
              Fullstack Web Developer / Instructor
            </h4>

            <h4
              className="text-[14px] md:text-[16px] text-litewhite"
              data-aos="fade-down"
            >
              - Part of a team, worked on web revamp of{" "}
              <a
                href={"https://www.lasop.net/"}
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.lasop.net
              </a>{" "}
              which improved users’ experience and increased users’ traffic by
              50%.
            </h4>

            <h4
              className="text-[14px] md:text-[16px] text-litewhite"
              data-aos="fade-down"
            >
              - With the solution, accessing course materials seamlessly and
              promoting efficient collaboration enhances the educational
              experience. This increased mobile traffic by 30%
            </h4>
            <h4
              className="text-[14px] md:text-[16px] text-litewhite"
              data-aos="fade-down"
            >
              - Collaborate with cross-functional teams including designers,
              product managers, backend developers, and other frontend
              developers to create high-quality products
            </h4>

            <h4
              className="text-[14px] md:text-[16px] text-litewhite"
              data-aos="fade-down"
            >
              - Conducted practice tests to track progress, identify areas of
              improvement, and help set goals for final assessment which
              increases student success ratio
            </h4>
            <h4
              className="text-[14px] md:text-[16px] text-litewhite"
              data-aos="fade-down"
            >
              - Provided academic assistance to assigned students individually
              and in groups.
            </h4>
            <p
              className="text-[14px] md:text-[16px] text-vegas-gold"
              data-aos="fade-down"
            >
              Dec 2020 - Dec 2023
            </p>

            <GoDotFill className="absolute top-0 left-[-45px] text-vegas-gold text-2xl p-[1px] bg-smoky-gray rounded-full" />
          </div>
          <div className="relative grid gap-2">
            <h3
              className="text-[16px] md:text-[18px] text-litewhite font-bold"
              data-aos="fade-down"
            >
              Freelance
            </h3>
            <h4
              className="text-[15px] md:text-[16px] text-litewhite font-italic"
              data-aos="fade-down"
            >
              Freelancer (Frontend Developer)
            </h4>
            <h4
              className="text-[14px] md:text-[16px] text-litewhite"
              data-aos="fade-down"
            >
              - Specialize in building highly interactive web applications that
              captivate users using React, NextJS, Typescript and TailwindCSS. I
              create dynamic user interfaces with fluid transitions and
              animations that enhance user engagement
            </h4>
            <h4
              className="text-[14px] md:text-[16px] text-litewhite"
              data-aos="fade-down"
            >
              - Collaborate with cross-functional teams including designers,
              product managers, backend developers, and other frontend
              developers to create high-quality products
            </h4>
            <h4
              className="text-[14px] md:text-[16px] text-litewhite"
              data-aos="fade-down"
            >
              - Stay up-to-date with the latest web development trends and
              technologies, ensuring that my clients receive the most current
              and innovative solutions
            </h4>
            <h4
              className="text-[14px] md:text-[16px] text-litewhite"
              data-aos="fade-down"
            >
              - Implemented responsive designs, cross-browser compatibility, and
              a mobile-first website for a start-up which increased mobile
              traffic by 20%
            </h4>
            <h4
              className="text-[14px] md:text-[16px] text-litewhite"
              data-aos="fade-down"
            >
              - Implemented websites, mobile applications, and landing pages and
              connected the endpoint using axios to the backend
            </h4>
            <p
              className="text-[14px] md:text-[16px] text-vegas-gold"
              data-aos="fade-down"
            >
              Nov 2020 till date
            </p>

            <GoDotFill className="absolute top-0 left-[-45px] text-vegas-gold text-2xl p-[1px] bg-smoky-gray rounded-full" />
          </div>
          <div className="relative grid gap-2">
            <h3
              className="text-[16px] md:text-[18px] text-litewhite font-bold"
              data-aos="fade-down"
            >
              Professional Development
            </h3>
            <h4
              className="text-[15px] md:text-[16px] text-litewhite font-italic"
              data-aos="fade-down"
            >
              Independent Learning | Self-taught
            </h4>
            <h4
              className="text-[14px] md:text-[16px] text-litewhite"
              data-aos="fade-down"
            >
              - Acquired proficiency in Python, JavaScript, and HTML/CSS through self-directed learning.
            </h4>
            <h4
              className="text-[14px] md:text-[16px] text-litewhite"
              data-aos="fade-down"
            >
              - Completed hands-on projects, including a web-based task management application using Django.
            </h4>
         
            <p
              className="text-[14px] md:text-[16px] text-vegas-gold"
              data-aos="fade-down"
            >
              Jun 2020 -Nov 2020
            </p>

            <GoDotFill className="absolute top-0 left-[-45px] text-vegas-gold text-2xl p-[1px] bg-smoky-gray rounded-full" />
          </div>
        </div>

        <div className="relative pl-8 pr-4 border-l-[2px] border-l-jet border-l-solid ml-5 md:ml-8 mt-10 mb-10 grid gap-6">
          <h1 className="text-xl font-bold text-litewhite" data-aos="fade-down">
            Education
          </h1>
          <FiBookOpen className="absolute top-[-15px] left-[-25px] p-2 rounded-xl text-vegas-gold bg-smoky-black border border-jet border-solid text-5xl" />

          <div className="relative grid gap-2">
            <h3
              className="text-[16px] md:text-[18px] text-litewhite font-bold"
              data-aos="fade-down"
            >
              Ladoke Akintola University of Technology, Nigeria
            </h3>
            <h4
              className="text-[15px] md:text-[17px] text-litewhite"
              data-aos="fade-down"
            >
              Faculty of Environmental Sciences
            </h4>
            <h4
              className="text-[14px] md:text-[16px] text-litewhite font-bold font-italic"
              data-aos="fade-down"
            >
              Bachelor of Technology, Urban and Regional Planning
            </h4>
            <p
              className="text-[14px] md:text-[16px] text-vegas-gold"
              data-aos="fade-down"
            >
              2012 - 2018
            </p>

            <GoDotFill className="absolute top-0 left-[-45px] text-vegas-gold text-2xl p-[1px] bg-smoky-gray rounded-full" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default MyJourney;
