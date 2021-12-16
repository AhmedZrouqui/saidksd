import React from 'react'
import './index.scss'

const ProjectsComponent = (props) => {

    const {article} = props;

    return (
        <div className="projectsComponent right-section">
            {console.log(article)}
        </div>
    )
}

export default ProjectsComponent
