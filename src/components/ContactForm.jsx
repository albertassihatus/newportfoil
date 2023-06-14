import React, { useState } from 'react';
import '../styles/Form.css' 

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    console.log(e.target.value);
  };
    return (
      <section id="contact">
        <h2>Contato</h2>
        <h3>FALE COMIGO</h3>
        <form action="" className='contact-form'>
            <input type="text" placeholder='Nome Completo' id="name" value={name} onChange={handleNameChange}  />
            <input type="email" placeholder='Email' id="email" value={email} onChange={handleEmailChange} />
            <textarea cols="25" rows="5" placeholder='Menssagem' id="message" value={message} onChange={handleMessageChange} />
            <button>Enviar Mensagem</button>
        </form>
      </section>
    );
  }

export default ContactForm;
