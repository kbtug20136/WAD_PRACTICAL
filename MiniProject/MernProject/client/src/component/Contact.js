import {useRef} from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form =useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bnd8zfe', 'template_uhqnblk', form.current, 'kA1-fea8sfGKvpVrF')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }
  return (
    <div className="container">
        <h1>Contact Us</h1>
        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required defaultValue={""} />
          <input type="submit" defaultValue="Submit" />
        </form>
      </div>

  )
}

export default Contact