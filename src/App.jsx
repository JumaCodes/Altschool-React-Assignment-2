import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Users from './Pages/Users';
import Contact from './Pages/Contact';
import { useState } from 'react';
import SidebarLink from './components/SidebarLink';

function App() {
  const [toggleSidebar, setToggleSidebar] = useState(true);
  return (
    <div className="main__container">
      <div className="aside">
        {/* <div className="nav__toggler">
          <span></span>
        </div> */}



        {toggleSidebar && (
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
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/users' element={<Users />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
