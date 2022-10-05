import React from 'react'
import './HomePage.css'
import Project from '../../components/Project/Project'
import Info from '../../components/Info/Info'

const HomePage = () => {



    return (
        <div className="home">
            <Info />
            <div className="projects">
                <Project />
            </div>
        </div>
    )
}

export default HomePage

