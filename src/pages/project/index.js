import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import Layout from '../../components/layout';
import ProjectComponent from '../../components/project';
import { getPostBySlug } from '../../contentful/contentful';
import './index.scss'

const Project = () => {

    const [article, setArticle] = useState(null);
    const {slug} = useParams();

  
    useEffect(() => {
        getPostBySlug(slug)
        .then((response) => setArticle(response))
    }, [slug]);

    return (
        <Layout classname="mainPage projectPage"> 
            <ProjectComponent article={article} setArticle={setArticle} />
        </Layout>
    )
}

export default Project
