import React, { useState } from 'react';
import axios from 'axios';

const Formulaire = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');


  const handleSubmit = async (event) => {
    event.preventDefault();

    const fullMessage = `Reclamation\nLe réclamant: ${name}\nSon e-mail: ${email}\nMessage: ${message}  `;
    const rec='Reclamation';

    try {
      await axios.post('http://localhost:3000/api/Formulaire/send-email', {
        name,
        subject:rec,
        text:fullMessage,
        
      });

      // show success message to the user
      alert('Your message has been sent successfully!');

      // clear the form
      setName('');
      setMessage('');
      setEmail('');

    } catch (error) {
      // show error message to the user
      alert('Failed to send your message. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />
<label htmlFor="email">email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />
      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        required
      ></textarea>

      <button type="submit">Send</button>
    </form>
  );
};

export default Formulaire;
