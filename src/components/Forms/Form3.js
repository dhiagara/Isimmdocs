import React from "react";
import ReactDatetime from "react-datetime";
import UserHeader from "components/Headers/UserHeader.js";
import { Formik } from "formik";
import * as Yup from "yup";
import Error from "./Error";
import axios from 'axios';



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
  cin: Yup.string()
    .typeError("il faut etre une numéro")
    .min(8, "Too Short!")
    .max(8, "Too Long!")
    .required("ne peut pas etre vide"),
  niveau: Yup.string()

  .typeError("il faut etre une numéro")
  
  .max(1, "Too Long!")
  .required("ne peut pas etre vide"),
  firstName: Yup.string()
  .required("ne peut pas etre vide"),

  lastName: Yup.string()
  .required("ne peut pas etre vide"),
  matiere:Yup.string()
  .required("ne peut pas etre vide"),
  enseignant:Yup.string()
  .required("ne peut pas etre vide"),
  epreuve:Yup.string()
  .required("ne peut pas etre vide"),


  phoneNumber :Yup.string()

  .typeError("il faut etre une numéro")
    .min (8, "Too Short!")
    .max (8, "Too Long!")
    .required("ne peut pas etre vide"),
 


  
}); 

class Form3 extends React.Component {
  
  state = {
    cin: "",
    niveau:"",
    firstName:"",
    lastName:"",
    matiere:"",
    enseignant:"",
    epreuve:"",
    phoneNumber: "",
  
   
    
  };
  cinOnChange = event => this.setState({ cin: event.target.value });
  niveauOnChange = event => this.setState({ niveau: event.target.value });
  firstNameOnChange = event => this.setState({ firstName: event.target.value });
  lastNameOnchange = event => this.setState({ lastName: event.target.value });
  matiereOnchange = event => this.setState({ matiere: event.target.value });
  enseignantOnchange = event => this.setState({ enseignant: event.target.value });
  epreuveOnchange = event => this.setState({ epreuve: event.target.value });
  phoneNumberOnchange = event =>this.setState({ phoneNumber: event.target.value });

  // handleSubmit = event => {
  //   event.preventDefault();
    
  //   };
  
  render() {
    console.log(this.state);

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
                    Demande de voir une épreuve
                    </h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Formik
                  initialValues={{ cin: "",niveau:"",firstName:"",lastName:"",phoneNumber: "", matiere:"",enseignant:"", epreuve:""}}
                  validationSchema={validationShema}
                  onSubmit={(values, {setSubmitting }) => {
                    setTimeout(() => {
                      alert(JSON.stringify(values, null, 2));
                      setSubmitting(false);
                    }, 400);
                    
                    console.log(values)
                    
                      axios.post('https://jsonplaceholder.typicode.com/users',{values})
                      .then(res => {
                        console.log(res)
                        console.log(res.data)
                      });
                  
                    }
                   

                  } 
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
                                htmlFor="Num-passport"
                              >
                                Niveau
                              </label>
                              <Input
                                id="niveau"
                                placeholder="1"
                                type="text"
                                value={values.niveau}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={
                                touched.niveau && errors.niveau ? "has-error" : null
                                }
                              />
                             <p className="text-danger"><small> <Error
                                touched={touched.niveau}
                                message={errors.niveau}
                              /></small></p>
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
                            <Col lg="4">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-city"
                                >
                                  Matiere
                                </label>
                                <Input
                                  className="form-control-alternative"
                                 
                                  id="matiere"
                                  placeholder="matiere "
                                  type="text"
                                  value={this.matiere}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className={
                                    touched.matiere && errors.matiere ? "has-error" : null
                                    }
                                />
                                 <p className="text-danger"> <small>
                                 <Error
                                  touched={touched.matiere}
                                  message={errors.matiere}
                                /></small>
                                </p>
                              </FormGroup>
                            </Col>
                            <Col lg="4">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-country"
                                >
                                  Enseignant
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  
                                  id="enseignant"
                                  placeholder="enseignant"
                                  type="text"
                                  value={this.enseignant}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className={
                                    touched.enseignant && errors.enseignant ? "has-error" : null
                                    }
                                />
                                 <p className="text-danger"> <small>
                                 <Error
                                  touched={touched.enseignant}
                                  message={errors.enseignant}
                                /></small>
                                </p>
                              </FormGroup>
                            </Col>
                            <Col lg="4">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-country"
                                >
                                 Type d'epreuve
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="epreuve"
                                  placeholder="exam\ ds\ tp"
                                  type="text"
                                  value={this.epreuve}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className={
                                    touched.epreuve && errors.epreuve ? "has-error" : null
                                    }
                                />
                                 <p className="text-danger"> <small>
                                 <Error
                                  touched={touched.epreuve}
                                  message={errors.epreuve}
                                /></small>
                                </p>
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-Phone"
                              >
                                Phone Number
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="phoneNumber"
                                placeholder="Phone"
                                type="text"
                                value={this.phoneNumber}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={
                                  touched.phoneNumber && errors.phoneNumber ? "has-error" : null
                                  }
                                />
                                 <p className="text-danger"> <small>
                                 <Error
                                  touched={touched.phoneNumber}
                                  message={errors.phoneNumber}
                                /></small>
                                </p>
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

export default Form3;
