import { motion } from 'framer-motion';


function Contact() {
  return (
    <section class="service section">
      <div class="container">
        <div class="row">
          <div class="section__title padd__15">
            <h2>Contact</h2>
          </div>
        </div>
      </div>

      <form className='form'>
        <div className='short__input'>
          <input type='text' placeholder='Name' />
          <input type='text' placeholder='Email' />
        </div>

        <div className='short__input'>
          <input placeholder='Message' />
          <input placeholder='Subject' />
        </div>

        <textarea type='text' placeholder='Message' />
        <motion.button type="submit" className='btn'
          whileTap={{ scale: 0.8 }}
          transition={{ duration: 0.5 }}>
          Send
        </motion.button>
      </form>
    </section>
  )
}

export default Contact