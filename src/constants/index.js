import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  angular,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  simplify,
  threejs,
  iphone3d,
  keeper,
  moviedatabase,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: reactjs,
  },
  {
    title: "Angular Developer",
    icon: angular,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Node Developer",
    icon: nodejs,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Associate Software Engineer",
    company_name: "SimplifyVMS",
    icon: simplify,
    iconBg: "#383E56",
    date: "January 2023 - July 2024",
    points: [
      "Developed a Schema Designer for the Simplify Bridge platform's upload utility module, including file-schema validation, a script code editor, and API integrations using Angular and StencilJS.",
      "Integrated form inputs within the Schema Designer to generate JSON outputs for backend services.",
      "Created a Standardised Reports module in React, enabling report addition and editing on the client's dashboard based on user access levels.",
      "Designed an Angular page for Topics (KAFKA-queue) with StencilJS, including create, edit, and delete functionalities.",
      "Developed a Bookmark feature for users Reports and Dashboards in React using local storage of browser.",
      "Collaborated with UX designers to develop advanced components with StencilJS and integrated them into Angular, using Storybook for UI component storytelling.",
      "Designed a workflow with an intuitive popup interface and four options to initiate pipelines using Angular Templates and MatDialog for improved user-interaction.",
      "Embedded Metabase into the SimplifyVMS platform with iframe using the YII framework in PHP, contributing model, view, and controller components.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Apple Iphone 3D Webapp",
    description:
      "An application that allows users to watch and experience a 3D model of the Apple Iphone with multiple colours, sizes and animations, providing a convenient way to look around.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: iphone3d,
    source_code_link:
      "https://github.com/rahulshukla0902/iphone-website-three-js-gsap",
    deployed_project: "https://frabjous-kataifi-751d38.netlify.app/",
  },
  {
    name: "Movie Database",
    description:
      "Web application that enables users to search for movies, view movie details such as Director, Actors, Awards, Ratings, etc. Used OMDB API(REST API) for fetching details.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "hooks",
        color: "pink-text-gradient",
      },
    ],
    image: moviedatabase,
    source_code_link: "https://github.com/rahulshukla0902/movie-database-app",
    deployed_project: "https://tiny-crepe-466869.netlify.app/",
  },
  {
    name: "Keeper Application",
    description:
      "A comprehensive notes keeping platform that allows users to write notes, update and delete notes according to the user requirements.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "hooks",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: keeper,
    source_code_link:
      "https://codesandbox.io/s/keeperapp-%20kjh59g?file=/public/index.html",
    deployed_project: "https://kjh59g.csb.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
