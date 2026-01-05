const logotext = "EMMANUEL";
const meta = {
    title: "Emmanuel NDAYISENGA",
    description: "Software Engineer with over 6 years of hands-on experience crafting fast, scalable, and user-friendly web applications that make a real impact from fintech platforms to education systems and public-sector solutions.",
};

const introdata = {
    title: "Hi, I'm Emmanuel NDAYISENGA",
    animated: {
        first: "Software Engineer",
        second: "Full-Stack Developer",
    },
    description: "With over 6 years of hands-on experience, I've been crafting fast, scalable, and user-friendly web applications that make a real impact from fintech platforms to education systems and public-sector solutions. ",
    your_img_url: "https://i.imgur.com/wFMrkju.jpeg",
};

const dataabout = {
    title: "About Me",
    aboutme: "With over 6 years of hands-on experience, I've been crafting fast, scalable, and user-friendly web applications that make a real impact from fintech platforms to education systems and public-sector solutions. I speak React.js, TypeScript, and Node.js fluently, and I'm passionate about blending great design with solid engineering. I love taking projects from idea to launch, architecting, coding, optimizing, and making sure every pixel and API call works in harmony. Collaboration is my superpower, and I take pride in building software that's not just functional, but delightful—the kind that users (and developers) actually enjoy.",
};
const worktimeline = [
    {
        jobtitle: "Software Engineer",
        where: "Bank of Kigali (BK) Techouse Ltd, Kigali City, Rwanda",
        date: "01/2023 - Present",
        description: "At BK Techouse, I contribute to the design and development of high-impact digital platforms used across the public and private sectors.",
        contributions: [
            "MAFAP Feature – SKS (Smart Nkunganire System): Contributed to the development of the MAFAP module, enabling end-to-end tracking of agricultural investment data from farmers to coffee washing stations, dry mills, and exporters.",
            "Urubuto Pay – Motor Insurance Services: Developed the end-to-end motor insurance feature within Urubuto Pay microservices. Implemented workflows that allow users to retrieve insurance quotations before payment, complete secure insurance payments, and automatically receive insurance contracts after successful transactions.",
            "GBV Reporting System – MIGEPROF & UNFPA: Contributed to a national Gender-Based Violence reporting platform with mobile app, web portal, and USSD channels. Worked on both frontend and backend of the back-office system to enhance case reporting, data flow, and administrative management.",
            "BK Group Strategic Dashboard: Designed and developed a centralized dashboard for monitoring and managing KPIs and strategic initiatives across all BK Group subsidiaries, improving data visibility for leadership teams.",
            "Yeffa Application – AGRA Project: Independently developed the Yeffa platform, supporting youth and farmers, especially women by providing tools for accessing agricultural resources and opportunities.",
        ]
    },
    {
        jobtitle: "Associate Software Engineer",
        where: "Bank of Kigali (BK) Techouse Ltd, Kigali City, Rwanda",
        date: "06/2021 - 12/2022",
        description: "Developed and maintained web applications across BK Group subsidiaries, ensuring responsive interfaces, optimized performance, and accurate, high-quality content.",
        contributions: [
            "Contributed to the development of the Urubuto School Management System, working on back-office loan management features and the corresponding USSD workflows.",
            "Supported frontend development for Kiliziya Yacu, fixed communication module, improving usability and interface consistency."
        ]
    },
    {
        jobtitle: "Software Developer",
        where: "BarakHand, Kigali City, Rwanda",
        date: "03/2018 - 06/2021",
        description: "Developing and maintaining web applications using modern technologies such as Angular, TypeScript, Node.js, PostgreSQL and Springboot to develop a document repository system for Rwanda's RURA, enhancing document management and accessibility."
    },
    // {
    //     jobtitle: "President of AIESEC in Huye (LCVP)",
    //     where: "AIESEC in Rwanda, Huye District",
    //     date: "02/2016 - 02/2018",
    //     description: "As the leader of AIESEC Huye, I ensured the development needed by engaging all our members, interns, and exchange participants (EPs), making sure they benefited from our projects. I introduced new strategies based on the Sustainable Development Goals (SDGs) to help our community in various ways, ultimately improving well-being as global citizens."
    // },
    {
        jobtitle: "PHP Web Developer",
        where: "PROGRAMMAGE Ltd, Kigali, Kacyiru",
        date: "11/2014 - 12/2014",
        description: "During my internship, I focused on learning PHP and Java programming languages. This experience significantly enhanced my coding skills. Today, I am completing my profile, reflecting on the progress I've made."
    },
    {
        jobtitle: "Web Design Intern",
        where: "IGIHE LTD, Rwanda",
        date: "07/2013 - 08/2013",
        description: "During my internship, I learned to create both static and dynamic websites using JavaScript, CSS, and HTML. This hands-on experience enhanced my design skills."
    },
];

const skills = {
    "Frontend": ["React.js", "Angular", "Next.js", "TypeScript", "Redux", "CSS", "Figma UI", "HTML5", "Tailwind CSS"],
    "Backend": ["Node.js", "Next.js", "Express.js", "Python", "PHP", "PostgreSQL", "Redis", "MongoDB"],
    "DevOps & Tools": ["Docker", "Git", "Linux", "CI/CD", "Nginx", "Jest", "Agile"],
    "Professional": ["Leadership", "Project Management", "Mentorship", "Problem Solving", "Communication"]
};

const services = [{
    title: "Full-Stack Web Development",
    description: "Crafting fast, scalable, and user-friendly web applications using modern technologies like React.js, TypeScript, Node.js, and more. From fintech platforms to education systems and public-sector solutions.",
},
{
    title: "UI/UX Design & Frontend Development",
    description: "Designing intuitive user interfaces and developing responsive frontends with a focus on user experience, accessibility, and performance optimization.",
},
{
    title: "Backend Development & API Integration",
    description: "Building robust backend systems, integrating APIs, and ensuring secure, efficient data handling with technologies like Express.js, PostgreSQL, and Redis.",
},
{
    title: "DevOps & Deployment",
    description: "Implementing CI/CD pipelines, containerization with Docker, and deploying applications on cloud platforms to ensure scalability and reliability.",
},
];


const dataportfolio = [
    {
        img: "https://i.postimg.cc/nL2JB6Tw/download.png",
        title: "Manu shop (In progress)",
        description: "Discover unique handcrafted treasures that will transform your space and touch your heart.",
        link: "https://e-shop-five-alpha.vercel.app/",
        technologies: []
    },
    {
        img: "https://i.imgur.com/s5jG9FR.jpeg",
        title: "SKS Smart kungahara system",
        description: "A digital platform created by BK Techouse and NAEB to modernize Rwanda’s cash crop value chains.",
        link: "https://smartkungahara.rw/",
        technologies: []
    },
    {
        img: "https://i.imgur.com/rwItNo7.jpeg",
        title: "Urubuto Pay",
        description: "I developed and integrate insurance services (buy and renew motor insurance) within urubuto pay microservice",
        link: "https://urubutopay.rw/",
        technologies: []
    },
    {
        img: "https://i.imgur.com/BUJzj45.png",
        title: "GBV Management System",
        description: "A web application to manage and report Gender-Based Violence (GBV) cases efficiently.",
        link: "https://humura.rw/auth/login",
        technologies: []
    },
    {
        img: "https://i.imgur.com/hOA8i4F.png",
        title: "BK Group SMD",
        description: "A web application for BK Group to strategically manage the group and their subsidiaries.",
        link: "https://bkgroup.rw/",
        technologies: []
    },
    {
        img: "https://i.imgur.com/glWUzKN.png",
        title: "YEFFA",
        description: "A youth-focused platform developed in partnership with AGRA to promote agribusiness and entrepreneurship.",
        link: "https://yeffa.rw/",
        technologies: []
    },
    {
        img: "https://i.imgur.com/QQrSV6g.jpeg",
        title: "Urubuto Education",
        description: "A digital solution supporting students and educational stakeholders.",
        link: "https://urubuto.rw/",
        technologies: []
    },
    {
        img: "https://i.imgur.com/wfl8kW4.jpeg",
        title: "Kiliziya Yacu",
        description: "A community platform tailored for Catholic Church members to enhance digital communication and spiritual engagement.",
        link: "https://kiliziyayacu.rw/",
        technologies: []
    },
];

const contactConfig = {
    YOUR_EMAIL: "webmasterio2015@gmail.com",
    YOUR_FONE: "(250)796505224",
    description: "With over 6 years of hands-on experience, I've been crafting fast, scalable, and user-friendly web applications that make a real impact from fintech platforms to education systems and public-sector solutions.",
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/NDAYISENGAManu",
    // facebook: "https://facebook.com",
    linkedin: "https://www.linkedin.com/in/emmanuel-ndayisenga-565409106/",
    // twitter: "https://twitter.com/SengaManu",
};

const education = [
    {
        degree: "Bachelor of Computer Science",
        institution: "University of Rwanda",
        period: "10/2015 - 11/2019",
        gpa: "Upper Second Class",
        skills: ["Software Project Management", "Information Technology", "Leadership", "Project Management", "Information Security", "Artificial Intelligence (AI)", "Cultural Diversity"],
        documentUrl: "/degree.pdf"
    },
    {
        degree: "A2 Diploma certificate",
        institution: "(BTR) Technical Secondary School, Rwanda",
        period: "02/2012 - 02/2015",
        gpa: "Upper Second Class",
        skills: ["Object-Oriented Programming", "Data Structures and Algorithms", "Database Management Systems", "Web Development", "Software Engineering", "Network Fundamentals"],
        // documentUrl: "https://i.imgur.com/HPHKejP.png"
    },
];

const certifications = [
    {
        title: "Software Engineering",
        issuer: "ALX Academy & Holberton School",
        period: "09/2023 - 11/2024",
        skills: ["Teamwork", "Backend Development", "Frontend Development", "Algorithms and Data Structures", "DevOps", "Low-Level Programming", "Full-Stack Development"],
        credentialUrl: "/alx.pdf"
    },
    {
        title: "Docker and Kubernetes: The Complete Guide",
        issuer: "Udemy Business",
        period: "01/2024 - Present",
        credentialUrl: "https://www.udemy.com/certificate/UC-91741a5e-15bf-4bbb-97ae-15c9d9643470/"
    },
    {
        title: "PostgreSQL Bootcamp: Go From Beginner to Advanced, 60+hours",
        issuer: "Udemy Business",
        period: "01/2024",
        credentialUrl: "https://www.udemy.com/certificate/UC-8fed0745-1b1e-4a4f-b779-f93e2dc8a90e/"
    },
    {
        title: "Understanding TypeScript",
        issuer: "Udemy Business",
        period: "12/2023 - Present"
    },
    {
        title: "MERN Stack Course - MongoDB, Express, React and NodeJS",
        issuer: "Udemy Business",
        period: "12/2023 - Present",
        credentialUrl: "https://www.udemy.com/certificate/UC-f5a29100-f76d-47ec-9263-78d4fe5ebae8/"
    },
    {
        title: "Next.js by Example",
        issuer: "Udemy Business",
        period: "10/2023 - Present",
        credentialUrl: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-1a910ecf-2af7-4617-bffb-903c761f49b8.pdf"
    },
    {
        title: "Redis - World's Fastest Database - Beginners to Advance",
        issuer: "Udemy Business",
        period: "09/2023 - Present",
        credentialUrl: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-10c10263-3e8f-4928-8fe1-6e4db382f2c1.pdf"
    },
    {
        title: "Secure Product Lifecycle 101",
        issuer: "Udemy Business",
        period: "08/2023 - Present"
    },
    {
        title: "React and Projects courses for Front-End Developer",
        issuer: "Udemy",
        period: "10/2022 - Present",
        credentialUrl: "https://www.udemy.com/certificate/UC-f1b422c0-62af-4a71-bd2e-9a3f524a88b6/"
    },
];

const volunteering = [
    {
        role: "President",
        organization: "AIESEC",
        location: "Huye, Rwanda",
        period: "02/2016 - 02/2018",
        description: "As the leader of AIESEC Huye, I ensured the development needed by engaging all our members, interns, and exchange participants (EPs), making sure they benefited from our projects. I introduced new strategies based on the Sustainable Development Goals (SDGs) to help our community in various ways, ultimately improving well-being as global citizens."
    },
    {
        role: "Junior Facilitator",
        organization: "Peace Corps",
        location: "",
        period: "10/2013 - 11/2013",
        description: "I served as a junior facilitator at Camp BE (Boys Excellence). My role involved guiding students to better understand their lessons and working closely with an American Peace Corps volunteer. Additionally, I helped organize teaching materials and activities for the campers."
    }
];

const publications = [
    {
        title: "Web Security in the Age of AI Agents — A New Concern for Developers",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7411285940427546624/"
    },
    {
        title: "Celebrating specialization in software engineering",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7263182143965581313/"
    },
    {
        title: "The Journey of a Web Request: What happens when you type google.com in your browser and press Enter",
        link: "https://www.linkedin.com/pulse/journey-web-request-what-happens-when-you-type-your-press-ndayisenga-qajif/?trackingId=g2wEyaHvTkWgRmgIqLKZSw%3D%3D"
    }
];

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
    education,
    certifications,
    volunteering,
    publications,
};
