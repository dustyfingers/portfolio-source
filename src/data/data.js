const resumeData = {
    contact: [
        {
            link: "mailto:thereallouiew@gmail.com?subject=Let's%20work%20together!",
            iconLink: "/images/contact-icons/email.svg",
            alt: "email icon"
        },
        {
            link: "tel:4094609950",
            iconLink: "/images/contact-icons/phonebook.svg",
            alt: "phone icon"
        },
        {
            link: "https://www.github.com/dustyfingers",
            iconLink: "/images/contact-icons/github.svg",
            alt: "github icon"
        }
    ],
    skills: [
        "HTML & CSS",
        "LESS/SASS",
        "PHP/Wordpress/UIKit",
        "Bootstrap 3/4/5",
        "Javascript(ES6+)",
        "React.js",
        "Node.js/Express",
        "Python/Django",
        "MongoDB",
        "mySQL/postgreSQL",
        "Git/Github",
        "C#",
        "Unity",
        "Photoshop"
    ],
    projects: [
        {
            title: "WellDone",
            desc:
                "I was part of the team tasked with building the backend and reworking the reports and dashboard pages. I personally used Express/postgreSQL on this project.",
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
                "I was tasked with building the landing page for a web app alongside a remote UI team. We built the about page and the landing page using Sass, Bootstrap 4 and Javascript.",
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
                "My portfolio was created from scratch with react, and is hosted using AWS Amplify's amazing CI/CD services.",
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
        program: "Bootcamp Program in Fullstack Web Development and Computer Science (Hired Out)",
        school: "Lambda School",
        from: "2019",
        to: "2019"
    }
};

export default resumeData;