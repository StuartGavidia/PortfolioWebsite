import React from 'react'
import './HomePage.css'
import Project from '../../components/Project/Project'
import Info from '../../components/Info/Info'
import { projectInfo } from '../../interfaces'

const HomePage = () => {

    const projects:projectInfo[] = [
        {
            info: "PLU Learn",
            date: "March 2022",
            technologies: "Javascript, CSS, HTML, React, Weather API, Netlify",
            quickBio: "A web application for chemistry students at PLU. Letting them hone the skills taught in second semester chemistry.",
            img_link:  "plulearn.png"
        },
        {
            info: "Notedle",
            date: "May 2022",
            technologies: "Typescript, CSS, HTML, Tone.js, Snowpack, Firebase",
            quickBio: "Inspired by wordle, a music based game where the user has to figure out the beats to the song!",
            img_link:  "notedle.png"
        },
        {
            info: "Solar System",
            date: "July 2022",
            technologies: "Typescript, HTML, CSS, Three.js",
            quickBio: "Replicating our solar system by emulating gravity and the orbits of planets.",
            img_link:  "solarsystem.png"
        },
        {
            info: "Jammming",
            date: "April 2022",
            technologies: "Javascript, HTML, CSS, Spotify API",
            quickBio: "Want to save a playlist onto your Spotify account? Jammming does just that (Codecademy Project)",
            img_link:  "jammming.png"
        }
    ]

    return (
        <div className="home">
            <Info />
            <div className="projects">
                {projects.map((proj:projectInfo) => {
                    return <Project 
                    info={proj.info} 
                    date={proj.date} 
                    technologies={proj.technologies} 
                    quickBio={proj.quickBio}
                    img_link={proj.img_link}
                    />
                })}
            </div>
        </div>
    )
}

export default HomePage

