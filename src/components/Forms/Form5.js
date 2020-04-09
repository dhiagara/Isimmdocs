import React from "react";
import ReactDatetime from "react-datetime";
import UserHeader from "components/Headers/UserHeader.js";
import { Formik } from "formik";
import * as Yup from "yup";
import Error from "./Error";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import axios from 'axios'
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

  firstName: Yup.string()
    .required("ne peut pas etre vide"),

  lastName: Yup.string()
    .required("ne peut pas etre vide"),
  

  

  
  emailEtudient:Yup.string()
  .email("n'est pas une email")
  .required("ne peut pas etre vide"),
   
 
 
  phoneNumber :Yup.string()

  .typeError("il faut etre une numéro")
    .min (8, "Too Short!")
    .max (8, "Too Long!")
    .required("ne peut pas etre vide"),
  
  

 
  filiere:Yup.string()
  .required("ne peut pas etre vide"),  
  groupe:Yup.string()
  .required("ne peut pas etre vide"),
  nomEntreprise:Yup.string()  
  .required("ne peut pas etre vide"),
  domaineAct:Yup.string()
  .required("ne peut pas etre vide"),

  telEntreprise :Yup.string()

  .typeError("il faut etre une numéro")
    .min (8, "Too Short!")
    .max (8, "Too Long!")
    .required("ne peut pas etre vide"),
    faxEntreprise :Yup.string()

  .typeError("il faut etre une numéro")
    .min (8, "Too Short!")
    .max (8, "Too Long!")
    .required("ne peut pas etre vide"),

    siteWeb:Yup.string()
  .required("ne peut pas etre vide"),
   address:Yup.string()
    .required("ne peut pas etre vide"),
   nomResponsable:Yup.string()
    .required("ne peut pas etre vide"),
    nomResponsable:Yup.string()
    .required("ne peut pas etre vide"),
    fonctionRes:Yup.string()
    .required("ne peut pas etre vide"),
    nomEncadreur:Yup.string()
    .required("ne peut pas etre vide"),
    fonctionEncadreur:Yup.string()
    .required("ne peut pas etre vide"),
    emailEncadreurt:Yup.string()
    .email("n'est pas une email")
    .required("ne peut pas etre vide"),
    nomService:Yup.string()
    .required("ne peut pas etre vide"),
    

  


 
}); 

class Form5 extends React.Component {
  
  state = {
    cin: "",
    firstName: "",
    lastName: "",
    filiere:"",
    groupe:"",
    emailEtudient:"",
    phoneNumber: "",
    nomEntreprise:"",
    domaineAct:"",
    telEntreprise:"",
    faxEntreprise:"",
    address:"",
    siteWeb:"",
    fonctionRes:"",
    nomResponsable:"",
    nomEncadreur:"",
    fonctionEncadreur:"",
    nomService:"",
    emailEncadreur:"",
    datedebut: new Date(),
    datefin: new Date(),
    
    
    
    
    
  };
  cinOnchange = event => this.setState({ cin: event.target.value });
  numPassOnChange = event =>this.setState({ numPasse: event.target.value });
  firstNameOnChange = event => this.setState({ firstName: event.target.value });
  lastNameOnchange = event => this.setState({ lastName: event.target.value });
  filiereOnChange = event => this.setState({ filiere:event.target.value });
  groupeOnchange = event => this.setState({ groupe: event.target.value });
  emailEtudientOnchange = event =>this.setState({ emailEtudient: event.target.value });
  phoneNumberOnchange =  event =>this.setState({ phoneNumber: event.target.value });
  nomEntrepriseOnchange = event => this.setState({phoneNumber:event.target.value});
  domaineActOnchange = event => this.setState({domaineAct:event.target.value});
  telEntrepriseOnchange = event => this.setState({telEntreprise: event.target.value});
  faxEntrepriseOnchage = event => this.setState({faxEntreprise : event.target.value});
  fonctionResOnchage = event => this.setState({fonctionRes : event.target.value});
  nomResponsableOnchage = event => this.setState({nomResponsable: event.target.value});
  nomEncadreurOnchage = event => this.setState({nomEncadreur: event.target.value});
  fonctionEncadreurOnchage = event => this.setState({fonctionEncadreur: event.target.value});
  nomServiceOnchange = event =>this.setState({nomService:  event.target.value});
  emailEncadreurOnchange = event =>this.setState({emailEncadreur:  event.target.value});
  dateOnChange = datedebut => this.setState({ datedebut });
  dateOnChange = datefin => this.setState({ datefin });
  
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
                    Fiche d'information stage
                    </h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Formik
                  initialValues={{ cin: "",firstName:"",lastName:"",  phoneNumber: "" ,emailEtudient:"",groupe:"",filiere:"",
                  domaineAct:"",nomEntreprise:"",telEntreprise:"",faxEntreprise:"",address:"", siteWeb:"", fonctionRes:"",
                  nomResponsable:"",nomEncadreur:"",fonctionEncadreur:"",nomService:"",emailEncadreur:"",
                  datedebut : new Date().getFullYear() + '-' + new Date().getMonth()  + '-' + new Date().getDate(),
                  datefin : new Date().getFullYear() + '-' + new Date().getMonth()  + '-' + new Date().getDate()}}
                  
                  //  validationSchema={validationShema}
                  // onSubmit={(values, {setSubmitting }) => {
                  //   setTimeout(() => {
                  //     alert(JSON.stringify(values, null, 2));
                  //     setSubmitting(false);
                  //   }, 400);
                    
                  //   console.log(values)
                    
                  //     axios.post('https://jsonplaceholder.typicode.com/users',{values})
                  //     .then(res => {
                  //       console.log(res)
                  //       console.log(res.data)
                  //     });
                  // }}
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
                      <h6 className="heading-small text-muted mb-4">
                       Informatin de l'étudient
                      </h6>

                      <div className="pl-lg-4">
                     
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
                            <Col lg="6">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-country"
                                >
                                  Groupe
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="groupe"
                                  placeholder="groupe"
                                  type="text"
                                  value={this.groupe}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className={
                                    touched.groupe && errors.groupe ? "has-error" : null
                                    }
                                />
                                 <p className="text-danger"> <small>
                                 <Error
                                  touched={touched.groupe}
                                  message={errors.groupe}
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
                                htmlFor="input-Phone"
                              >
                                Email d'étudient
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="emailEtudient"
                                placeholder="exempel@gmail.com"
                                type="text"
                                value={this.emailEtudient}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={
                                  touched.emailEtudient && errors.emailEtudient ? "has-error" : null
                                  }
                                />
                                 <p className="text-danger"> <small>
                                 <Error
                                  touched={touched.emailEtudient}
                                  message={errors.emailEtudient}
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

                        <hr className="my-4" />
                        {/* Address */}
                         <h6 className="heading-small text-muted mb-4">
                          Information de l'entreprise
                        </h6>

                        <Row>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-entreprise-name"
                              >
                                Nom de l'entreprise
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="nomEntreprise"
                                placeholder="Non entreprise"
                                type="text"
                                value={this.nomEntreprise}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={
                                touched.nomEntreprise && errors.nomEntreprise ? "has-error" : null
                                }
                              />
                              <p className="text-danger"> <small>
                               <Error
                                touched={touched.nomEntreprise}
                                message={errors.nomEntreprise}
                              />
                              </small></p>
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-activite-domaine"
                              >
                                Domaine d'activite
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="domaineAct"
                                placeholder="Last name"
                                type="text"
                                value={this.domaineAct}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={
                                touched.domaineAct && errors.domaineAct ? "has-error" : null
                                }
                              />
                               <p className="text-danger"> <small>
                               <Error
                                touched={touched.domaineAct}
                                message={errors.domaineAct}
                              />
                             </small> </p>
                            </FormGroup>
                          </Col>
                          </Row>
                          <Row>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-address"
                              >
                                Address
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="address"
                                placeholder="Address"
                                type="text"
                                value={this.address}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={
                                touched.address && errors.address? "has-error" : null
                                }
                              />
                              <p className="text-danger"> <small>
                               <Error
                                touched={touched.address}
                                message={errors.address}
                              />
                              </small></p>
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-sit-web"
                              >
                                Site web
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="siteWeb"
                                placeholder="Site Web"
                                type="text"
                                value={this.siteWeb}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={
                                touched.siteWeb && errors.siteWeb ? "has-error" : null
                                }
                              />
                               <p className="text-danger"> <small>
                               <Error
                                touched={touched.siteWeb}
                                message={errors.siteWeb}
                              />
                             </small> </p>
                            </FormGroup>
                          </Col>
                          </Row>
                          <Row>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-tel"
                              >
                                Tel entreprise 
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="telEntreprise"
                                placeholder="55 555 555"
                                type="text"
                                value={this.telEntreprise}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={
                                  touched.telEntreprise && errors.telEntreprise ? "has-error" : null
                                  }
                                />
                                 <p className="text-danger"> <small>
                                 <Error
                                  touched={touched.telEntreprise}
                                  message={errors.telEntreprise}
                                /></small>
                                </p>
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-fax"
                              >
                                Fax entreprise
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="faxEntreprise"
                                placeholder="fax"
                                type="text"
                                value={this.faxEntreprise}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={
                                  touched.faxEntreprise && errors.faxEntreprise ? "has-error" : null
                                  }
                                />
                                 <p className="text-danger"> <small>
                                 <Error
                                  touched={touched.faxEntreprise}
                                  message={errors.faxEntreprise}
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
                                htmlFor="input-entreprise-responsable"
                              >
                                Nom responsable de l'entreprise
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="nomResponsable"
                                placeholder="Non entreprise"
                                type="text"
                                value={this.nomResponsable}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={
                                touched.nomResponsable && errors.nomResponsable? "has-error" : null
                                }
                              />
                              <p className="text-danger"> <small>
                               <Error
                                touched={touched.nomResponsable}
                                message={errors.nomResponsable}
                              />
                              </small></p>
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-fonction-responsable"
                              >
                                Fonction de responsable
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="fonctionRes"
                                placeholder="Fonction de responsable"
                                type="text"
                                value={this.fonctionRes}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={
                                touched.fonctionRes && errors.fonctionRes ? "has-error" : null
                                }
                              />
                               <p className="text-danger"> <small>
                               <Error
                                touched={touched.fonctionRes}
                                message={errors.fonctionRes}
                              />
                             </small> </p>
                            </FormGroup>
                          </Col>
                          </Row>
                          <Row>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-encadreur"
                              >
                                Nom d'encadreur
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="nomEncadreur"
                                placeholder="Nom encadreur"
                                type="text"
                                value={this.nomEncadreur}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={
                                touched.nomEncadreur && errors.nomEncadreur? "has-error" : null
                                }
                              />
                              <p className="text-danger"> <small>
                               <Error
                                touched={touched.nomEncadreur}
                                message={errors.nomEncadreur}
                              />
                              </small></p>
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-fonction-encadreur"
                              >
                                Fonction d'encadreur
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="fonctionEncadreur"
                                placeholder="Fonction encadreur"
                                type="text"
                                value={this.fonctionEncadreur}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={
                                touched.fonctionEncadreur && errors.fonctionEncadreur ? "has-error" : null
                                }
                              />
                               <p className="text-danger"> <small>
                               <Error
                                touched={touched.fonctionEncadreur}
                                message={errors.fonctionEncadreur}
                              />
                             </small> </p>
                            </FormGroup>
                          </Col>
                          </Row>
                          <Row>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-encadreur-service"
                              >
                                Nom de service
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="nomService"
                                placeholder="Nom service"
                                type="text"
                                value={this.nomService}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={
                                touched.nomService && errors.nomService? "has-error" : null
                                }
                              />
                              <p className="text-danger"> <small>
                               <Error
                                touched={touched.nomService}
                                message={errors.nomService}
                              />
                              </small></p>
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-email-encadreur"
                              >
                                Email d'encadreur
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="emailEncadreur"
                                placeholder="email d'encadreur"
                                type="text"
                                value={this.emailEncadreur}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={
                                touched.emailEncadreur && errors.emailEncadreur ? "has-error" : null
                                }
                              />
                               <p className="text-danger"> <small>
                               <Error
                                touched={touched.emailEncadreur}
                                message={errors.emailEncadreur}
                              />
                             </small> </p>
                            </FormGroup>
                          </Col>
                          </Row>
                       
                        {/* </Form> */}
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
                              id ="datedebut"
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
                              id ="datedebut"
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
                          Conformer
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

export default Form5;
