import React from 'react'
import Article from './article';
import './index.scss'

const ProjectsComponent = (props) => {

    const {articles} = props;

    return (
        <div className="projectsComponent">
            {
                articles &&
                articles.portfolioPostCollection.items.map(
                    (item, id) => 
                    <Article 
                        id={id} 
                        imageUrl={item.postFileCollection.items[0].url} 
                        imageAlt={item.postFileCollection.items[0].title} 
                        postSlug={item.postSlug} 
                    />
                )
            }
        </div>
    )
}

export default ProjectsComponent
