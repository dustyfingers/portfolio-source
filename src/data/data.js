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
        "React",
        "Redux",
        "Node.js/Express",
        "mySQL/postgreSQL",
        "MongoDB",
        "Firebase",
        "Javascript(ES6+)",
        "HTML",
        "CSS/SASS/LESS",
        "jQuery",
        "PHP",
        "Wordpress/UIKit",
        "Bootstrap 3/4/5",
        "AWS Amplify",
        "AWS S3",
        "Heroku",
        "Git/Github",
        "Python"
    ],
    projects: [
        {
            title: "louiemadeit Beat Store (under construction!)",
            desc:
                "I designed, built, tested and deployed this application in it's entirety. The front end is built using React + Redux and Bootstrap 5, and is hosted using AWS Amplify. I built the backend with Node.js/Express + MongoDB, and AWS S3 for file storage. The backend is hosted on Heroku.",
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
                "I collaborated with ~10 other developers remotely to finish this project for a major beta release. My team implemented an entire new UI in the process. I personally helped build the site’s search functionality.",
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
                "I helped build the backend and reworked the reports and dashboard pages for a non-profit org that provides well sensors and a sensor monitoring platform to communities in developing countries. I personally used Express/postgreSQL and Next.js on this project.",
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
                "I built the landing page for a mock web-app alongside a remote UX Design team and one other developer. I built the about page and the landing page using HTML, Sass, Bootstrap 4 and raw Javascript(ES6+). The project is hosted on Netlify.",
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
                "I built my portfolio with React + SASS + Bootstrap 5, and I host it using AWS Amplify's amazing CI/CD services.",
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
            jobTitle: "Jr. Web Application Developer",
            employer: "Zaronology, Inc",
            bullets: [
                'Collaborated with a distributed remote team to build full stack features for a members-only streaming service, including the administration interface',
                'Built marketing sites for commercial film releases and retreats',
                'Built and optimized Shopify sites for mobile screens and implemented new features as requested by clients',
                'Tech Stack: React, SASS, Node.js, Bootstrap, Handlebars.js, JS, HTML5, CSS3, jQuery, Shopify, MySQL',
            ],
            location: "Remote",
            from: "June 2021",
            to: "Current"
        },
        {
            jobTitle: "Software Developer",
            employer: "FitSW",
            bullets: [
                'Designed, built and tested several product-critical client facing features, such as the ability for personal trainers to create subscriptions their clients can subscribe to',
                'Built analytics and squashed bugs as they were reported by users',
                'The features I built caused an over 100% increase in fee revenue on our Stripe Connect platform by allowing personal trainers to directly sell services to their clients in-app',
                'Tech stack: PHP, MySQL,  jQuery, JS, Bootstrap, HTML5 and CSS3',
            ],
            location: "Colorado Springs, CO",
            from: "January 2020",
            to: "May 2020"
        },
        {
            jobTitle: "Junior Web Developer",
            employer: "NativeRank",
            bullets: [
                'Built around 4 pixel-perfect custom web solutions per month for enterprise level consumers, leveraging mockups provided by the design team',
                'Tech stack: HTML/CSS, LESS, UI Kit, Handlebars.js, PHP, MySQL, and Wordpress'
            ],
            location: "Denver, CO",
            from: "September 2019",
            to: "January 2020"
        },
        {
            jobTitle: "Phone Repair Technician",
            employer: "Dr. PhoneFix",
            location: "Colorado Springs, CO",
            from: "2017",
            to: "2018"
        },
        {
            jobTitle: "Customer Service Representative",
            employer: "Xerox",
            location: "Colorado Springs, CO",
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