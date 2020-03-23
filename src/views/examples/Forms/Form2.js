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
  cin: Yup.string()
    .typeError("il faut etre une numéro")
    .min(8, "Too Short!")
    .max(8, "Too Long!")
    .required("ne peut pas etre vide"),

  numPass: Yup.string()
   
    .min(8, "Too Short!")
    .max(8, "Too Long!")
    .required("ne peut pas etre vide"),

  firstName: Yup.string()
    .required("ne peut pas etre vide"),

  lastName: Yup.string()
    .required("ne peut pas etre vide"),

  codePostal :Yup.number()

  .typeError("il faut etre une numéro")
    .min (8, "Too Short!")
    .max (8, "Too Long!")
    .required("ne peut pas etre vide"),

    date:Yup.string()
    .required("ne peut pas etre vide"),

  
  
  villeNaiss:Yup.number()
  .typeError("il faut etre une numéro")
  .required("ne peut pas etre vide"),
  
  gov:Yup.number()
  .typeError("il faut etre une numéro")
  .required("ne peut pas etre vide"),
  
  adress:Yup.string()
  .required("ne peut pas etre vide"),

  villeResid:Yup.string()
  .required("ne peut pas etre vide"),

  address:Yup.string()
  .required("ne peut pas etre vide"), 
  annebac:Yup.string()
  .required("ne peut pas etre vide"),  
  feliere:Yup.string()
  .required("ne peut pas etre vide"),  
  session:Yup.string()
  .required("ne peut pas etre vide"), 
}); 

class Form2 extends React.Component {
  
  state = {
    cin: "",
    numPass: "",
    firstName: "",
    lastName: "",
    date: new Date(),
    villeNaiss:"" ,
    gov: "",
    address:"",
    villeResid:"",
    codePostal: "",
    annebac:"",
    feliere:"",
    session:"",
   
    selectedOption: "certificat de départ",
  };
  cinOnchange = event => this.setState({ cin: event.target.value });
  numPassOnChange = event =>this.setState({ numPasse: event.target.value });
  firstNameOnChange = event => this.setState({ firstName: event.target.value });
  lastNameOnchange = event => this.setState({ lastName: event.target.value });
  dateOnChange = date => this.setState({ date });
  villeNaissOnchange = event => this.setState({ villeNaiss: event.target.value });
  govOnchange = event =>this.setState({ gov: event.target.value });
  addressOnchange =  event =>this.setState({ address: event.target.value });
  villeResidOnchange = event=> this.setState({villeResid :event.target.value });
  codePostalResidOnchange = event=> this.setState({codePostal :event.target.value });
  annebacOnchange = event=> this.setState({annebac :event.target.value });
  feliereOnchange = event=> this.setState({feliere :event.target.value });
  sessionOnchange = event=> this.setState({session :event.target.value });
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
                    Demande de report de démarcation
                    </h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Formik
                  initialValues={{ cin: "", numPass: "",firstName:"",lastName:"",codePostal:"",date:"",
                villeNaiss:"",gov:"" ,villeResid:"",address:"",annebac:"", feliere:"",  session:"",}}
                  validationSchema={validationShema}
                  // onSubmit={(values, { setSubmitting }) => {
                  //   setTimeout(() => {
                  //     alert(JSON.stringify(values, null, 2));
                  //     setSubmitting(false);
                  //   }, 400);
                  // }}
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
                           <label className=" form-control-label col-4">Demande de report de démarcation</label>
                        <div className="custom-control custom-radio mb-3 col-4">
                            <input
                              className="custom-control-input"
                              id="customRadio5"
                              name="custom-radio-2"
                              type="radio"
                              value="attestation de présence"
                              onChange={this.handleOptionChange}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customRadio5"
                            >
                              Sain
                            </label>
                          </div>
                          <div className="custom-control custom-radio mb-3 col-4">
                            <input
                              className="custom-control-input"
                              defaultChecked
                              id="customRadio6"
                              name="custom-radio-2"
                              type="radio"
                              value="certificat de départ"
                              onChange={this.handleOptionChange}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customRadio6"
                            >
                              personnelles
                            </label>
                          </div>
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
                                htmlFor="Num-passport"
                              >
                                Num Passport
                              </label>
                              <Input
                                id="numPass"
                                placeholder="12345678"
                                type="text"
                                value={values.numPass}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={
                                touched.numPass && errors.numPass ? "has-error" : null
                                }
                              />
                             <p className="text-danger"><small> <Error
                                touched={touched.numPass}
                                message={errors.numPass}
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
                            <label
                                className="form-control-label"
                                htmlFor="date-naissance"
                              >
                                Date naissance
                              </label>
                            <FormGroup>
                          <InputGroup className="has-error" >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-calendar-grid-58" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <ReactDatetime
                              
                              inputProps={{
                                id:"date",
                                placeholder: "Date Picker Here"
                              }}
                              timeFormat={false}
                            />
                          </InputGroup>
                          <p className="text-danger"> <small>
                                 <Error
                                  touched={touched.date}
                                  message={errors.date}
                                /></small>
                                </p>
                        </FormGroup>
                               
                            </Col>
                            <Col lg="4">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-villeNaiss"
                                >
                                  Ville de naissance
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  defaultValue="United States"
                                  id="villeNaiss"
                                  placeholder="Ville de naissance"
                                  type="text"
                                  value={this.villeNaiss}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className={
                                    touched.villeNaiss && errors.villeNaiss ? "has-error" : null
                                    }
                                />
                                 <p className="text-danger"> <small>
                                 <Error
                                  touched={touched.villeNaiss}
                                  message={errors.villeNaiss}
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
                                  Governement
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="gov"
                                  placeholder="votre governement de naissance"
                                  type="text"
                                  value={this.tp}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className={
                                    touched.gov && errors.gov ? "has-error" : null
                                    }
                                />
                                 <p className="text-danger"> <small>
                                 <Error
                                  touched={touched.gov}
                                  message={errors.gov}
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
                                htmlFor="input-last-name"
                              >
                                Adresse de résidence
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="address"
                                placeholder="Adresse de résidence"
                                type="text"
                                value={this.address}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={
                                touched.adress && errors.adress? "has-error" : null
                                }
                              />
                               <p className="text-danger"> <small>
                               <Error
                                touched={touched.adress}
                                message={errors.adress}
                              />
                             </small> </p>
                            </FormGroup>
                          </Col>

                          <Col lg="6">
                          <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-last-name"
                              >
                                Ville de résidence
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="villeResid"
                                placeholder="Ville de résidence"
                                type="text"
                                value={this.villeResid}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={
                                touched.villeResid && errors.villeResid? "has-error" : null
                                }
                              />
                               <p className="text-danger"> <small>
                               <Error
                                touched={touched.villeResid}
                                message={errors.villeResid}
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
                                htmlFor="input-Phone"
                              >
                                Code postal  
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="codePostal"
                                placeholder="code postal"
                                type="text"
                                value={this.phoneNumber}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={
                                  touched.codePostal && errors.codePostal ? "has-error" : null
                                  }
                                />
                                 <p className="text-danger"> <small>
                                 <Error
                                  touched={touched.codePostal}
                                  message={errors.codePostal}
                                /></small>
                                </p>
                            </FormGroup>
                          </Col>
                        </Row>

                        <hr className="my-4" />
                        {/* Address */}
                        <h6 className="heading-small text-muted mb-4">
                          Information sur le bac 
                        </h6>

                        <div className="pl-lg-4">
                         
                          <Row>
                            <Col lg="4">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-city"
                                >
                                  Année du Bac
                                </label>
                                <Input
                                  className="form-control-alternative"
                                 
                                  id="annebac"
                                  placeholder="annee "
                                  type="text"
                                  value={this.annebac}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className={
                                    touched.annebac && errors.annebac ? "has-error" : null
                                    }
                                />
                                 <p className="text-danger"> <small>
                                 <Error
                                  touched={touched.annebac}
                                  message={errors.annebac}
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
                                  Féliere
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  
                                  id="feliere"
                                  placeholder="Féliere"
                                  type="text"
                                  value={this.feliere}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className={
                                    touched.feliere && errors.feliere ? "has-error" : null
                                    }
                                />
                                 <p className="text-danger"> <small>
                                 <Error
                                  touched={touched.feliere}
                                  message={errors.feliere}
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
                                  Session
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="session"
                                  placeholder="session"
                                  type="text"
                                  value={this.session}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className={
                                    touched.session && errors.session ? "has-error" : null
                                    }
                                />
                                 <p className="text-danger"> <small>
                                 <Error
                                  touched={touched.session}
                                  message={errors.session}
                                /></small>
                                </p>
                              </FormGroup>
                            </Col>
                          </Row>
                        </div>
                        <hr className="my-4" />
                        <h6 className="heading-small text-muted mb-4">
                        Études universitaires antérieures 
                        </h6>
                        
                        <Table className="align-items-center" responsive>
                        <thead className="thead-light">
                            <tr>
                            <th scope="col">Année univer</th>
                            <th scope="col">institue</th>
                            <th scope="col">Année scolaire</th>
                            <th scope="col">filiaire</th>
                            <th scope="col">Resultat</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">
                            <FormGroup>
                                <Input
                                  className="form-control-alternative"
                                  placeholder="année"
                                  type="text"
                                  
                                />
                                
                              
                              </FormGroup>
                            </th>
                            <td>
                           <FormGroup>
                                <Input
                                  className="form-control-alternative"
                                  placeholder="institue"
                                  type="text"
                                 
                                />
                                
                              
                              </FormGroup>
                            </td>
                            <td>
                            <FormGroup>
                                <Input
                                  className="form-control-alternative"
                                  placeholder="Année scolaire"
                                  type="text"
                                 
                                />
                                
                              
                              </FormGroup>
                            </td>
                            <td>
                            <FormGroup>
                                <Input
                                  className="form-control-alternative"
                                  placeholder="filiaire"
                                  type="text"
                                />
                                
                              
                              </FormGroup> 
                               
                            </td>
                            <td>
                            <FormGroup>
                                <Input
                                  className="form-control-alternative"
                                  placeholder="Resulta"
                                  type="text"
                                  
                                />
                                
                              
                              </FormGroup> 
                            </td>
                            
                            </tr>

                            {/* ========== */}
                            <tr>
                            <th scope="row">
                            <FormGroup>
                                <Input
                                  className="form-control-alternative"
                                  placeholder="année"
                                  type="text"
                                  
                                />
                                
                              
                              </FormGroup>
                            </th>
                            <td>
                           <FormGroup>
                                <Input
                                  className="form-control-alternative"
                                  placeholder="institue"
                                  type="text"
                                 
                                />
                                
                              
                              </FormGroup>
                            </td>
                            <td>
                            <FormGroup>
                                <Input
                                  className="form-control-alternative"
                                  placeholder="Année scolaire"
                                  type="text"
                                 
                                />
                                
                              
                              </FormGroup>
                            </td>
                            <td>
                            <FormGroup>
                                <Input
                                  className="form-control-alternative"
                                  placeholder="filiaire"
                                  type="text"
                                />
                                
                              
                              </FormGroup> 
                               
                            </td>
                            <td>
                            <FormGroup>
                                <Input
                                  className="form-control-alternative"
                                  placeholder="Resulta"
                                  type="text"
                                  
                                />
                                
                              
                              </FormGroup> 
                            </td>
                            
                            </tr>
                           {/* ======================= */}
                           <tr>
                            <th scope="row">
                            <FormGroup>
                                <Input
                                  className="form-control-alternative"
                                  placeholder="année"
                                  type="text"
                                  
                                />
                                
                              
                              </FormGroup>
                            </th>
                            <td>
                           <FormGroup>
                                <Input
                                  className="form-control-alternative"
                                  placeholder="institue"
                                  type="text"
                                 
                                />
                                
                              
                              </FormGroup>
                            </td>
                            <td>
                            <FormGroup>
                                <Input
                                  className="form-control-alternative"
                                  placeholder="Année scolaire"
                                  type="text"
                                 
                                />
                                
                              
                              </FormGroup>
                            </td>
                            <td>
                            <FormGroup>
                                <Input
                                  className="form-control-alternative"
                                  placeholder="filiaire"
                                  type="text"
                                />
                                
                              
                              </FormGroup> 
                               
                            </td>
                            <td>
                            <FormGroup>
                                <Input
                                  className="form-control-alternative"
                                  placeholder="Resulta"
                                  type="text"
                                  
                                />
                                
                              
                              </FormGroup> 
                            </td>
                            
                            </tr>
                        </tbody>
                        </Table>

                       
                        {/* </Form> */}
                        <Row>
                           <label className=" form-control-label col-4">Auparavant utilisé pour des raisons personnelles</label>
                        <div className="custom-control custom-radio mb-3 col-4">
                            <input
                              className="custom-control-input"
                              id="customRadio1"
                              name="custom-radio-3"
                              type="radio"
                              value="attestation de présence"
                              onChange={this.handleOptionChange}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customRadio1"
                            >
                              Oui
                            </label>
                          </div>
                          <div className="custom-control custom-radio mb-3 col-4">
                            <input
                              className="custom-control-input"
                              defaultChecked
                              id="customRadio2"
                              name="custom-radio-3"
                              type="radio"
                              value="certificat de départ"
                              onChange={this.handleOptionChange}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customRadio2"
                            >
                              Non
                            </label>
                          </div>
                        </Row>  
                        <Row>
                           <label className=" form-control-label col-4">Auparavant utilisé pour des raisons Sain</label>
                        <div className="custom-control custom-radio mb-3 col-4">
                            <input
                              className="custom-control-input"
                              id="customRadio3"
                              name="custom-radio-4"
                              type="radio"
                              value="attestation de présence"
                              onChange={this.handleOptionChange}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customRadio3"
                            >
                              oui
                            </label>
                          </div>
                          <div className="custom-control custom-radio mb-3 col-4">
                            <input
                              className="custom-control-input"
                              defaultChecked
                              id="customRadio4"
                              name="custom-radio-4"
                              type="radio"
                              value="certificat de départ"
                              onChange={this.handleOptionChange}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customRadio4"
                            >
                              non
                            </label>
                          </div>
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

export default Form2;
