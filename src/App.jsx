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
  const [toggleSidebar, setToggleSidebar] = useState(false);


  const openSidebar = (e) => {
    e.preventDefault()
    setToggleSidebar(true)
  }

  const closeSidebar = (e) => {
    e.preventDefault()
    setToggleSidebar(false)
  }

  return (
    <div className="main__container">
          <div className="nav__toggler" onClick={openSidebar}>
            <span></span>
          </div> 
      
         <div className={toggleSidebar ? 'aside sidebar__off' : 'aside'}>
           <div className='close' onClick={closeSidebar}>
            <i className='fa fa-times'></i>
           </div>
            <div className="logo">
            <Link exact to='/'><span>J</span>uma</Link>
          </div>
          <SidebarLink setToggleSidebar={setToggleSidebar} />
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
