// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import javaLogo from './assets/tech_logo/java.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// Experience Section Logo's

// Education Section Logo's
import cecLogo from './assets/education_logo/cec_logo.png';
import davLogo from './assets/education_logo/dav_logo.png';
import hskLogo from './assets/education_logo/hsk_logo.png';

// Project Section Logo's
import airbnbLogo from './assets/work_logo/air_bnb_clone.png';
import simonsaysLogo from './assets/work_logo/simon_says_game.png';
import spotifycloneLogo from './assets/work_logo/spotify_clone.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
  ];
  
  export const education = [
    {
      id: 1,
      img: cecLogo,
      school: "Chaibasa Engineering College",
      date: "Sept 2023 - Aug 2027",
      desc: "I completed my Bachelor's degree in Computer Science and Engineering (B.Tech.) from Chaibasa Engineering College, West Singhbhum(Chaibasa). Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development, I gained practical insights into the world of software development. My time at Chaibasa Engineering College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Technology - B.Tech (Computer Science and Engineering)",
    },
    {
      id: 2,
      img: davLogo,
      school: "D.A.V Koylanagar, Dhanbad",
      date: "May 2023",
      desc: "I completed my class 12 education from D.A.V Koylanagar, Dhanbad, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Informatics Practices.",
      degree: "CBSE(XII) - PCM with Informatics Practices",
    },
    {
      id: 3,
      img: hskLogo,
      school: "High School Kariyatpur, Jharkhand",
      date: "July 2021",
      desc: "I completed my class 10 education from High School Kariyatpur, Jharkhand, under the JAC board, where I studied Science with Computer.",
      degree: "JAC(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Air bnb Clone",
      description:
        "Wanderlust is a full-stack vacation rental web application built using Node.js, Express.js, and MongoDB. It enables users to explore, create, and manage property listings with full CRUD functionality. The application uses RESTful APIs, EJS for dynamic server-side rendering, and Joi for input validation. It also implements category-based filtering, responsive UI design, and efficient data relationships using Mongoose populate, ensuring a smooth and scalable user experience.",
      image: airbnbLogo,
      tags: ["CSS", "JavaScript", "EJS", "API"],
      github: "https://github.com/shrawanweb/Wanderlust",
      webapp: "",
    },
    {
      id: 1,
      title: "Simon Says Game",
      description:
        "An interactive Simon Says memory game developed using HTML, CSS, and JavaScript. The application generates random color sequences that users must replicate, with each level increasing in difficulty. It features smooth visual animations, real-time input validation, and a high score tracking system, delivering an engaging and responsive gameplay experience.",
      image: simonsaysLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/shrawanweb/simon-game",
      webapp: "https://shrawanweb.github.io/simon-game/",
    },
    {
      id: 2,
      title: "Spotify Clone",
      description:
        "Designed and developed a Spotify-inspired web player interface focusing on layout precision and responsive design. Leveraged CSS Flexbox for structuring complex UI components including sidebar navigation, content grids, and a persistent music player. The project highlights expertise in modern UI/UX design principles, component structuring, and real-world application cloning.",
      image: spotifycloneLogo,
      tags: ["HTML", "CSS"],
      github: "https://github.com/shrawanweb/spotify",
      webapp: "https://shrawanweb.github.io/spotify/",
    },
    
  ];  
