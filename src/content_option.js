import yeffa from "../src/assets/images/yeffa.png";
import githubSearchUsers from "../src/assets/images/github-search-users.png";

const logotext = "MANU";
const meta = {
    title: "Emmanuel NDAYISENGA",
    description: "I’m Emmanuel NDAYISENGA software engineer,currently working in Rwanda-Kigali",
};

const introdata = {
    title: "Hi, I'm Emmanuel NDAYISENGA!",
    animated: {
        first: "Passionate about coding.",
        second: "Crafting innovative applications.",
        third: "Building seamless web experiences.",
    },
    description: "I am a software engineer with hands-on experience in all levels of web development including Analysis, design, development, testing, integration and scaling.",
    your_img_url: "/Kg-4.jpeg",
};

const dataabout = {
    title: "a bit about my self",
    aboutme: "I am a software developer with hands-on experience in all levels of web development including Analysis, design, development, testing, integration and scaling.",
};
const worktimeline = [{
        jobtitle: "Front-End software developer",
        where: "BK Techouse Ltd",
        date: "current",
    },
    {
        jobtitle: "Software Developer",
        where: "BarakHand",
        date: "2018",
    },
    {
        jobtitle: "LCVP",
        where: "AIESEC",
        date: "2017",
    },
];

const skills = [{
        name: "Javascript",
        value: 100,
    },
    {
        name: "React",
        value: 100,
    },
    {
        name: "Typescript",
        value: 100,
    },
    {
        name: "NextJs",
        value: 100,
    },
    {
        name: "TailwindCss",
        value: 100,
    },
    {
        name: "Scss",
        value: 100,
    },
    {
        name: "Jquery",
        value: 75,
    },
];

const services = [{
        title: "UI & UX Design",
        description: "With a Bachelor's in Applied Computer Science from the University of Rwanda, I bring hands-on experience across all aspects of web development. My focus on user interface (UI) acceptance and satisfaction ensures that your projects prioritize usability and engagement.",
    },
    {
        title: "Web Applications",
        description: "From analysis to scaling, I've developed a diverse range of web applications, including e-commerce platforms, garage systems, and stock management systems. With expertise in HTML, Sass, TypeScript, JavaScript, PHP, CodeIgniter, Node.js, Angular, and React.js, I ensure that your web applications are robust, efficient, and user-friendly.",
    },
    {
        title: "Website Design",
        description: "I've crafted visually appealing and functional websites for various clients and projects, including bktechouse.rw, tophillsgroup.co.tz, and tecosltd.com. Whether it's for businesses, organizations, or individuals, I prioritize delivering websites that are intuitive, responsive, and tailored to meet your needs.",
    },
];


const dataportfolio = [{
        img: yeffa,
        description: "This program aims to catalyze dignified and fulfilling work for young people, especially young women, and disadvantaged groups",
        link: "https://yeffa.rw/",
    },
    {
        img: githubSearchUsers,
        description: "The purpose of this project will be to authenticate and present the dashboard of a login github account.",
        link: "https://gitsearchusers-manu.netlify.app/",
    }
];

const contactConfig = {
    YOUR_EMAIL: "webmasterio2015@gmail.com",
    YOUR_FONE: "(250)789528073",
    description: "I am a software developer with hands-on experience in all levels of web development including Analysis, design, development, testing, integration and scaling.",
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/NDAYISENGAManu",
    facebook: "https://facebook.com",
    linkedin: "https://www.linkedin.com/in/emmanuel-ndayisenga-565409106/",
    twitter: "https://twitter.com/SengaManu",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};