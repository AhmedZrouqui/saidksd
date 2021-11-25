import './App.scss';
import {ReactComponent as Menu} from './menu.svg'
import {useEffect, useState, useRef} from 'react'
import images from './images'
import {TweenMax, Power3} from 'gsap';

function App() {

  let link1 = useRef(null)
  let dot1 = useRef(null)
  let link2 = useRef(null)
  let dot2 = useRef(null)
  let link3 = useRef(null)
  let dot3 = useRef(null)
  let link4 = useRef(null)


  const onMenuClick = (e) => {
    e.preventDefault();
    const app = document.getElementById("main");
    app.classList.toggle("expand-menu");
    if(app.classList.contains("expand-menu")){
      TweenMax.staggerFrom([link1, dot1, link2, dot2, link3, dot3, link4], .8, {opacity:0, y: 40, ease: Power3.easeOut}, .2)
    }
    else{
      TweenMax.staggerTo([link4, dot3, link3, dot2, link2, dot1, link1], .8, {opacity:0, y: 40, ease: Power3.easeOut}, .2)
    }
  }

  return (
    <div className="App" id="main">
      <div className="left-section" id="menu">
        <div className="menu-button" onClick={onMenuClick}>
          <Menu />
        </div>
        <section>
          <ul>
            <li ref={el => link1 = el}>Work</li>
            <li ref={el => dot1 = el} className="dot">•</li>
            <li ref={el => link2 = el}>Journal</li>
            <li ref={el => dot2 = el} className="dot">•</li>
            <li ref={el => link3 = el}>About</li>
            <li ref={el => dot3 = el} className="dot">•</li>
            <li ref={el => link4 = el}>Contact</li>
          </ul>
          <h2>
            SAID <br/>
            KASSED
          </h2>
          <h1>
            I am a Paris based designer & art director<br/>
            with a focus on user experience and interaction.<br/>
            I create & build digital products for people and brands.<br/>
            This is a feed of my work for desktops, mobile devices & installations.<br/>
            I am available for freelance. Get in touch or Follow me.<br/>
          </h1>
        </section>
      </div>
      <div className="right-section">
        <article>
          <img src={images.image1}></img>
        </article>
        <article>
          article1
        </article>
        <article>
          article1
        </article>
        <article>
          article1
        </article>
        <article>
          article1
        </article>
        <article>
          article1
        </article>
        <article>
          article1
        </article>
        <article>
          article1
        </article>
        <article>
          article1
        </article>
        <article>
          article1
        </article>
      </div>
    </div>
  );
}

export default App;
