import React from 'react'
import '../Styles/Graph.css'

const GraphShow = ({text, progress,width}) => {
    return (
        <div className="SkillsSection">
            <div className="skills-container">
                <h5 className="skill-title">{text}</h5>
                <div className="skill-bar">
                    <p className="skill-text">{progress}</p>
                    <div className="skill-progress">
                        <div className="progress">
                            <div className="inner-pregress" style={{ width: width }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GraphShow
