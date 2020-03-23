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
  Button
} from "reactstrap";
// core components

const validationShema = Yup.object().shape({
  cin: Yup.number()
    .typeError("il faut etre une numéro")
    
    
    .required("ne peut pas etre vide"),

  num: Yup.number()
    .typeError("il faut etre une numéro")
    .min(8, "Too Short!")
    .max(8, "Too Long!")
    .required("ne peut pas etre vide"),

  firstName: Yup.string()
    .required("ne peut pas etre vide"),

  lastName: Yup.string()
    .required("ne peut pas etre vide"),
  phoneNumber :Yup.number()

  .typeError("il faut etre une numéro")
    .min (8, "Too Short!")
    .max (8, "Too Long!")
    .required("ne peut pas etre vide"),
  date:Yup.string()
  .required("ne peut pas etre vide"),
  addressNaissance:Yup.string()
  .required("ne peut pas etre vide"),
  niveau:Yup.number()
  .typeError("il faut etre une numéro")
  .required("ne peut pas etre vide"),
  td:Yup.number()
  .typeError("il faut etre une numéro")
  .required("ne peut pas etre vide"),
  tp:Yup.number()
  .typeError("il faut etre une numéro")
  .required("ne peut pas etre vide"),

    
}); 

class Form1 extends React.Component {
  
  state = {
    cin: "",
    num: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    date: new Date(),
    addressNaissance: "",
    niveau: Number,
    td: Number,
    tp: Number,
    selectedOption: "certificat de départ",
    autre: ""
  };
  cinOnchange = event => this.setState({ cin: event.target.value });
  numInscritOnChange = event =>this.setState({ numInscrit: event.target.value });
  firstNameOnChange = event => this.setState({ firstName: event.target.value });
  lastNameOnchange = event => this.setState({ lastName: event.target.value });
  phoneNumberOnchange = event =>this.setState({ phoneNumber: event.target.value });
  dateOnChange = date => this.setState({ date });
  addressNaissanceOnchange = event => this.setState({ addressNaissance: event.target.value });
  niveauOnchange = event => this.setState({ niveau: event.target.value });
  tdOnchange = event => this.setState({ td: event.target.value });
  tpOnchange = event => this.setState({ tp: event.target.value });
  handleOptionChange = event => this.setState({ selectedOption: event.target.value });
  autreOnchange = event => this.setState({ autre: event.target.value });

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
                      Une demande d'extraction de documents administratifs
                    </h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Formik
                  initialValues={{  cin: "", num: "",firstName:"",lastName:"",phoneNumber:"",date:"",addressNaissance:"",
                niveau:"",td:"",tp:""}}
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
                        User information
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
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="Num-inscri"
                              >
                                Num inscription
                              </label>
                              <Input
                                id="num"
                                placeholder="12345678"
                                type="text"
                                value={values.num}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={
                                touched.num && errors.num ? "has-error" : null
                                }
                              />
                             <p className="text-danger"><small> <Error
                                touched={touched.num}
                                message={errors.num}
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
                          date de naissance
                        </h6>

                        <FormGroup>
                          <InputGroup className="input-group-alternative">
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

                        <div className="pl-lg-4">
                          <Row>
                            <Col md="12">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-address"
                                >
                                  Address de naissance
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="addressNaissance"
                                  placeholder="Home Address"
                                  type="text"
                                  value={this.addressNaissance}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className={
                                    touched.addressNaissance && errors.addressNaissance ? "has-error" : null
                                    }
                                />
                                 <p className="text-danger"> <small>
                                 <Error
                                  touched={touched.addressNaissance}
                                  message={errors.addressNaissance}
                                /></small>
                                </p>
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
                                  Niveau
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  defaultValue="New York"
                                  id="niveau"
                                  placeholder="1ére"
                                  type="text"
                                  value={this.niveau}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className={
                                    touched.niveau && errors.niveau ? "has-error" : null
                                    }
                                />
                                 <p className="text-danger"> <small>
                                 <Error
                                  touched={touched.niveau}
                                  message={errors.niveau}
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
                                  TD
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  defaultValue="United States"
                                  id="td"
                                  placeholder="TD1"
                                  type="text"
                                  value={this.td}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className={
                                    touched.td && errors.td ? "has-error" : null
                                    }
                                />
                                 <p className="text-danger"> <small>
                                 <Error
                                  touched={touched.td}
                                  message={errors.td}
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
                                  TP
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="tp"
                                  placeholder="TP1"
                                  type="text"
                                  value={this.tp}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className={
                                    touched.tp && errors.tp ? "has-error" : null
                                    }
                                />
                                 <p className="text-danger"> <small>
                                 <Error
                                  touched={touched.tp}
                                  message={errors.tp}
                                /></small>
                                </p>
                              </FormGroup>
                            </Col>
                          </Row>
                        </div>
                        <hr className="my-4" />
                        {/* radio buttons */}
                        <div>
                          <div className="custom-control custom-radio mb-3">
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
                              attestation de présence
                            </label>
                          </div>
                          <div className="custom-control custom-radio mb-3">
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
                              certificat de départ
                            </label>
                          </div>
                          <div className="custom-control custom-radio mb-3">
                            <input
                              className="custom-control-input"
                              id="customRadio7"
                              name="custom-radio-2"
                              type="radio"
                              value="retrait d'inscription"
                              onChange={this.handleOptionChange}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customRadio7"
                            >
                              retrait d'inscription
                            </label>
                          </div>
                        </div>

                        {/* Description */}
                        <h6 className="heading-small text-muted mb-4">
                          About me
                        </h6>
                        <div className="pl-lg-4">
                          <FormGroup>
                            <label>Autre Document</label>
                            <Input
                              className="form-control-alternative"
                              placeholder="example d'autre document ..."
                              id="autre"
                              rows="4"
                              defaultValue=""
                              type="textarea"
                              value={this.autre}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </FormGroup>
                        </div>
                        <Button className="my-4" color="primary" type="submit">
                          Conformer
                        </Button>
                        {/* </Form> */}
                      </div>
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

export default Form1;
