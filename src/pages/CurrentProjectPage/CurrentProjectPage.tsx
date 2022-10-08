import React from 'react'
import './CurrentProjectPage.css'
import { useParams } from 'react-router-dom'
import { projects } from '../../data'


const CurrentProjectPage = () => {

    //grab project name
    const { project } = useParams<{project: string}>()

    //format project name to then grab title from object
    const formatTitle = project.replace(/_/g, " ")

    //grab corresponiding object from data
    let index = 0
    for(let i = 0; i < projects.length; i++){
        if(projects[i].title === formatTitle){
            index = i
            break
        }
    }

    const wholeProject = projects[index]


    return (
        <div className="currentproject">
            <div className="currentproject-title">
                <h1>{wholeProject.title}</h1>
                <img src={`../../assets/images/${wholeProject.img_link}`} alt={wholeProject.title}/>
            </div>
            <div className="currentproject-buttoncontainer">
                <a href={wholeProject.link} target="_blank" rel="noreferrer"><h1>Open Application</h1></a>
            </div>
            <div className="currentproject-description">
                <p>{wholeProject.info.description1}</p>
                <p>{wholeProject.info.description2}</p>
                <p>{wholeProject.info.description3}</p>
            </div>
        </div>
    )
}


export default CurrentProjectPage