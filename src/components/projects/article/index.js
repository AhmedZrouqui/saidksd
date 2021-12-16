import React from 'react'
import './index.scss';
import { useNavigate } from "react-router-dom";


const Article = (props) => {

    let navigate = useNavigate()

    const onArticleClick = (slug) => {
        navigate(`/projects/${slug}`)
    }
    

    return (
        <article key={props.id} onClick = {() => onArticleClick(props.postSlug)}>
            <img src={props.imageUrl} alt={props.imageAlt}/>
        </article>
    )
}

export default Article
