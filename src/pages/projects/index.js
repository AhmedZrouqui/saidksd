import React, {useEffect, useState} from 'react'
import ProjectsComponent from '../../components/projects'
import { getAllPosts } from '../../contentful/contentful';
import './index.scss'

const Projects = () => {

    const [articles, setArticles] = useState(null);

  
    useEffect(() => {
        getAllPosts()
        .then((response) => setArticles(response))
    }, []);

    return (
        <div className="mainPage projectsPage">
            <ProjectsComponent articles={articles} setArticles={setArticles}/>
        </div>
    )
}

export default Projects
