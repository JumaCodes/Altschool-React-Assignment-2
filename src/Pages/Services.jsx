import React, {useState} from 'react'
import { questionAndAnswer } from '../data'

function Services() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }

    setSelected(i)
  };

  
  return (
     <section class="service section">
      <div class="container">
        <div class="row">
          <div class="section__title padd__15">
            <h2>Services</h2>
          </div>
        </div>
      </div>

        <div className='wrapper'>
          <h2 className='title'>Q&A</h2>
          <div className='accordion'>

          {questionAndAnswer.map((item, i) => (
            <div className='item'>
              <div className='question' onClick={() => toggle(i)}>
              <h1>{item.question}</h1>
              {selected === i ? <span className='fa fa-minus'></span> : <span className='fa fa-plus'></span>}
              </div>

              <div className={selected === i ? 'answer show' : 'answer'}>
                {item.answer}
              </div>
            </div>
          ))}
        
        </div>
      </div>
    </section>
  )
}

export default Services