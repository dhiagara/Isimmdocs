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
import * as Yup from "yup";
import Error from "./Error";
import axios from 'axios';
import { Formik } from "formik";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";
const validationShema = Yup.object().shape({
  username: Yup.string()
  .required("ne pas eter vide"),
  email: Yup.string()
  .email("pas valide")
  .required("ne pas eter vide"),
  password: Yup.string()
  .required("ne pas eter vide"),
})

class Register extends React.Component {
  state = {
    username:"",
    email:"",
    password:""
  }
  render() {
    return (
      <>
        <Col lg="6" md="8">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent pb-5">
              <div className="text-muted text-center mt-2 mb-4">
                <small>Sign up with</small>
              </div>
              <div className="text-center">
                <Button
                  className="btn-neutral btn-icon mr-4"
                  color="default"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <span className="btn-inner--icon">
                    <img
                      alt="..."
                      src={require("assets/img/icons/common/github.svg")}
                    />
                  </span>
                  <span className="btn-inner--text">Github</span>
                </Button>
                <Button
                  className="btn-neutral btn-icon"
                  color="default"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <span className="btn-inner--icon">
                    <img
                      alt="..."
                      src={require("assets/img/icons/common/google.svg")}
                    />
                  </span>
                  <span className="btn-inner--text">Google</span>
                </Button>
              </div>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Or sign up with credentials</small>
              </div>
              <Formik
              initialValues={{ username:"",email:"",password:""}}
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
                <FormGroup>
                  
                <Input 
                     id="username"
                     placeholder="username"
                     
                    type="text"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur} 
                    className={
                      touched.username && errors.username ? "has-error" : null
                        }/>
                       <p className="text-danger"><small> <Error
                          touched={touched.username}
                          message={errors.username}
                              /></small></p>
                 
                </FormGroup>
                <FormGroup>
                  <i></i>
                <Input 
                     id="email"
                     placeholder="email"
                    type="text"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur} 
                    className={
                      touched.email && errors.email ? "has-error" : null
                        }/>
                       <p className="text-danger"><small> <Error
                          touched={touched.email}
                          message={errors.email}
                              /></small></p>
                  
                </FormGroup>
                <FormGroup>
                  
                    <Input 
                     id="password"
                     placeholder="password"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur} 
                    className={
                      touched.password && errors.password? "has-error" : null
                        }/>
                       <p className="text-danger"><small> <Error
                          touched={touched.password}
                          message={errors.password}
                              /></small></p>
                  
                </FormGroup>
                <div className="text-muted font-italic">
                  <small>
                    password strength:{" "}
                    <span className="text-success font-weight-700">strong</span>
                  </small>
                </div>
                <Row className="my-4">
                  <Col xs="12">
                    <div className="custom-control custom-control-alternative custom-checkbox">
                      <input
                        className="custom-control-input"
                        id="customCheckRegister"
                        type="checkbox"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheckRegister"
                      >
                        <span className="text-muted">
                          I agree with the{" "}
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            Privacy Policy
                          </a>
                        </span>
                      </label>
                    </div>
                  </Col>
                </Row>
                <div className="text-center">
                  <Button className="mt-4" color="primary" type="submit">
                    Create account
                  </Button>
                </div>
                </form>)}
              </Formik>
            </CardBody>
          </Card>
        </Col>
      </>
    );
  }
}

export default Register;
