import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';


function ContactUsForm() {
  const [formStatus, setFormStatus] = useState('Envoyer');
  const [name, setName] = useState('');
  const [prenom, setPrenom] = useState('');

  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormStatus('Envoi en cours...');
    
    const fullMessage = `Reclamation\nLe réclamant: ${name} ${prenom}\nSon e-mail: ${email}\nMessage: ${message}  `;
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
      setPrenom('');


    }catch (error) {
      // show error message to the user
      alert('Failed to send your message. Please try again later.');
    }

    setFormStatus('Envoyé!');
  };

  return (
    <Container className="mt-5">
      <h2 className="mb-3">Contactez-nous</h2>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formName">
            <Form.Label>Nom</Form.Label>
            <Form.Control type="text" placeholder="Entrez votre nom"  onChange={(event) => setName(event.target.value)}
 required />
          </Form.Group>
          <Form.Group as={Col} controlId="formLastName">
            <Form.Label>Prénom</Form.Label>
            <Form.Control type="text" placeholder="Entrez votre prénom"         onChange={(event) => setPrenom(event.target.value)}
 required />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Entrez votre email"         onChange={(event) => setEmail(event.target.value)}
 required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={5} placeholder="Entrez votre message"         onChange={(event) => setMessage(event.target.value)}
 required />
        </Form.Group>
        <Button style={{backgroundColor:"#3bb19b",borderColor:"#3bb19b"}} className= "btn btn-primary d-block mx-auto my-4" type="submit">{formStatus}</Button>
      </Form>
    </Container>
  );
}

export default ContactUsForm;
