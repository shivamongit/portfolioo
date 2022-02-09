/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Shivam Shasheesh",
  logo_name: "Shivam Shasheesh",
  // nickname: "harry / picleric",
  full_name: "Shivam Shasheesh",
  subTitle:
    "Aspiring Full Stack Developer,based in New Delhi.",
  resumeLink:
    "https://drive.google.com/file/d/1P-oP3aATTchfEzfag1W_3LUqv5OVMEdU/view?usp=sharing",
  mail: "shivam.akka@outlook.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/shivamongit",
  linkedin: "https://www.linkedin.com/in/shivamshasheesh/",
  gmail: "shivam.akka@outlook.com",
  // gitlab: "https://gitlab.com/harikanani",
  facebook: "",
  twitter: "https://twitter.com/shivamshasheesh",
  instagram: "https://www.instagram.com/shivam_.sk/",
};

const skills = {
  data: [
    {
      title: "Front End skills",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive User Interfaces and Backend for web applications",
        "⚡ Building responsive website front end using ReactJS,Tailwindcss",
       
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#563d7c",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
     
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
       
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Tailwindcss",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: {
            color: "#E34F26",
          },
        },
      ],
    },
    {
      title: "Backened Skills",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple Backened platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Continuous Integration",
        "⚡ Creating application backend in Node, Express,MongoDB,Postman",
        "⚡ Integration of third party services such as Google",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
           {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Express",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#339933",
          },
        },
      
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects,HTMl,CSS,Javascript and React Project. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile_me.png",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others.",
    link: "https://medium.com/@shivamblogs",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "MyGlamm.com",
      url: "https://nodejs-app-myglamm.herokuapp.com/",
      description:
        " MyGlamm is India’s fastest growing direct-to-consumer beauty brand. With over 800 SKUs across makeup, skincare and personal care, MyGlamm Beauty Products feature advanced, rich, feel-good formulas that are 100% cruelty-free, embrace Clean Beauty, and have skin-friendly ingredients.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Bootstrap",
          iconifyClass:"simple-icons:bootstrap",
        },
          {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },
          {
          name: "ejs",
          iconifyClass: "logos-ejs",
        },
           {
          name: "Express",
          iconifyClass: "logos-express",
        },
      ],
    },
    {
      id: "1",
      name: "Healthmug.com",
      url: "",
      description:
        "  Healthmug.com ,an online portals with 1,00,000+ products catering to healthcare and wellness-related needs. ",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      

      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  projectsHeader,
  contactPageData,
  projects,
};
