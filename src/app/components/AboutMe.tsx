import { useContextGlobal } from "./Context";
import NavBar from "./NavBar";
import Skills from "./Skills";

const AboutMe = () => {

  return (
    <main className="relative ml-0 lg:ml-[26%] lg:right-0 w-full lg:w-[74%] bg-eerie-black rounded-lg border md:border-0 border-jet border-solid shadow-sm md:shadow-none shadow-jet p-5 flex flex-col gap-10 mt-5 lg:mt-0 pb-10 lg:mb-0 mb-[4rem] overflow-hidden">
      <div className="fixed top-7 right-7">
      <NavBar />
      </div>

      <section className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <h1
            className="text-2xl md:text-[28px] font-bold"
            data-aos="fade-down"
          >
            About Me
          </h1>
          <div
            className="bg-vegas-gold h-[5px] w-[60px] rounded-full"
            data-aos="fade-down"
          ></div>
        </div>
        <p
          className="text-[14px] md:text-[16px] text-justify"
          data-aos="fade-down"
        >
          {" "}
          Experienced Software Developer with expertise in JavaScript, React,
          Redux, Next.js, Nodejs, Express, Python, Django, Django Rest
          Framework, and other technologies. Passionate about creating engaging
          web experiences, optimizing performance, and ensuring cross-browser
          compatibility. Proven track record of delivering high-quality,
          scalable, and maintainable code. Adaptable in fast-paced environments
          and dedicated to continuous learning. Effective collaborator with a
          focus on exceptional user experiences.
        </p>
      </section>

      <Skills />

    </main>
  );
};

export default AboutMe;
