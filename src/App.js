import './global.scss';

import CustomCursor from './components/customCursor';
import Menu from './components/menu';
import Projects from './pages/projects';

function App() {

  return (
    <div className="App" id="main">
      <CustomCursor />
      <Menu />
      <Projects />
    </div>
  );
}

export default App;
