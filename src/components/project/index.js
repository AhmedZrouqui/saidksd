import React from 'react'
import './index.scss'

const ProjectsComponent = (props) => {

    const {article} = props;
    console.log(article)

    return (
        <div className="projectsComponent right-section">
            <div className="projectArticle">
            <h1>{article?.portfolioPostCollection.items[0].postTitle}</h1>
            <img src={article?.portfolioPostCollection.items[0].postFileCollection.items[0].url} alt={article?.portfolioPostCollection.items[0].postFileCollection.items[0].title}></img>
            <h4>{article?.portfolioPostCollection.items[0].postContent}</h4>
            </div>
        </div>
    )
}

export default ProjectsComponent
