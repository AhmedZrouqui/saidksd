import './App.scss';
import {ReactComponent as Menu} from './menu.svg'
import {useRef, useState, useEffect} from 'react'
import {TweenMax, Power3} from 'gsap';
import CustomCursor from './components/CustomCursor';
import {getAllPosts, getPostBySlug} from './contentful/contentful';

function App() {
  const [posts, setPosts] = useState(null);

  
  useEffect(() => {
    getAllPosts()
    .then((response) => setPosts(response))
  }, []);

  const onPostClick = (slug) => {
    console.log(slug)
    getPostBySlug(slug)
    .then((response) => console.log(response))
  }


  let link1 = useRef(null)
  let dot1 = useRef(null)
  let link2 = useRef(null)
  let dot2 = useRef(null)
  let link3 = useRef(null)
  let dot3 = useRef(null)
  let link4 = useRef(null)
  let first = useRef(null)
  let second = useRef(null)

  let presentation = useRef(null)





  const onMenuClick = (e) => {
    e.preventDefault();
    const app = document.getElementById("main");

    

      if(app.classList.contains("expand-menu")){

        TweenMax.staggerTo([link4, dot3, link3, dot2, link2, dot1, link1], .8, {opacity:0, y: 40, ease: Power3.easeOut}, .2)

        TweenMax.to(first, 2, {opacity: 0, x: -40, ease: Power3.easeOut}, 1)
        TweenMax.to(second, 2, {opacity: 0, x: -40, ease: Power3.easeOut}, 1.2)
        TweenMax.to(presentation, 2, {opacity: 0, ease: Power3.easeOut}, 1.5)

        setTimeout(() => {
          app.classList.remove("expand-menu");
        }, 600)
      }
      else{
        app.classList.add("expand-menu");
        
        TweenMax.staggerTo([link1, dot1, link2, dot2, link3, dot3, link4], .8, {opacity:1, y: 0, ease: Power3.easeOut}, .2)
        //TweenMax.staggerFrom([text1, text2, text3, text4, text5], .8, {opacity:0, x: 40, ease: Power3.easeOut}, .5)

        TweenMax.to(first, 2, {opacity: .1, x: 0, ease: Power3.easeOut}, 2)
        TweenMax.to(second, 2, {opacity: .1, x: 0, ease: Power3.easeOut}, 2.2)
        TweenMax.to(presentation, 4, {opacity: 1, ease: Power3.easeOut}, 2.6)
      
      }
  }

  return (
    <>
    
    <div className="App" id="main">
      <CustomCursor />
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
          <h2 ref={el => first = el} className="name first">
            SAID <br/>
          </h2>
          <h2 ref={el => second = el} className="name second">
            KASSED
          </h2>
          <h1 ref={el => presentation = el}>
            <span >I am a Paris based designer & art director<br/></span>
            <span >with a focus on user experience and interaction.<br/></span>
            <span >I create & build digital products for people and brands.<br/></span>
            <span >This is a feed of my work for desktops, mobile devices & installations.<br/></span>
            <span >I am available for freelance. Get in touch or Follow me.<br/></span>
          </h1>
        </section>
      </div>
      <div className="right-section">
        {
          posts &&
          posts.portfolioPostCollection.items.map((item) => 
          <article onClick={() => onPostClick(item.postSlug)}>
            <img src={item.postFileCollection.items[0].url} alt={item.postFileCollection.items[0].title} />
          </article>)
        }
      </div>
    </div>
    </>
  );
}

export default App;
