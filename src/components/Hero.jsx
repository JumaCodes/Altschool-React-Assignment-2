import React from 'react'
import {Link} from 'react-router-dom';
import Cattoon from '../images/cattoon.png'

function Hero() {
  return (
        <div className="container">
          <div className="row">
            <div className="home__info padd__15">
              <h3 className="hello">Hello, my name is  
              <span className="name"> Olumese Steve-John</span></h3>
              <h3 className="my__profession">I'm a <span className="typing">web
                  designer</span></h3>
              <p>I'm a web Designer with the extensive experience for over 3
                years. My expertise is to create and design website, create
                content, and many more...</p>
              <Link to="/contact" className="btn hire__me">Hire Me</Link>
            </div>

            <div className="home__img padd__15">
              <img src={Cattoon} alt="Me" />
            </div>
          </div>
        </div>
  )
}

export default Hero