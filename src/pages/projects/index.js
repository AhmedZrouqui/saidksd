import React, {useEffect, useState} from 'react'
import Layout from '../../components/layout';
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
        <Layout classname="mainPage projectsPage"> 
            <ProjectsComponent articles={articles} setArticles={setArticles} />
        </Layout>
    )
}

export default Projects
