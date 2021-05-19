const resumeData = {
    contact: [
        {
            link: "mailto:thereallouiew@gmail.com?subject=Let's%20work%20together!",
            iconLink: "/images/contact-icons/email.svg",
            alt: "email icon"
        },
        {
            link: "https://www.github.com/dustyfingers",
            iconLink: "/images/contact-icons/github.svg",
            alt: "github icon"
        },
        {
            link: "https://www.linkedin.com/in/louie-williford/",
            iconLink: "/images/contact-icons/linkedin.svg",
            alt: "linkedin icon"
        }
    ],
    skills: [
        "HTML",
        "CSS/SASS/LESS",
        "PHP",
        "Wordpress/UIKit",
        "Bootstrap 3/4/5",
        "Javascript(ES6+)",
        "React",
        "Node.js/Express",
        "Python",
        "Dart/Flutter",
        "MongoDB",
        "mySQL/postgreSQL",
        "Git/Github",
        "C#/Unity",
        "Firebase"
    ],
    projects: [
        {
            title: "louiemadeit Beat Store",
            desc:
                "I designed, built, tested and deployed this application in it's entirety. The front end is built using React + Redux and Bootstrap 5, and is hosted using AWS Amplify. The backend is a Node.js/Express server + a MongoDB database, and uses AWS S3 for storing files. It is hosted on Heroku.",
            image: "/images/project-images/beat-store-screencap.png",
            showSiteLink: true,
            siteLink: "https://dev.louiemadeit.com",
            showRepoLink: true,
            repoLink: "https://github.com/dustyfingers/louiemadeit-be",
            tags: [
                "Full Stack Development",
                "JavaScript",
                "React",
                "Express",
                "Node.js",
                "MongoDB",
                "AWS S3"
            ]
        },
        {
            title: "Lambda Alumni Network",
            desc:
                "I collaborated with ~10 other developers remotely to finish the product before a major beta release. My team finished the implementation of an entire new UI rework. I personally helped build the site’s search functionality.",
            image: "/images/project-images/lan-screencap.png",
            showSiteLink: true,
            siteLink: "https://a.lambdaalumninetwork.dev/welcome",
            showRepoLink: true,
            repoLink: "https://github.com/Lambda-School-Labs/lan-fe-a",
            tags: [
                "Full Stack Development",
                "JavaScript",
                "React",
                "Express",
                "Node.js",
                "MongoDB",
                "AWS S3"
            ]
        },
        {
            title: "WellDone",
            desc:
                "I helped build the backend and reworked the reports and dashboard pages for a non-profit org that provides well sensors to communities in developing countries. I personally used Express/postgreSQL and Next.js on this project.",
            image: "/images/project-images/welldone-screencap.png",
            showSiteLink: true,
            siteLink: "https://welldone.org",
            showRepoLink: true,
            repoLink: "https://github.com/labs17-WellDone/backend",
            tags: [
                "Full Stack Development",
                "JavaScript",
                "Next.js",
                "Express",
                "Node.js",
                "Knex",
                "postgreSQL",
                "AWS"
            ]
        },
        {
            title: "Stack Landing Page",
            desc:
                "I built the landing page for a mock web-app alongside a remote UI team and one other developer. I built the about page and the landing page using HTML, Sass, Bootstrap 4 and raw Javascript(ES6+). The project is hosted on Netlify.",
            image: "/images/project-images/stack-screencap.png",
            showSiteLink: true,
            siteLink: "https://stack-cards.netlify.com/",
            showRepoLink: true,
            repoLink:
                "https://github.com/bw-business-card-organizer/business-card-organizer-UI",
            tags: [
                "Front End Development",
                "HTML",
                "CSS",
                "JavaScript",
                "UI Design",
                "SASS",
                "Bootstrap 4",
                "Netlify"
            ]
        },
        {
            title: "Portfolio Site",
            desc:
                "My portfolio was created from scratch with React + SASS, and is hosted using AWS Amplify's amazing CI/CD services.",
            image: "/images/project-images/portfolio-screencap.png",
            showSiteLink: false,
            siteLink: "/",
            showRepoLink: true,
            repoLink: "https://github.com/dustyfingers/portfolio-source",
            tags: [
                "Front End Development",
                "JavaScript",
                "React",
                "UI Design",
                "AWS Amplify/Route53"
            ]
        }
      ],
      experience: [
        {
            jobTitle: "Software Developer",
            employer: "FitSW",
            desc: "At FitSW I designed, built and tested several product-critical client facing features, including the ability for personal trainers to sell packages of their services and the ability for personal trainers to create subscriptions that their clients can then subscribe to. These features caused an almost 100% increase in fee revenue on our stripe connect platform. I was also tasked with building analytics and squashing bugs as they were reported by users, among other smaller projects. Day to day I used PHP, jQuery, JS, Bootstrap, HTML and CSS.",
            location: "Colorado Springs, CO",
            from: "January 2020",
            to: "May 2020"
        },
        {
            jobTitle: "Junior Web Developer",
            employer: "NativeRank",
            desc: "At NativeRank, I built pixel-perfect custom web solutions for enterprise level consumers, leveraging mockups provided by the design team. Day to day I used HTML/CSS, LESS, UI Kit, Handlebars.js, PHP and Wordpress.",
            location: "Denver, CO",
            from: "September 2019",
            to: "January 2020"
        },
        {
            jobTitle: "Phone Repair Technician",
            employer: "Dr. PhoneFix",
            desc: "",
            location: "Colorado Springs, CO",
            from: "2017",
            to: "2018"
        },
        {
            jobTitle: "Customer Service Representative",
            employer: "Xerox",
            location: "Colorado Springs, CO",
            desc: "",
            from: "2015",
            to: "2016"
        },
    ],
    education: {
        program: "Fullstack Web Development and Computer Science",
        school: "Lambda School",
        from: "2019",
        to: "2021"
    }
};

export default resumeData;