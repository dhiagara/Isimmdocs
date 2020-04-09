import React from 'react'
import axios from 'axios'
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

class Users extends React.Component{
    state={
        users:[],
    };

componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/users')
         .then(res => {
             console.log(res);
             this.setState({users: res.data});

         });  
}
render(){
    return(
    <div>
        
        <Table className="align-items-center" responsive>
                        <thead className="thead-light">
                            <tr>
                            <th scope="col">name</th>
                            <th scope="col">user name</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">
                          
                                <ul>
                              {this. state .users .map(user =><li> {user.name} </li>)}
                              </ul>
                             
                            </th>
                            <td>
                         
                            <ul>
                              {this. state .users .map(user =><li> {user.username} </li>)}
                              </ul>    
                            </td>
                            </tr>

                           
                        </tbody>
                        </Table>
    </div>)
}
}
export default Users;