import { projectInfo } from './interfaces'

export const projects:projectInfo[] = [
    {
        title: "PLU Learn",
        date: "March 2022",
        technologies: "Javascript, CSS, HTML, React, Weather API, Netlify",
        quickBio: "A web application for chemistry students at PLU. Letting them hone the skills taught in second semester chemistry.",
        img_link:  "plulearn.png",
        info: {
            description1: "At the time I was taking Chemistry. I utilized my skills in React to develop a user friendly web application for undergrad students taking Gen Chem. The app displayed the weather at PLU and had a dataset of almost 180 multiple choice questions across 8 units. The web app would tell the user whether they got the answer correct, and displayed links related to the question for extra help."
        }
    },
    {
        title: "Notedle",
        date: "May 2022",
        technologies: "Typescript, CSS, HTML, React, Tone.js, Snowpack, Firebase",
        quickBio: "Inspired by wordle, a music based game where the user has to figure out the beats to the song!",
        img_link:  "notedle.png",
        info: {
            description1: "Hello there"
        }
    },
    {
        title: "Solar System",
        date: "July 2022",
        technologies: "Typescript, HTML, CSS, Three.js",
        quickBio: "Replicating our solar system by emulating gravity and the orbits of planets.",
        img_link:  "solarsystem.png",
        info: {
            description1: ""
        }
    },
    {
        title: "Jammming",
        date: "April 2022",
        technologies: "Javascript, HTML, CSS, React, Spotify API",
        quickBio: "Want to save a playlist onto your Spotify account? Jammming does just that (Codecademy Project).",
        img_link:  "jammming.png",
        info: {
            description1: ""
        }
    },
    {
        title: "PLU Programming Party Website",
        date: "September 2022 (Currently Building)",
        technologies: "Typsecript, HTML, CSS, React",
        quickBio: "Creating a website to showcase projects developed by students at Pacific Lutheran University.",
        img_link: "programmingpartyweb.png",
        info: {
            description1: ""
        }
    }
]
