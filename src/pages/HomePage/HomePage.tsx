import React from 'react'
import './HomePage.css'
import Project from '../../components/Project/Project'
import Info from '../../components/Info/Info'
import { projectInfo } from '../../interfaces'
import { projects } from '../../data'

const HomePage = () => {
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

