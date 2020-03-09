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

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

class Cards extends React.Component {
  render(props) {
      const cardTitle =this.props.name;
      console.log("wawazwa",cardTitle);
      const lien="/admin/user-profile/"+cardTitle
    return (
      <>



              {/* Card stats */}
             <div>
                  <Card className="card-stats mb-4 mb-xl-5 ">
                  <Link 
              to={lien}
            > <CardBody>
                      <Row>
                        <div className="col">
                          
                          <span className="h2 font-weight-bold mb-0">
                          {this.props.name}
                          </span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                            <i className="fas fa-chart-bar" />
                          </div>
                        </Col>
                      </Row>
                      
                    </CardBody></Link>
                  </Card>
                  </div>
             
            
      </>
    );
  }
}

export default Cards;
