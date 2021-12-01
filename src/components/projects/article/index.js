import React from 'react'
import './index.scss';
import { getPostBySlug } from '../../../contentful/contentful'


const Article = (props) => {

    const onArticleClick = (slug) => {
        getPostBySlug(slug)
        .then((response) => console.log(response))
    }
    

    return (
        <article key={props.id} onClick = {() => onArticleClick(props.postSlug)}>
            <img src={props.imageUrl} alt={props.imageAlt}/>
        </article>
    )
}

export default Article
