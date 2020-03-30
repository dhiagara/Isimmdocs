import React from "react";
import ReactDatetime from "react-datetime";
import UserHeader from "components/Headers/UserHeader.js";
import { Formik } from "formik";
import * as Yup from "yup";
import Error from "./Error";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Button,
  Table
} from "reactstrap";
// core components

const validationShema = Yup.object().shape({
  
  name:Yup.string()
  .required("ne peut pas etre vide"),
  cin: Yup.string()
  .typeError("il faut etre une numéro")
  .min(8, "Too Short!")
  .max(8, "Too Long!")
  .required("ne peut pas etre vide"),
  firstName: Yup.string()
  .required("ne peut pas etre vide"),

  lastName: Yup.string()
  .required("ne peut pas etre vide"),
  filiere:Yup.string()
  .required("ne peut pas etre vide"),  

}); 

class Form6 extends React.Component {
  
  state = {
    name:"",
    cin: "",
    firstName: "",
    lastName: "",
    filiere:"",
    datedebut: new Date(),
    datefin: new Date(),
  
   
    
  };
  nameOnchange = event => this.setState({ name: event.target.value });
  cinOnchange = event => this.setState({ cin: event.target.value });
  numPassOnChange = event =>this.setState({ numPasse: event.target.value });
  firstNameOnChange = event => this.setState({ firstName: event.target.value });
  lastNameOnchange = event => this.setState({ lastName: event.target.value });
  dateOnChange = datedebut => this.setState({ datedebut });
  dateOnChange = datefin => this.setState({ datefin });
 
  render() {
    //console.log(this.state);

    return (
      <>
        <UserHeader />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Col className="order-xl-6 col-xl-10 mr-8 ml-7">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">
                    Letter d'affectation
                    </h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Formik
                  initialValues={{ name:"", cin: "",firstName: "",lastName: "", filiere:""}}
                  validationSchema={validationShema}
                  onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                      alert(JSON.stringify(values, null, 2));
                      setSubmitting(false);
                    }, 400);
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting
                    /* and other goodies */
                  }) => (
                    <form onSubmit={handleSubmit}>
                     

                      {/* <Form onSubmit={this.handleSubmit}> */}

                     <div>
                        <Row>
                            <Col lg='4'>
                               <h1> A Madame/Monsieu :</h1>
                            </Col>
                            <Col lg='8'>
                            <FormGroup>   
                            <Input
                                className="form-control-alternative"
                                id="name"
                                placeholder=" name"
                                type="text"
                                value={this.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={
                                touched.name&& errors.name ? "has-error" : null
                                }
                              />
                              <p className="text-danger"> <small>
                               <Error
                                touched={touched.name}
                                message={errors.name}
                              />
                              </small></p>
                            </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                         <center> <h3> Nous vous remercions pour votre réponse positive a notre sollicitation de stage pour l'étudien</h3></center>
                        </Row>
                        <Row>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="CIN"
                              >
                                CIN
                              </label>
                              <Input
                                id="cin"
                                placeholder="12345678"
                                type="text"
                                value={values.cin}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={
                                touched.cin && errors.cin ? "has-error" : null
                                }
                              />
                             <p className="text-danger"> <small>
                             <Error
                                touched={touched.cin}
                                message={errors.cin}
                              /> </small></p>
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-country"
                                >
                                  Féliere
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  
                                  id="filiere"
                                  placeholder="Filiere"
                                  type="text"
                                  value={this.filiere}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className={
                                    touched.filiere && errors.filiere ? "has-error" : null
                                    }
                                />
                                 <p className="text-danger"> <small>
                                 <Error
                                  touched={touched.filiere}
                                  message={errors.filiere}
                                /></small>
                                </p>
                              </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-first-name"
                              >
                                First name
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="firstName"
                                placeholder="First name"
                                type="text"
                                value={this.firstName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={
                                touched.firstName && errors.firstName ? "has-error" : null
                                }
                              />
                              <p className="text-danger"> <small>
                               <Error
                                touched={touched.firstName}
                                message={errors.firstName}
                              />
                              </small></p>
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-last-name"
                              >
                                Last name
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="lastName"
                                placeholder="Last name"
                                type="text"
                                value={this.lastName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={
                                touched.lastName && errors.lastName ? "has-error" : null
                                }
                              />
                               <p className="text-danger"> <small>
                               <Error
                                touched={touched.lastName}
                                message={errors.lastName}
                              />
                             </small> </p>
                            </FormGroup>
                          </Col>
                          </Row>
                          <Row>
                                <Col lg="6">
                                <FormGroup>
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-calendar-grid-58" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <ReactDatetime
                              
                              inputProps={{
                                placeholder: "Date début de stage"
                              }}
                              timeFormat={false}
                            />
                          </InputGroup>
                        </FormGroup>
                                </Col>
                                <Col lg="6">
                                <FormGroup>
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-calendar-grid-58" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <ReactDatetime
                              
                              inputProps={{
                                placeholder: "Date fin de stage"
                              }}
                              timeFormat={false}
                            />
                          </InputGroup>
                        </FormGroup>
                                </Col>
                              </Row>
                      
                      </div>
                      
                      <Button className="my-4" color="primary" type="submit">
                          Confirmer
                        </Button>
                    </form>
                  )}
                </Formik>
              </CardBody>
            </Card>
          </Col>
        </Container>
      </>
    );
  }
}

export default Form6;
