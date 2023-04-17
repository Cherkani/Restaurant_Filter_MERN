import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import ReactDOM from "react-dom";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
      <div className="me-5 d-none d-lg-block">
        <h6 className="text-uppercase fw-bold mb-4">Nos reseaux:</h6>
        </div>

        <div>
          <a href="" className="me-4 text-reset">
            <SocialIcon url="https://twitter.com" />
          </a>
          <a href="" className="me-4 text-reset">
            <SocialIcon url="https://www.linkedin.com/in/mohammed-belkarradi-770954211/" />
          </a>
          <a href="" className="me-4 text-reset">
            <SocialIcon url="https://github.com/BELKARRADI" />
          </a>
                 
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                FoodieFinder
              </h6>
              <p className="">
              <b>FoodieFinder</b> est un site web de restauration qui permet de localiser les restaurants en fonction des villes/zones en utilisant une API de géolocalisation. Les coordonnées récupérées sont ensuite utilisées pour afficher les restaurants correspondants sur la carte à l'aide de l'API Google Maps Places.
              
              </p>
            </MDBCol>
            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Liens utiles</h6>
              <p>
                <a href="http://localhost:3002/Presentation" className="text-reset">
                  Pourquoi FoodieFinder?
                </a>
              </p>
              <p>
                <a href="http://localhost:3002/About" className="text-reset">
                  Nos valeurs
                </a>
              </p>
              <p>
                <a href="http://localhost:3002/" className="text-reset">
                  Trouver un restaurant
                </a>
              </p>
              <p>
                <a href="http://localhost:3002/Map" className="text-reset">
                  Nos restaurant
                </a>
              </p>
              <p>
                <a href="http://localhost:3002/ContactForm" className="text-reset">
                  Contactez nous
                </a>
              </p>
            
            </MDBCol>

           

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Nos devloppeurs</h6>
              <p>
                <a href="https://www.linkedin.com/in/mohammed-belkarradi-770954211/" className="text-reset">
                  BELKARRADI Mohammed
                </a>
              </p>
              <p>
                <a href="https://www.linkedin.com/in/aymen-cherkani-a68b1224a/" className="text-reset">
                  CHERKANI Aymen
                </a>
              </p>
             
             
            
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                7H28+C96, El Jadida,Maroc
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                mbelkarradi@gmail.com
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                cherkaniaymen@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +212 60-41-30-90
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> +212 60-41-30-90
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2022 BELKARRADI MOHAMMED & CHERKANI AYMEN
      </div>
    </MDBFooter>
  );
}
