import React from 'react'
import './Info.css'

const Info = () => {
    return (
        <div className="info">
            <div className="info-imagecontainer">
                <img src="../../assets/images/bird.jpeg" alt="Me"/>
            </div>
            <div className="info-bio">
                <hr style={{width: "50%"}}/>
                <p>
                    Hey! I'm Stuart and I am a Computer Science Major (BS) at Pacific Lutheran University.
                    Welcome to my Portfolio where I outline projects I have created throughout my academic career. Feel
                    free to contact me through my socials at the bottom!
                </p>
                <hr style={{width: "50%"}}/>
            </div>
        </div>
    )
}

export default Info