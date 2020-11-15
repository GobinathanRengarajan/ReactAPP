import React from 'react';
import { render } from 'react-dom';
import './App.css';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table.min.js';
import Header  from './Header';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default class App extends React.Component {
    constructor(props) {
     super(props);
     this.state = {
       loading: true,
       dataSource:[]
      };
    }

    
    


    componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then((responseJson)=> {
      this.setState({
       loading: false,
       dataSource: responseJson
      })
    })
    .catch(error=>console.log(error)) 
    }



    
    render(){
      const cellEditProp = {
        mode: 'click',
        blurToSave: true
      };
     return(
<Router>
      <div class= "App">
        <Header />
        <div class="TableSec">
<BootstrapTable 
 data = {this.state.dataSource}
 cellEdit={ cellEditProp }
 pagination
 striped
 hover
 responsive
 search>
<TableHeaderColumn dataField='name' isKey={ true }>Name</TableHeaderColumn>
<TableHeaderColumn dataField='email' >Previous Month Balance</TableHeaderColumn>
<TableHeaderColumn dataField='website' >Current Month Amount</TableHeaderColumn>
<TableHeaderColumn dataField='username' >Amount Received</TableHeaderColumn>
<TableHeaderColumn dataField='phone'  editable={ { type: 'input' } } >Amount Paid</TableHeaderColumn>
<TableHeaderColumn dataField='id' >Balance</TableHeaderColumn>
</BootstrapTable>
</div>
      </div>
      </Router>        
    )
  }

}

