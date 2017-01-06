import React, { Component } from 'react';
import UserMeritRow from './UserMeritRow';
import MeritOptions from './MeritOptions';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: [],
      selectedCompany: 'sigmaEngineering',
      companyMerits: {
        sigmaEngineering: [
          { id: "x", title: "1000 Commits" },
          { id: "y", title: "100 Commits" },
          { id: "z", title: "First Commit" }
        ],
        superSmashBros: [
          { id: "x", title: "Unlock all characters" },
          { id: "y", title: "Complete all levels" },
          { id: "z", title: "Fastest Time" }
        ]
      },

      rows: [
        { 
          email: 'jchoo156@gmail.com',
          firstName: 'Johnny',
          lastName: 'Choo',
          merit: { type: 'sigmaEngineering', id: 'x' },
          date: '12/01/2018',
          expirationDate: '8/01/2022',
          identificationCode: '123',
          selected: false
        },
        { 
          email: 'jchoo156@gmail.com',
          firstName: 'Johnny',
          lastName: 'Choo',
          merit: { type: 'sigmaEngineering', id: 'y' },
          date: '01/01/2017',
          expirationDate: '02/01/2021',
          identificationCode: 'abc',
          selected: false
        },
        { 
          email: 'jchoo156@gmail.com',
          firstName: 'Johnny',
          lastName: 'Choo',
          merit: { type: 'sigmaEngineering', id: 'z' },
          date: '3/01/2015',
          expirationDate: '5/01/2019',
          identificationCode: '1337',
          selected: false
        }
      ]
    }

    this.addMerit = this.addMerit.bind(this);
    this.selectMerit = this.selectMerit.bind(this);
    this.chooseOrganization = this.chooseOrganization.bind(this);
    this.removeMerits = this.removeMerits.bind(this);
    this.sendMerits = this.sendMerits.bind(this);
  };

  addMerit() {
    var row = { email: '', firstName: '', lastName: '', merit: { type: this.state.selectedCompany, id: '' }, date: '', expirationDate: '', identificationCode: '' }
    var myArray = this.state.rows;
    myArray.push(row);
    this.setState({rows: myArray});
  }

  selectMerit(e) {
    var meritRows = this.state.rows;
    for (var i = 0; i < meritRows.length; i++) {
      if(meritRows[i].identificationCode == e.target.id && meritRows[i].selected == false) {
        meritRows[i].selected = true;
      }
      else if(meritRows[i].identificationCode == e.target.id && meritRows[i].selected == true) {
        meritRows[i].selected = false;
      }
    };
    this.setState({rows: meritRows});
  };

  removeMerits(e) {
    var currentRows = this.state.rows;
    for(var i = 0; i < currentRows.length; i++) {
      if(currentRows[i].selected == true) {
        currentRows.splice(i, 1)
        i -= 1
      }
    }

    this.setState({rows: currentRows})
  };

  sendMerits(e) {

  }

  chooseOrganization(e) {
    this.setState({selectedCompany: e.target.value});
  };

  render() {
    return (
      <div>
        <h1>{this.state.rows.map((user, i) => user.selected.toString())}</h1>
        <button onClick={this.removeMerits}>Remove</button>
        <button onClick={this.sendMerits}>Send</button>
        <MeritOptions chooseOrganizationProp={this.chooseOrganization} companyMeritsProp={Object.keys(this.state.companyMerits)} />
        {this.state.rows.map((user, i) => (user.merit.type == this.state.selectedCompany) ? <UserMeritRow key={i} selectedProp={user.selected} selectProp={this.selectMerit} emailProp={user.email} firstNameProp={user.firstName} lastNameProp={user.lastName} meritIdProp={user.merit.id} meritProp={this.state.companyMerits[user.merit.type]} dateProp={user.date} expirationDateProp={user.expirationDate} identificationProp={user.identificationCode}/> : "")}
        <button onClick={this.addMerit}>ADD</button>
      </div>
    );
  }
}

export default App;