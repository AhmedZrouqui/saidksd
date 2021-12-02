import React from 'react'
import Menu from "../menu"

import './index.scss'

const Layout = (props) => {
    return (
        <div className={`layout ${props.classname}`} id="main">
            <Menu />
            {props.children}
        </div>
    )
}

export default Layout
