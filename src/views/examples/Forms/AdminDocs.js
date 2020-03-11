import React from "react";
import ReactDatetime from "react-datetime";

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
import UserHeader from "components/Headers/UserHeader.js";

class AdminDocs extends React.Component {
  state = {
    cin:'', 
    numInscrit:'',
    firstName:'',
    lastName:'',
    phoneNumber:'',
    date: new Date(),
    addressNaissance :'',
    niveau :Number,
    td:Number,
    tp:Number,
    selectedOption:'certificat de départ',
    autre:'',
  };
  cinOnchange=event=> this.setState({cin:event.target.value});
  numInscritOnChange=event=> this.setState({numInscrit:event.target.value});
  firstNameOnChange=event=> this.setState({firstName:event.target.value});
  lastNameOnchange=event=> this.setState({lastName:event.target.value});
  phoneNumberOnchange=event=> this.setState({phoneNumber:event.target.value});
  dateOnChange = date => this.setState({ date });
  addressNaissanceOnchange=event=> this.setState({addressNaissance:event.target.value});
  niveauOnchange=event=> this.setState({niveau:event.target.value});
  tdOnchange=event=> this.setState({td:event.target.value});
  tpOnchange=event=> this.setState({tp:event.target.value});
  handleOptionChange=event=> this.setState({selectedOption:event.target.value});
  autreOnchange=event=> this.setState({autre:event.target.value});


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
                      Une demande d'extraction de documents administratifs
                    </h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form onSubmit={this.handleSubmit}>
                  <h6 className="heading-small text-muted mb-4">
                    User information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label className="form-control-label" htmlFor="CIN">
                            CIN
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="00000000"
                            id="CIN"
                            placeholder="CIN"
                            type="text"
                            value={this.state.cin}
                            onChange={this.cinOnchange}
                          />
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
                            className="form-control-alternative"
                            id="Num-inscri"
                            placeholder="12345678"
                            type="text"
                            value={this.state.numInscrit}
                            onChange={this.numInscritOnChange}
                          />
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
                            id="input-first-name"
                            placeholder="First name"
                            type="text"
                            value={this.state.firstName}
                            onChange={this.firstNameOnChange}
                          />
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
                            id="input-last-name"
                            placeholder="Last name"
                            type="text"
                            value={this.state.lastName}
                            onChange={this.lastNameOnchange}
                          />
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
                            id="input-Phone"
                            placeholder="Phone"
                            type="number"
                            value={this.state.phoneNumber}
                            onChange={this.phoneNumberOnchange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
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
                placeholder: "Date Picker Here"
              }}
              timeFormat={false}
            />
          </InputGroup>
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
                            defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                            id="input-address"
                            placeholder="Home Address"
                            type="text"
                            value={this.state.addressNaissance}
                            onChange={this.addressNaissanceOnchange}
                          />
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
                            id="input-city"
                            placeholder="1ére"
                            type="text"
                            value={this.state.niveau}
                            onChange={this.niveauOnchange}
                          />
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
                            id="input-country"
                            placeholder="TD1"
                            type="text"
                            value={this.state.td}
                            onChange={this.tdOnchange}
                          />
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
                            id="input-postal-code"
                            placeholder="TP1"
                            type="text"
                            value={this.state.tp}
                            onChange={this.tpOnchange}
                          />
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
          <label className="custom-control-label" htmlFor="customRadio5">
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
          <label className="custom-control-label" htmlFor="customRadio6">
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
          <label className="custom-control-label" htmlFor="customRadio7">
            retrait d'inscription
          </label>
        </div>
        </div>

                  {/* Description */}
                  <h6 className="heading-small text-muted mb-4">About me</h6>
                  <div className="pl-lg-4">
                    <FormGroup>
                      <label>Autre Document</label>
                      <Input
                        className="form-control-alternative"
                        placeholder="example d'autre document ..."
                        rows="4"
                        defaultValue=""
                        type="textarea"
                        value={this.state.autre}
                            onChange={this.autreOnchange}
                      />
                    </FormGroup>
                  </div>
                  <Button className="my-4" color="primary" type="submit">
                    Conformer
                  </Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Container>
      </>
    );
  }
}

export default AdminDocs;
