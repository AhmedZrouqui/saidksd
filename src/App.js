import './App.scss';
import {ReactComponent as Menu} from './menu.svg'

function App() {

  const onMenuClick = (e) => {
    e.preventDefault();
    const menu = document.getElementById("menu");
    menu.classList.toggle("expand-section");
  }

  return (
    <div className="App">
      <div className="left-section" id="menu">
        <div className="menu-button" onClick={onMenuClick}>
          <Menu />
        </div>
        <section>
          <ul>
            <li>Work</li>
            <li className="dot">•</li>
            <li>Journal</li>
            <li className="dot">•</li>
            <li>About</li>
            <li className="dot">•</li>
            <li>Contact</li>
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
        <article>
          article1
        </article>
      </div>
    </div>
  );
}

export default App;
