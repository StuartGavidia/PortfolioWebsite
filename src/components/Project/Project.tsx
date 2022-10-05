import React from 'react'
import './Project.css'
import { projectInfo } from '../../interfaces'

const Project = (props:projectInfo) => {
    return (
        <div className="project">
            <div>
                <img src={`../../assets/images/${props.img_link}`} className="project-image" alt="bird"/>
            </div>
            <div>
                <h1>{props.info}</h1>
                <p>{props.date}</p>
                <p>{props.technologies}</p>
                <p>{props.quickBio}</p>
            </div>
        </div>
    )
}

export default Project
