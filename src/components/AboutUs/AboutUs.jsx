import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './AboutUse.css'

function AboutUs() {

  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h1 id="" className="text-center mb-5">Nos valeurs et principes d'engagement</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="lead">
            Chez <b>FoodieFinder</b> , nous sommes passionnés par la nourriture et la satisfaction de nos clients est notre priorité absolue. Nous croyons fermement en la qualité, l'accompagnement et la satisfaction de nos clients, et nous travaillons chaque jour pour garantir que ces principes guident tout ce que nous faisons.
          </p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <h2 id="title"
          >La satisfaction</h2>
          <p>
            La satisfaction de nos clients est notre principale préoccupation. Nous sommes fiers de fournir une expérience culinaire de qualité supérieure à nos clients et nous nous engageons à répondre à toutes leurs demandes de manière rapide et efficace. Nous sommes toujours à l'écoute de leurs commentaires et nous travaillons constamment à améliorer notre service pour répondre à leurs besoins.
          </p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <h2 id="title"
          >L'accompagnement</h2>
          <p>
            Nous sommes là pour accompagner nos clients à chaque étape de leur parcours culinaire. Que ce soit en les aidant à trouver le restaurant idéal pour leur occasion, en leur offrant des recommandations personnalisées pour leur repas ou en les informant sur les dernières tendances culinaires, nous sommes là pour les aider à prendre les meilleures décisions pour eux-mêmes et leur famille.
          </p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <h2 id="title">La qualité</h2>
          <p>
            Nous sommes fiers de la qualité de nos restaurants partenaires et de notre service. Nous travaillons en étroite collaboration avec nos restaurants partenaires pour garantir que seuls les meilleurs ingrédients sont utilisés pour chaque plat, que les normes de sécurité alimentaire sont respectées et que les clients reçoivent toujours un service de qualité. Nous sommes également engagés à fournir un service de qualité supérieure à tous nos clients, en veillant à ce que chaque commande soit livrée rapidement et en toute sécurité.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUs;
