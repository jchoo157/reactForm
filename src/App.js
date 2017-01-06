import React, { Component } from 'react';
import UserMeritRow from './UserMeritRow';
import MeritOptions from './MeritOptions';
import SelectEmail from './SelectEmail';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: [],
      selectedCompany: 'sigmaEngineering',
      selectedEmail: 'jchoo156@gmail.com',
      companyMerits: {
        sigmaEngineering: [
          { id: "w", title: "Over 9000 Commits" },
          { id: "x", title: "1000 Commits" },
          { id: "y", title: "100 Commits" },
          { id: "z", title: "First Commit" }
        ],
        superSmashBros: [
          { id: "x", title: "10 wins in a row" },
          { id: "y", title: "Win 100 online games" },
          { id: "z", title: "Beat every character" }
        ],
        marioKart: [
          { id: "x", title: "Unlock all characters" },
          { id: "y", title: "Complete all levels" },
          { id: "z", title: "Fastest Time" }
        ]
      },

      rows: [
        {
          'jchoo156@gmail.com': [
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
            },
            { 
              email: 'jchoo156@gmail.com',
              firstName: 'Johnny',
              lastName: 'Choo',
              merit: { type: 'superSmashBros', id: 'x' },
              date: '4/01/2012',
              expirationDate: '5/01/2019',
              identificationCode: '1235',
              selected: false
            },
            { 
              email: 'jchoo156@gmail.com',
              firstName: 'Johnny',
              lastName: 'Choo',
              merit: { type: 'superSmashBros', id: 'y' },
              date: '11/01/2010',
              expirationDate: '5/01/2016',
              identificationCode: '12312',
              selected: false
            }
          ]
        },
        {
          'omer@sigma.com': [
            { 
              email: 'omer@sigma.com',
              firstName: 'Omer',
              lastName: 'Test',
              merit: { type: 'sigmaEngineering', id: 'w' },
              date: '12/01/2018',
              expirationDate: '8/01/2022',
              identificationCode: '1231',
              selected: false
            },
            { 
              email: 'omer@sigma.com',
              firstName: 'Omer',
              lastName: 'Test',
              merit: { type: 'sigmaEngineering', id: 'y' },
              date: '01/01/2017',
              expirationDate: '02/01/2021',
              identificationCode: 'abc',
              selected: false
            },
            { 
              email: 'omer@sigma.com',
              firstName: 'Omer',
              lastName: 'Test',
              merit: { type: 'sigmaEngineering', id: 'z' },
              date: '3/01/2015',
              expirationDate: '5/01/2019',
              identificationCode: '542',
              selected: false
            },
            { 
              email: 'omer@sigma.com',
              firstName: 'Omer',
              lastName: 'Test',
              merit: { type: 'marioKart', id: 'x' },
              date: '4/01/2012',
              expirationDate: '5/01/2019',
              identificationCode: '532',
              selected: false
            },
            { 
              email: 'omer@sigma.com',
              firstName: 'Omer',
              lastName: 'Test',
              merit: { type: 'marioKart', id: 'y' },
              date: '11/01/2010',
              expirationDate: '5/01/2016',
              identificationCode: '5125',
              selected: false
            }
          ]
        }
      ]
    }

    this.addMerit = this.addMerit.bind(this);
    this.selectMerit = this.selectMerit.bind(this);
    this.chooseOrganization = this.chooseOrganization.bind(this);
    this.removeMerits = this.removeMerits.bind(this);
    this.sendMerits = this.sendMerits.bind(this);
    this.selectEmail = this.selectEmail.bind(this);
  };

  addMerit() {
    var row = { email: '', firstName: '', lastName: '', merit: { type: this.state.selectedCompany, id: '' }, date: '', expirationDate: '', identificationCode: '' }
    var myArray = this.state.rows;
    myArray.push(row);
    this.setState({rows: myArray});
  }

  selectEmail(e) {
    this.setState({selectedEmail: e.target.value})
  }

  selectMerit(e) {
    var email = this.state.selectedEmail;
    var userObject = {};
    var userRow = this.state.rows.map((row, i) => (Object.keys(row) == this.state.selectedEmail) ? (userObject = row) : "");
    for (var i = 0; i < userObject[Object.keys(userObject)].length; i++) {
      if(userObject[Object.keys(userObject)][i].identificationCode == e.target.id && userObject[Object.keys(userObject)][i].selected == false) {
        userObject[Object.keys(userObject)][i].selected = true;
      }
      else if(userObject[Object.keys(userObject)][i].identificationCode == e.target.id && userObject[Object.keys(userObject)][i].selected == true) {
        userObject[Object.keys(userObject)][i].selected = false;
      }
    };
    this.setState({rows: [userObject]});
  };

  removeMerits(e) {
    var userRow = {};
    var currentRows = this.state.rows;
    {currentRows.map((user, i) => (Object.keys(user) == this.state.selectedEmail) ? userRow = user : "")}
    for(var i = 0; i < userRow[Object.keys(userRow)].length; i++) {
      if(userRow[Object.keys(userRow)].selected == true) {
        userRow[Object.keys(userRow)].splice(i, 1)
        i -= 1
      }
    }

    this.setState({rows: [userRow]})
  };

  sendMerits(e) {
    var user = this.state.rows[0].email
    var currentRows = this.state.rows;
    for(var i = 0; i < currentRows.length; i++) {
      if(currentRows[i].selected == true) {
        currentRows.splice(i, 1)
        i -= 1
      }
    }

    this.setState({rows: currentRows})

    alert("Merits have been succesfully sent to " + user)
  }

  chooseOrganization(e) {
    this.setState({selectedCompany: e.target.value});
  };

  render() {
    return (
      <div>
        <SelectEmail selectEmailProp={this.selectEmail} emailsProp={this.state.rows.map((email, i) => Object.keys(email))} />
        <MeritOptions chooseOrganizationProp={this.chooseOrganization} companyMeritsProp={Object.keys(this.state.companyMerits)} />

        {this.state.rows.map((email,i) => (Object.keys(email) == this.state.selectedEmail) ? 
          <div>
            <h1>{email[Object.keys(email)].map((user, i) => user.selected.toString())}</h1>
            <button onClick={this.removeMerits}>Remove</button>
            <button onClick={this.sendMerits}>Send</button>
            {email[Object.keys(email)].map((user, i) => (user.merit.type == this.state.selectedCompany) ? <UserMeritRow key={i} selectedProp={user.selected} selectProp={this.selectMerit} emailProp={user.email} firstNameProp={user.firstName} lastNameProp={user.lastName} meritIdProp={user.merit.id} meritProp={this.state.companyMerits[user.merit.type]} dateProp={user.date} expirationDateProp={user.expirationDate} identificationProp={user.identificationCode}/> : "")}
            <button onClick={this.addMerit}>ADD</button>
          </div>
         : "" )}
        
      </div>
    );
  }
}

export default App;