import { useState } from 'react';
import emailjs from '@emailjs/browser'
import '../styles/form.css'


function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e) {
    e.preventDefault();
    console.log(name);

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    }

    emailjs.send("service_r7z901o", "template_jban28i", templateParams, "tFYX2ohZAd5ILJB34" )
    .then((res) => {
      alert("EMAIL ENVIADO")
      setEmail('')
      setName('')
      setMessage('')
    }, (err) => {
      console.log("ERRO:", err)
    })
  }

  return (
    <section id="contact">
        <h2>Contato</h2>
        <h3>FALE COMIGO</h3>

      <form className='contact-form' onSubmit={sendEmail}>
        <input 
          className="input"
          type="text"
          placeholder="Nome"
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        
        <input 
          className="input"
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
          value={email}
        />

        <textarea 
          className="textarea"
          placeholder="Mensagem"
          onChange={(e) => setMessage(e.target.value)}
          required
          value={message}
        />

        <button type="submit" value="Enviar">Enviar Mensagem</button>
      </form>
    </section>
  );
}

export default ContactForm;