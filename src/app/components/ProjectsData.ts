interface ProjectDataTypes {
    id: number;
    projectImgURL: string;
    projectTitle: string;
    ProjectAbout: string;
    stack: string;
    projectGithubURL: string;
    projectLiveURL: string;
  }
  
  const ProjectData: ProjectDataTypes[] = [
    {
        id: 0,
        projectImgURL: "/img/geotravels.png",
        projectTitle: "Geotravels",
        ProjectAbout: "A travel guide website. Geotravels is visually stunning and user-friendly platform that seamlessly connects travelers with their dream destinations. Travel options are available for users to browse through effortlessly, accessing detailed itineraries and booking their trips securely with ease. By offering extensive details, easy reservation procedures, and a visually captivating website that sparks wanderlust, our solution elevates the overall travel experience.",
        stack: "React | Vite | Redux toolkit | API | Tailwind CSS | Styled-Component | Axios",
        projectGithubURL: "https://github.com/92isaac",
        projectLiveURL: "https://www.gowithgeo.com/",
    },
    {
        id: 1,
        projectImgURL: "/img/getlinked.png",
        projectTitle: "Get-Linked",
        ProjectAbout: "Crafted during a hackathon, this project showcases a seamless fusion of front-end development and back-end integration, elevating user interface design to new heights. Leveraging a tech stack that includes React with TypeScript, Axios for API connectivity, Tailwind CSS for stylish and responsive layouts, and JavaScript IntersectionObserver for captivating animations, this endeavor represents a harmonious marriage of cutting-edge technologies.",
        stack: "React | Vite | Typescript | TailwindCSS | JavaScript IntersectionObserver | Axios",
        projectGithubURL: "https://github.com/92isaac",
        projectLiveURL: "https://get-linked-weld.vercel.app/",
    },
    {
        id: 2,
        projectImgURL: "/img/ggicc.png",
        projectTitle: "GGICC",
        ProjectAbout: "Proposed web revamp of 'www.ggicc.ca'. The new website design presents a transformative and visually appealing digital platform that complements the client's role as a dedicated immigration expert and social worker. By seamlessly combining functionality and aesthetics, the revamped website serves as an engaging gateway for individuals seeking immigration guidance to Canada.",
        stack: "React | Typescript | TailwindCSS | Firebase ",
        projectGithubURL: "https://github.com/92isaac",
        projectLiveURL: "https://ggicc.vercel.app/",
    },
  
    {
        id: 3,
        projectImgURL: "/img/tokosmile.png",
        projectTitle: "Tokosmile",
        ProjectAbout: "This project revolves around creating a robust and secure online platform that enables seamless shopping experiences for customers. Leveraged React to build the interactive user interface of the e-commerce web application and Typescript for type check. Utilized Redux Toolkit for state management, ensuring a predictable and scalable data flow within the application. Employed Redux Toolkit Query for efficient data fetching and management, ensuring seamless integration with the backend APIs.",
        stack: "Redux toolkit | Typescript | TailwindCSS | RTK Query | React",
        projectGithubURL: "https://github.com/IamNaeto/portfolio_v2",
        projectLiveURL: "https://iamnaeto.vercel.app/",
    },
    {
        id: 4,
        projectImgURL: "/img/lasop.png",
        projectTitle: "LASOP",
        ProjectAbout: "Web revamp of LASOP made accessing course materials seamlessly promotes efficient collaboration and enhances educational experience. The Implementation of a responsive design, cross-browser compatibility, and mobile-first website increased mobile traffic by 20%",
        stack: "React | Rest API | Firebase | Bootstrap | Axios",
        projectGithubURL: "https://github.com/92isaac",
        projectLiveURL: "https://lasop.net/",
    },
    {
        id: 5,
        projectImgURL: "/img/weatherapp.png",
        projectTitle: "Weatherify",
        ProjectAbout: "Weatherify is a web-based weather app that provides real-time weather information and forecasts for any location around the world. It utilizes the OpenWeatherMap API to fetch accurate weather data and presents it in a visually appealing and user-friendly interface.",
        stack: "HTML | CSS | JavaScript | Api Integration | Geo-Location Api",
        projectGithubURL: "https://github.com/92isaac",
        projectLiveURL: "https://weatherapp-orcin-three.vercel.app/",
    },
  ]

  export default ProjectData