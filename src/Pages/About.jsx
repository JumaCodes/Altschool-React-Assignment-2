import React from 'react'

function About() {
  return (
    <section className="about section">
        <div className="container">
          <div className="row">
            <div className="section__title padd__15">
              <h2>About Me</h2>
            </div>
          </div>

          <div className="row">
            <div className="about__content padd__15">
              <div className="row">
                <div className="about__text padd__15">
                  <h3>I'm Steve-John Olumese and <span>Web Developer</span></h3>
                  <p>I'm a native of Edo State, Nigeria. I have 3 years of
                    experience as a frontend web developer working with html,
                    css, javascript and some javascript libaries like e.g,
                    react, nextjs etc. I also love working with other extenal
                    libaries to make the ui more flexible and beautify for a
                    client or company.</p>
                </div>
              </div>

              <div className="row">
                <div className="personal__info padd__15">
                  <div className="row">
                    <div className="info__item padd__15">
                      <p>Birthday : <span>25 march 1995</span> </p>
                    </div>
                    <div className="info__item padd__15">
                      <p>Age : <span>27</span> </p>
                    </div>
                    <div className="info__item padd__15">
                      <p>Website : <span>www.domain.com</span> </p>
                    </div>
                    <div className="info__item padd__15">
                      <p>Email : <span>info@gmail.com</span> </p>
                    </div>
                    <div className="info__item padd__15">
                      <p>Degree : <span>CS</span> </p>
                    </div>
                    <div className="info__item padd__15">
                      <p>Phone : <span>+2349012345</span> </p>
                    </div>
                    <div className="info__item padd__15">
                      <p>City : <span>Lagos</span> </p>
                    </div>
                    <div className="info__item padd__15">
                      <p>Freelance : <span>Available</span> </p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="buttons padd__15">
                      <a href="#" className="btn">Download CV</a>
                      <a href="#contact" className="btn hire__me">Hire Me</a>
                    </div>
                  </div>
                </div>

                <div className="skills padd__15">
                  <div className="row">
                    <div className="skill__item padd__15">
                      <h5>JS</h5>
                      <div className="progress">
                        <div className="progress__in"  style={{width: '86%'}}></div>
                        <div className="skill__percent">86%</div>
                      </div>
                    </div>

                    <div className="skill__item padd__15">
                      <h5>React</h5>
                      <div className="progress">
                        <div className="progress__in"  style={{width: '76%'}}></div>
                        <div className="skill__percent">76%</div>
                      </div>
                    </div>

                    <div className="skill__item padd__15">
                      <h5>HTML</h5>
                      <div className="progress">
                        <div className="progress__in"  style={{width: '96%'}}></div>
                        <div className="skill__percent">96%</div>
                      </div>
                    </div>

                    <div className="skill__item padd__15">
                      <h5>BOOTSTRAP</h5>
                      <div className="progress">
                        <div className="progress__in" style={{width: '66%'}}></div>
                        <div className="skill__percent">66%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="education padd__15">
                  <h3 className="title">Education</h3>
                  <div className="row">
                    <div className="timeline__box padd__15">
                      <div className="timeline shadow__dark">
                        <div className="timeline__item">
                          <div className="circle__dot"></div>
                          <h3 className="timeline__date">
                            <i className="fa fa-calendar"></i> 2019 - 2020
                          </h3>
                          <h4 className="timeline__title">Master in Javascript</h4>
                          <p className="timeline__text">Lorem ipsum dolor sit amet
                            consectetur, adipisicing elit. Assumenda nihil ea
                            rem aut expedita excepturi corporis, officiis quos
                            debitis maxime.</p>
                        </div>

                        <div className="timeline__item">
                          <div className="circle__dot"></div>
                          <h3 className="timeline__date">
                            <i className="fa fa-calendar"></i> 2020 - 2021
                          </h3>
                          <h4 className="timeline__title">Master in React JS</h4>
                          <p className="timeline__text">Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Nisi cupiditate culpa,
                            vitae dolor quis necessitatibus deserunt adipisci
                            cum assumenda debitis?</p>
                        </div>

                        <div className="timeline__item">
                          <div className="circle__dot"></div>
                          <h3 className="timeline__date">
                            <i className="fa fa-calendar"></i> 2021 - 2022
                          </h3>
                          <h4 className="timeline__title">Master in Next JS</h4>
                          <p className="timeline__text">Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Nisi cupiditate culpa,
                            vitae dolor quis necessitatibus deserunt adipisci
                            cum assumenda debitis?</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="experience padd__15">
                  <h3 className="title">Experience</h3>
                  <div className="row">
                    <div className="timeline__box padd__15">
                      <div className="timeline shadow__dark">
                        <div className="timeline__item">
                          <div className="circle__dot"></div>
                          <h3 className="timeline__date">
                            <i className="fa fa-calendar"></i> 2019 - 2000
                          </h3>
                          <h4 className="timeline__title">Master in Javascript</h4>
                          <p className="timeline__text">Lorem ipsum dolor sit amet
                            consectetur, adipisicing elit. Assumenda nihil ea
                            rem aut expedita excepturi corporis, officiis quos
                            debitis maxime.</p>
                        </div>
                  
                        <div className="timeline__item">
                          <div className="circle__dot"></div>
                          <h3 className="timeline__date">
                            <i className="fa fa-calendar"></i> 2000 - 2021
                          </h3>
                          <h4 className="timeline__title">Master in React JS</h4>
                          <p className="timeline__text">Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Nisi cupiditate culpa,
                            vitae dolor quis necessitatibus deserunt adipisci
                            cum assumenda debitis?</p>
                        </div>
                  
                        <div className="timeline__item">
                          <div className="circle__dot"></div>
                          <h3 className="timeline__date">
                            <i className="fa fa-calendar"></i> 2021 - 2022
                          </h3>
                          <h4 className="timeline__title">Master in Next JS</h4>
                          <p className="timeline__text">Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Nisi cupiditate culpa,
                            vitae dolor quis necessitatibus deserunt adipisci
                            cum assumenda debitis?</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default About