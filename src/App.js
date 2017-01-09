import React, { Component } from 'react';
import UserMeritRow from './UserMeritRow';
import ChooseOrganization from './ChooseOrganization';
import SelectEmail from './SelectEmail';

var identificationGenerator = JSON.parse(localStorage.getItem('identificationGenerator'))
var selected = JSON.parse(localStorage.getItem('selected'))
var selectedCompany = JSON.parse(localStorage.getItem('selectedCompany'))
var selectedEmail = JSON.parse(localStorage.getItem('selectedEmail'))
var companyMerits = JSON.parse(localStorage.getItem('companyMerits'))
var rows = JSON.parse(localStorage.getItem('rows')) || [];

class App extends Component {

  constructor(props) {
    super(props);

    if (localStorage.getItem('rows') === null) {localStorage.setItem('rows', JSON.stringify([
  {
    'jchoo156@gmail.com': [
      { 
        email: 'jchoo156@gmail.com',
        firstName: 'Johnny',
        lastName: 'Choo',
        merit: { type: 'sigmaEngineering', id: 'x' },
        date: '12/01/2018',
        expirationDate: '8/01/2022',
        identificationCode: '1',
        selected: false
      },
      { 
        email: 'jchoo156@gmail.com',
        firstName: 'Johnny',
        lastName: 'Choo',
        merit: { type: 'sigmaEngineering', id: 'y' },
        date: '01/01/2017',
        expirationDate: '02/01/2021',
        identificationCode: '2',
        selected: false
      },
      { 
        email: 'jchoo156@gmail.com',
        firstName: 'Johnny',
        lastName: 'Choo',
        merit: { type: 'sigmaEngineering', id: 'z' },
        date: '3/01/2015',
        expirationDate: '5/01/2019',
        identificationCode: '3',
        selected: false
      },
      { 
        email: 'jchoo156@gmail.com',
        firstName: 'Johnny',
        lastName: 'Choo',
        merit: { type: 'superSmashBros', id: 'x' },
        date: '4/01/2012',
        expirationDate: '5/01/2019',
        identificationCode: '4',
        selected: false
      },
      { 
        email: 'jchoo156@gmail.com',
        firstName: 'Johnny',
        lastName: 'Choo',
        merit: { type: 'superSmashBros', id: 'y' },
        date: '11/01/2010',
        expirationDate: '5/01/2016',
        identificationCode: '5',
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
        identificationCode: '6',
        selected: false
      },
      { 
        email: 'omer@sigma.com',
        firstName: 'Omer',
        lastName: 'Test',
        merit: { type: 'sigmaEngineering', id: 'y' },
        date: '01/01/2017',
        expirationDate: '02/01/2021',
        identificationCode: '7',
        selected: false
      },
      { 
        email: 'omer@sigma.com',
        firstName: 'Omer',
        lastName: 'Test',
        merit: { type: 'sigmaEngineering', id: 'z' },
        date: '3/01/2015',
        expirationDate: '5/01/2019',
        identificationCode: '8',
        selected: false
      },
      { 
        email: 'omer@sigma.com',
        firstName: 'Omer',
        lastName: 'Test',
        merit: { type: 'marioKart', id: 'x' },
        date: '4/01/2012',
        expirationDate: '5/01/2019',
        identificationCode: '9',
        selected: false
      },
      { 
        email: 'omer@sigma.com',
        firstName: 'Omer',
        lastName: 'Test',
        merit: { type: 'marioKart', id: 'y' },
        date: '11/01/2010',
        expirationDate: '5/01/2016',
        identificationCode: '10',
        selected: false
      }
    ]
  }
]))}

    {localStorage.setItem('identificationGenerator', JSON.stringify(Math.random()))}
    if (localStorage.getItem('selected') === null) {localStorage.setItem('selected', JSON.stringify([]))}
    if (localStorage.getItem('selectedCompany') === null) {localStorage.setItem('selectedCompany', JSON.stringify('sigmaEngineering'))}
    if (localStorage.getItem('selectedEmail') === null) {localStorage.setItem('selectedEmail', JSON.stringify('jchoo156@gmail.com'))}
    if (localStorage.getItem('companyMerits') === null) {localStorage.setItem('companyMerits', JSON.stringify({
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
      }))}

    this.state = {
      identificationGenerator: identificationGenerator,
      selected: selected,
      selectedCompany: selectedCompany,
      selectedEmail: selectedEmail,
      companyMerits: companyMerits,
      rows: rows
    }

    this.addMerit = this.addMerit.bind(this);
    this.selectMerit = this.selectMerit.bind(this);
    this.chooseOrganization = this.chooseOrganization.bind(this);
    this.removeMerits = this.removeMerits.bind(this);
    this.sendMerits = this.sendMerits.bind(this);
    this.selectEmail = this.selectEmail.bind(this);
    this.updateMerit = this.updateMerit.bind(this);
  };

  addMerit() {
    var row = { email: this.state.selectedEmail, firstName: '', lastName: '', merit: { type: this.state.selectedCompany, id: '' }, date: '', expirationDate: '', identificationCode: this.state.identificationGenerator, selected: false }
    this.state.identificationGenerator = Math.random();
    var usersArray = this.state.rows;
    var userData = {};
    for(var i = 0; i < usersArray.length; i ++) {
      if(Object.keys(usersArray[i]) == this.state.selectedEmail) {
        usersArray[i][this.state.selectedEmail].push(row);
      }
    };

    localStorage.setItem('rows', JSON.stringify(usersArray));

    this.setState({rows: usersArray});
  }

  selectEmail(e) {
    localStorage.setItem('selectedEmail', JSON.stringify(e.target.value))
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

    var newArray = []
    this.state.rows.map((user,i) => (Object.keys(user) == this.state.selectedEmail) ? newArray.push(userObject) : newArray.push(user))
    this.setState({rows: newArray});
  };

  removeMerits(e) {
    var userRow = {};
    var currentRows = this.state.rows;
    {currentRows.map((user, i) => (Object.keys(user) == this.state.selectedEmail) ? userRow = user : "")}
    for(var i = 0; i < userRow[Object.keys(userRow)].length; i++) {
      if(userRow[Object.keys(userRow)][i].selected == true) {
        userRow[Object.keys(userRow)].splice(i, 1)
        i -= 1
      }
    }
    var newArray = []
    currentRows.map((user,i) => (Object.keys(user) == this.state.selectedEmail) ? newArray.push(userRow) : newArray.push(user))

    localStorage.setItem('rows', JSON.stringify(newArray));

    this.setState({rows: newArray});
  };

  sendMerits(e) {
    var userRow = {};
    var currentRows = this.state.rows;
    {currentRows.map((user, i) => (Object.keys(user) == this.state.selectedEmail) ? userRow = user : "")}
    for(var i = 0; i < userRow[Object.keys(userRow)].length; i++) {
      if(userRow[Object.keys(userRow)][i].selected == true) {
        userRow[Object.keys(userRow)].splice(i, 1)
        i -= 1
      }
    }
    console.log(userRow[Object.keys(userRow)][0].selected)
    var newArray = []
    currentRows.map((user,i) => (Object.keys(user) == this.state.selectedEmail) ? newArray.push(userRow) : newArray.push(user))
    this.setState({rows: newArray});

    alert("Merits have been succesfully sent to " + this.state.selectedEmail)
  }

  chooseOrganization(e) {
    localStorage.setItem('selectedCompany', JSON.stringify(e.target.value))
    this.setState({selectedCompany: e.target.value});
  };

  updateMerit(e) {
    var currentRows = this.state.rows;
    var companyVal = this.state.companyMerits[this.state.selectedCompany]
    var merit = ""
    for(var i = 0; i < companyVal.length; i++) {
      if(companyVal[i].title == e.target.value){
        merit = companyVal[i].id
      }
    }

    var email = this.state.selectedEmail;
    var userObject = {};
    for(var i = 0; i < currentRows.length; i++) {
      if(Object.keys(currentRows[i]) == email) {
        userObject = currentRows[i]
      }
    }

    for (var i = 0; i < userObject[Object.keys(userObject)].length; i++) {
      if(userObject[Object.keys(userObject)][i].identificationCode == e.target.id) {
        userObject[Object.keys(userObject)][i].merit.id = merit;
      }
    };

    localStorage.setItem('rows', JSON.stringify(currentRows));

    this.setState({rows: currentRows});
  }

  render() {
    return (
      <div>
        {console.log(this.state.rows)}
        <SelectEmail currentEmailProp={this.state.selectedEmail} selectEmailProp={this.selectEmail} emailsProp={this.state.rows.map((email, i) => Object.keys(email))} />
        <ChooseOrganization currentOrganizationProp={this.state.selectedCompany} chooseOrganizationProp={this.chooseOrganization} companyMeritsProp={Object.keys(this.state.companyMerits)} />

        {this.state.rows.map((email,i) => (Object.keys(email) == this.state.selectedEmail) ? 
          <div key={i}>
            <h1>{email[Object.keys(email)].map((user, i) => user.selected.toString())}</h1>
            <button onClick={this.removeMerits}>Remove</button>
            <button onClick={this.sendMerits}>Send</button>
            <UserMeritRow key={i} rowsProp={email} updateMeritProp={this.updateMerit} selectedCompanyProp={this.state.selectedCompany} selectProp={this.selectMerit} meritProp={this.state.companyMerits}/>
            <br />
            <button onClick={this.addMerit}>ADD</button>
          </div>
         : "" )}
        
      </div>
    );
  }
}

export default App;