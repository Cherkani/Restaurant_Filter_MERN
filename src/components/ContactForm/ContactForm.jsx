import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function ContactUsForm() {
  const [formStatus, setFormStatus] = useState('Envoyer');

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormStatus('Envoi en cours...');
    // Code pour envoyer le formulaire
    // ...
    setFormStatus('Envoyé!');
  };

  return (
    <Container className="mt-5">
      <h2 className="mb-3">Contactez-nous</h2>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formName">
            <Form.Label>Nom</Form.Label>
            <Form.Control type="text" placeholder="Entrez votre nom" required />
          </Form.Group>
          <Form.Group as={Col} controlId="formLastName">
            <Form.Label>Prénom</Form.Label>
            <Form.Control type="text" placeholder="Entrez votre prénom" required />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Entrez votre email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={5} placeholder="Entrez votre message" required />
        </Form.Group>
        <Button style={{backgroundColor:"#3bb19b",borderColor:"#3bb19b"}} className= "btn btn-primary d-block mx-auto my-4" type="submit">{formStatus}</Button>
      </Form>
    </Container>
  );
}

export default ContactUsForm;
