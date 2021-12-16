import CustomCursor from './components/customCursor';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";

import { Suspense, lazy } from 'react';
import './global.scss';

const Projects = lazy(() => import("./pages/projects"))
const Project = lazy(() => import("./pages/project"))
const Page404 = () => <h1>404 Not Found</h1>;



function App() {

  return (
    <Router>
      <Suspense
        fallback={
          <div
            className="loading-spinner"
            role="status">
            aa
          </div>
        }
      >
        <Routes>
            {
              ['/', '/projects'].map(path => 
                <Route path={path} exact element={<Projects />} />
              )
            }
            {
              ['/projects/:slug', '/project/:slug'].map(path => 
                <Route path={path} exact element={<Project />} />
              )
            }
            <Route path="*" element={Page404} />
        </Routes>
      </Suspense>
    </Router>
    
  );
}

export default App;
