/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import Cards from "./Cards"
// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

class Header extends React.Component {
  render() {
    
    let items =[]
    let CardTitles =["demande extraction documents admin", 
    "Demande de report de démarcation",
    "Demande de voir une épreuve",
    "Demande de changement de filiere",
    "Fiche d'information stage",
    "Letter d'affectation",
    "Proposition de sujet Master Recherche",
    "lettre d'appui (étudient satgiaire)"]
    
    CardTitles.forEach(element =>items.push(
      <Col lg="6" xl="3">
      <Cards name={element} ></Cards>
      </Col>)
     )

    return (
      <>
       <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">

       
          <Container fluid>

          <div className="header-body">
          <Row>
          
          {items}
         
          </Row>
          </div>
          
          
          </Container>
      
       </div>
      </>
    );
  }
}

export default Header;
