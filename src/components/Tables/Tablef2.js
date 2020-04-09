import React from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
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
  Table,
} from "reactstrap";

class Tablef2 extends React.Component {
  state = {
    ligne_1: {
      annee: "",
      institue: "",
    },
    list: [
      { name: "nader", lastname: "zini", age: 25 },
      { name: "dhiya", lastname: "zini", age: 52 },
      { name: "khalil", lastname: "zini", age: 22 },
    ],
    listForm: [
      {
        anneeU: "anneeU",
        institue: "institue",
        anneeS:"anneeS",
        filiaire :"filiere",
        Resultat :"resultat",
        value: { anneeU: "", institue: "",  anneeS:"", filiaire :"", Resultat :"" },
      },      
    ],
  };

  render() {
    return (
      <>
        {/* <table>
          {this.state.listForm.map((m, i, t) => {
            return (
              <tr>
                <td>
                  <Input
                    key={`${m.annee}_${i}`}
                    id={`${m.annee}_${i}`}
                    value={this.state.listForm[i].value.annee}
                    onChange={(e) => {
                      const v = e.target.value;
                      this.setState((prevState) => ({
                        listForm: prevState.listForm.map((obj, id) =>
                          id === i
                            ? {
                                annee: "annee",
                                institue: "institue",
                                value: { annee: v, institue: "" },
                              }
                            : obj
                        ),
                      }));
                    }}
                    placeholder={m.annee}
                  ></Input>
                </td>
                <td>
                  <Input id={m.institue} placeholder={m.institue}></Input>
                </td>
                {i + 1 == t.length && t.length < 3 && (
                  <td>
                    <Button
                      id="add"
                      onClick={() => {
                        const list = this.state.listForm;
                        list.push({
                          annee: "annee",
                          institue: "institue",
                          value: { annee: "", institue: "" },
                        });
                        this.setState({ listForm: list });
                      }}
                      style={{backgroundColor: "blue", color: "white" }}
                      
                    >
                      +
                    </Button>
                  </td>
                )}
                
                {i>0 && i + 1 == t.length && (
                  <td>
                    <Button
                      id="supp"
                      onClick={() => {
                        const list = this.state.listForm;
                        list.pop();
                        this.setState({ listForm: list });                                           
                      }}                    
                      style={{backgroundColor: "red", color: "white", marginLeft: i === 2 ? 56 : 2 }}
                    >
                      supp
                    </Button>{" "}
                  </td>
                )}
                
               
              </tr>
            );
          })} */}
          {/* <Button
            onClick={() =>
              console.table(this.state.listForm.map((x) => x.value.annee))
            }
          >
            anniet lkoll
          </Button>
        </table> */}

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
          {this.state.listForm.map((m, i, t) => {
            return (
              <tr>
                <td>
                  <Input
                    id={m.anneeU} placeholder={m.anneeU}
                  ></Input>
                </td>
                <td>
                  <Input id={m.institue} placeholder={m.institue}></Input>
                </td>
                <td>
                  <Input id={m.anneeS} placeholder={m.anneeS}></Input>
                </td>
                <td>
                  <Input id={m.filiaire} placeholder={m.filiaire}></Input>
                </td>
                <td>
                  <Input id={m.Resultat} placeholder={m.Resultat}></Input>
                </td>
                {i + 1 == t.length && t.length < 3 && (
                  <td>
                    <Button
                      id="add"
                      onClick={() => {
                        const list = this.state.listForm;
                        list.push({
                          anneeU: "annee",
                          institue: "institue",
                          value: { anneeU: "", institue: "" },
                        });
                        this.setState({ listForm: list });
                      }}
                      style={{backgroundColor: "blue", color: "white" }}
                      
                    >
                      +
                    </Button>
                  </td>
                )}
                
                {i>0 && i + 1 == t.length && (
                  <td>
                    <Button
                      id="supp"
                      onClick={() => {
                        const list = this.state.listForm;
                        list.pop();
                        this.setState({ listForm: list });                                           
                      }}                    
                      style={{backgroundColor: "red", color: "white" }}
                    >
                      supp
                    </Button>{" "}
                  </td>
                )}
                
               
              </tr>
            );
          })}

           
            
          </tbody>
        </Table>
      </>
    );
  }
}

export default Tablef2;
