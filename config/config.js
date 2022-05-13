var settings = {
    // common elements such as name, handles, etc
    name: "Finn Lancaster",
    profile: "assets/images/me.png",
    description: "Student, developer, ethical hacker, and pianist with a passion for the latest tech, AI, and the open-source community.",
    email: "flancast90@gmail.com",
    github: "flancast90",

    navLinks: [
        // all links must have a "text" attribute and a "link"
        // attribute (selector). Include "external:true" to link
        // to an outside page.
        {
            text: "Experience",
            link: "#experience",
            external: false
        },
        {
            text: "Projects",
            link: "#projects",
            external: false
        },
        {
            text: "Contact",
            link: "#contact",
            external: false
        },
        {
            text: "Resume",
            link: "https://drive.google.com/file/d/1CywkswtJvVZVIcAXLmzmDbC-2n4_1Jr_/view",
            external: true
        }
    ],
    
    // Experience timeline
    experience: [
        {
            date: "August 2019 - June 2021",
            title: "Santa Fe Catholic High School",
            description: "Studied on accelerated dual-enrollment track."
        },
        {
            date: "2020 - Present",
            title: "Publix Supermarkets",
            description: "Cashier and Customer Service clerk focused on promoting customer interactions and sales for the store"
        },
        {
            date: "2020 - Present",
            title: "ARC Animal Rescue",
            description: "Built ARC Animal Rescue website, including the creation and integration of an entirely new and dynamic Content Management System."
        },
        {
            date: "2021 - Present",
            title: "Polk State College",
            description: "Continued high school on accelerated learning course as a student within Polk State College in order to receive Associate of Arts degree upon high school graduation."
        },
        {
            date: "2022 - Present",
            title: "Finned Ad Services",
            description: "Built a software-as-a-service company promoting an Artificial Intelligence and analytics platform within the digital signage industry."
        }
    ],

    // Projects: no info needed. Utilises GitHub API

    contact: {
        linkedin: {
            handle: "@finn-lancaster",
            link: "https://www.linkedin.com/in/finn-lancaster-a21671219/"
        },
        github: {
            handle: "@flancast90",
            link: "https://github.com/flancast90"
        },
        discord: {
            handle: "@flancast90",
            link: "https://discord.com/channels/@me"
        },
        gmail: {
            handle: "flancast90@gmail.com",
            link: "mailto:flancast90@gmail.com"
        }
    }
}