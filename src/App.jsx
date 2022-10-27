import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Users from './Pages/Users';
import Contact from './Pages/Contact';
import PageNotFound from './Pages/PageNotFound';
import { useState } from 'react';
import SidebarLink from './components/SidebarLink';

import {ErrorBoundary} from './components/ErrorBoundary';

function App() {
  const [toggleSidebar, setToggleSidebar] = useState(true);

  return (
    <div className="main__container">
        <div className="aside">
          {/* <div className="nav__toggler">
            <span></span>
          </div> */}

          

          {toggleSidebar &&  (
            <>
            <div className="logo">
            <Link exact to='/'><span>J</span>uma</Link>
          </div>
          <SidebarLink />
          </>
          )
        }
        </div>

        <div className="main__content">
            <Routes>
              <Route exact  path='/' element={<Home />} />
              <Route exact  path='/about' element={<About />} />
              <Route exact  path='/services' element={<Services />} />
              <Route exact  path='/users' element={<ErrorBoundary><Users /> </ErrorBoundary>} />
              <Route exact  path='/contact' element={<Contact />} />
              <Route path='*' element={<PageNotFound />} />
            </Routes>
        </div>
    </div>
  );
}

export default App;
