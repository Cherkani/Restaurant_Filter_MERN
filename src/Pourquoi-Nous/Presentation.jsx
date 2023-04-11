


import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './pres.css'
export default function Presentation() {
    return (
        <Container className="my-5">
            <Row>
                <Col>
                    <h1 id="" className="text-center mb-5">Pourquoi FoodieFinder
?</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="lead">Nous sommes [Nom de notre entreprise], une entreprise passionnée par la nourriture et la satisfaction de nos clients est notre priorité absolue. Nous croyons fermement en la qualité, l'accompagnement et la satisfaction de nos clients, et nous travaillons chaque jour pour garantir que ces principes guident tout ce que nous faisons.


                    </p>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col>
                    <h2 id="title"
                    >Principe:
                    </h2>
                    <p>
                    Nous sommes convaincus que la nourriture ne doit pas seulement être savoureuse, mais aussi saine et durable. C'est pourquoi nous avons établi des partenariats avec des restaurants locaux qui partagent nos valeurs et notre engagement envers des ingrédients frais et de qualité supérieure, tout en soutenant les pratiques agricoles durables.

                    </p>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col>
                    <h2 id="title"
                    >Résultat:
                    </h2>
                    <p>
                    Nous croyons que notre engagement envers la qualité, l'accompagnement et la satisfaction de nos clients se traduit par une expérience culinaire exceptionnelle. Que ce soit pour une soirée en famille ou un événement d'entreprise, nous sommes fiers de fournir des options culinaires savoureuses et saines qui répondent aux besoins et aux préférences de nos clients.<br/>
                    <div>Chez <b>FoodieFinder</b>, nous sommes déterminés à fournir une expérience culinaire de qualité supérieure, tout en soutenant les pratiques agricoles durables et en travaillant en étroite collaboration avec nos clients pour répondre à leurs besoins et à leurs préférences culinaires.</div>
                    
                    </p>
                </Col>
            </Row>
            
        </Container>
    );


}
