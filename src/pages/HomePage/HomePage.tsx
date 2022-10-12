import React from 'react'
import './HomePage.css'
import Project from '../../components/Project/Project'
import Info from '../../components/Info/Info'
import Contact from '../../components/Contact/Contact'
import { projectInfo } from '../../interfaces'
import { projects } from '../../data'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <div className="home">
            <Info />
            <div className="projects">
                <h2>Projects</h2>
                <div className="projects-list" id="proj">
                    {projects.map((proj:projectInfo) => {
                        return <Link to={`home/${proj.title.replace(/ /g, '_')}`} className="link"><Project 
                        title={proj.title} 
                        date={proj.date} 
                        technologies={proj.technologies} 
                        quickBio={proj.quickBio}
                        img_link={proj.img_link}
                        info={proj.info}
                        link={proj.link}
                        /></Link>
                    })}
                </div>
            </div>
            <Contact />
            <div className="resume-container">
                <div className="resume">
                    <a href="https://docs.google.com/document/d/1WZ0h2VGNX2u1YPflv-dlHDbm2AgGBtFl7klTnJT8yho/edit?usp=sharing" target="_blank" rel="noreferrer"><h1>Resume</h1></a>
                </div>
            </div>
        </div>
    )
}

export default HomePage

