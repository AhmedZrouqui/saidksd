import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";

import { Suspense, lazy } from 'react';
import './global.scss';
import delayPage from './utils/promiseDelay';

const Projects = lazy(() => delayPage(import("./pages/projects")))
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
            <Route path="*" element={Page404} />
        </Routes>
      </Suspense>
    </Router>
    
  );
}

export default App;
