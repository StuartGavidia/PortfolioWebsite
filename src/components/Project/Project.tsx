import React from 'react'
import './Project.css'
import { projectInfo } from '../../interfaces'

const Project = (props:projectInfo) => {
    return (
        <div className="project">
            <div>
                <img src={`../../assets/images/${props.img_link}`} className="project-image" alt="bird"/>
            </div>
            <div className="project-description">
                <h1>{props.info}</h1>
                <p className="project-date">{props.date}</p>
                <p className="project-technologies">{props.technologies}</p>
                <p>{props.quickBio}</p>
            </div>
        </div>
    )
}

export default Project
