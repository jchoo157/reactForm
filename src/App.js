import React, { Component } from 'react';
import UserMeritRow from './UserMeritRow';
import ChooseOrganization from './ChooseOrganization';
import SelectEmail from './SelectEmail';

class App extends Component {

  constructor(props) {
    super(props);

    var identificationGenerator = JSON.parse(localStorage.getItem('identificationGenerator'))
    var selected = JSON.parse(localStorage.getItem('selected'))
    var selectedCompany = JSON.parse(localStorage.getItem('selectedCompany'))
    var selectedEmail = JSON.parse(localStorage.getItem('selectedEmail'))
    var companyMerits = JSON.parse(localStorage.getItem('companyMerits'))
    var rows = JSON.parse(localStorage.getItem('rows')) || [];

    if (localStorage.getItem('rows') === null) {localStorage.setItem('rows', JSON.stringify([
      {
        'jchoo156@gmail.com': [
          { 
            email: 'jchoo156@gmail.com',
            firstName: 'Johnny',
            lastName: 'Choo',
            merit: { type: 'Sigma Engineering', id: 'x' },
            date: '2017-01-10',
            expirationDate: '2099-01-10',
            identificationCode: '1',
            selected: false
          },
          { 
            email: 'jchoo156@gmail.com',
            firstName: 'Johnny',
            lastName: 'Choo',
            merit: { type: 'Sigma Engineering', id: 'y' },
            date: '2017-01-10',
            expirationDate: '2099-01-10',
            identificationCode: '2',
            selected: false
          },
          { 
            email: 'jchoo156@gmail.com',
            firstName: 'Johnny',
            lastName: 'Choo',
            merit: { type: 'Sigma Engineering', id: 'z' },
            date: '2017-01-10',
            expirationDate: '2099-01-10',
            identificationCode: '3',
            selected: false
          },
          { 
            email: 'jchoo156@gmail.com',
            firstName: 'Johnny',
            lastName: 'Choo',
            merit: { type: 'Super Smash Bros', id: 'x' },
            date: '2010-03-05',
            expirationDate: '2020-04-11',
            identificationCode: '4',
            selected: false
          },
          { 
            email: 'jchoo156@gmail.com',
            firstName: 'Johnny',
            lastName: 'Choo',
            merit: { type: 'Super Smash Bros', id: 'y' },
            date: '2010-01-19',
            expirationDate: '2015-01-19',
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
            merit: { type: 'Sigma Engineering', id: 'w' },
            date: '2016-03-01',
            expirationDate: '2099-03-01',
            identificationCode: '6',
            selected: false
          },
          { 
            email: 'omer@sigma.com',
            firstName: 'Omer',
            lastName: 'Test',
            merit: { type: 'Sigma Engineering', id: 'y' },
            date: '2016-03-01',
            expirationDate: '2099-03-01',
            identificationCode: '7',
            selected: false
          },
          { 
            email: 'omer@sigma.com',
            firstName: 'Omer',
            lastName: 'Test',
            merit: { type: 'Sigma Engineering', id: 'z' },
            date: '2016-03-01',
            expirationDate: '2099-03-01',
            identificationCode: '8',
            selected: false
          },
          { 
            email: 'omer@sigma.com',
            firstName: 'Omer',
            lastName: 'Test',
            merit: { type: 'Mario Kart', id: 'x' },
            date: '2012-01-10',
            expirationDate: '2019-01-10',
            identificationCode: '9',
            selected: false
          },
          { 
            email: 'omer@sigma.com',
            firstName: 'Omer',
            lastName: 'Test',
            merit: { type: 'Mario Kart', id: 'y' },
            date: '2010-01-10',
            expirationDate: '2016-01-10',
            identificationCode: '10',
            selected: false
          }
        ]
      }
    ]))}

    {localStorage.setItem('identificationGenerator', JSON.stringify(Math.random()))}
    if (localStorage.getItem('selected') === null) {localStorage.setItem('selected', JSON.stringify([]))}
    if (localStorage.getItem('selectedCompany') === null) {localStorage.setItem('selectedCompany', JSON.stringify('Sigma Engineering'))}
    if (localStorage.getItem('selectedEmail') === null) {localStorage.setItem('selectedEmail', JSON.stringify('jchoo156@gmail.com'))}
    if (localStorage.getItem('companyMerits') === null) {localStorage.setItem('companyMerits', JSON.stringify({
        'Sigma Engineering': [
          { id: "w", title: "Over 9000 Commits" },
          { id: "x", title: "1000 Commits" },
          { id: "y", title: "100 Commits" },
          { id: "z", title: "First Commit" }
        ],
        'Super Smash Bros': [
          { id: "x", title: "10 wins in a row" },
          { id: "y", title: "Win 100 online games" },
          { id: "z", title: "Beat every character" }
        ],
        'Mario Kart': [
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
    this.updateFirstName = this.updateFirstName.bind(this);
    this.updateValue = this.updateValue.bind(this);
    this.updateLastName = this.updateLastName.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updateDate = this.updateDate.bind(this);
    this.updateExpirationDate = this.updateExpirationDate.bind(this);
  };

  addMerit() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    if(dd < 10) {
      dd = '0' + dd
    } 
    if(mm < 10) {
        mm = '0' + mm
    } 
    today = yyyy+'-'+mm+'-'+dd;

    var row = { email: this.state.selectedEmail, firstName: '', lastName: '', merit: { type: this.state.selectedCompany, id: '' }, date: today, expirationDate: '', identificationCode: this.state.identificationGenerator, selected: false }
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
    localStorage.setItem('rows', JSON.stringify(newArray))
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

    localStorage.setItem('rows', JSON.stringify(newArray))

    this.setState({rows: newArray});

    alert("Sent email to " + this.state.selectedEmail)
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

  updateValue(value, e) {
    var id = e.target.parentElement.parentElement.id
    var currentRows = this.state.rows;
    var companyVal = this.state.companyMerits[this.state.selectedCompany]

    var email = this.state.selectedEmail;
    var userObject = {};
    for(var i = 0; i < currentRows.length; i++) {
      if(Object.keys(currentRows[i]) == email) {
        userObject = currentRows[i]
      }
    }

    for (var i = 0; i < userObject[Object.keys(userObject)].length; i++) {
      if(userObject[Object.keys(userObject)][i].identificationCode == id) {
        userObject[Object.keys(userObject)][i][value] = e.target.value;
      }
    };

    localStorage.setItem('rows', JSON.stringify(currentRows));

    this.setState({rows: currentRows});
  }

  updateFirstName(e) {
    this.updateValue('firstName', e);
  }

  updateLastName(e) {
    this.updateValue('lastName', e);
  }

  updateEmail(e) {
    this.updateValue('email', e);
  }

  updateDate(e) {
    this.updateValue('date', e);
  }

  updateExpirationDate(e) {
    this.updateValue('expirationDate', e);
  }

  render() {
    return (
      <div>
        <h1 className="center heebo heading"><span className="email-header">{this.state.selectedEmail}</span> <span className="sep">/</span> <span className="outbox-header">Outbox for <span className="organization-header">{this.state.selectedCompany}</span></span></h1>
        <div className="flex">
          <table>
            <tbody>
              <tr className="alike">
                <th className="font15 select-user-bg">Select User</th>
                <th className="font15 select-org-bg">Select Organization</th>
              </tr>
              <tr>
                <td><SelectEmail currentEmailProp={this.state.selectedEmail} selectEmailProp={this.selectEmail} emailsProp={this.state.rows.map((email, i) => Object.keys(email))} /></td>
                <td><ChooseOrganization currentOrganizationProp={this.state.selectedCompany} chooseOrganizationProp={this.chooseOrganization} companyMeritsProp={Object.keys(this.state.companyMerits)} /></td>
              </tr>
            </tbody>
          </table>
        </div>

        {this.state.rows.map((email, i) => (Object.keys(email) == this.state.selectedEmail) ? 
          <center>
            <div key={i} className="buttonOptions">
              <UserMeritRow key={i} rowsProp={email} updateMeritProp={this.updateMerit} selectedCompanyProp={this.state.selectedCompany} selectProp={this.selectMerit} meritProp={this.state.companyMerits} updateFirstNameProp={this.updateFirstName} updateLastNameProp={this.updateLastName} updateEmailProp={this.updateEmail} updateDateProp={this.updateDate} updateExpirationDateProp={this.updateExpirationDate}/>
              <br />
              <button className="buttonAdd button" onClick={this.addMerit}>Add</button>
              <button className="buttonRemove button" onClick={this.removeMerits}>Delete</button>
              <button className="buttonSend button" onClick={this.sendMerits}>Send</button>
            </div>
          </center>
         : "" )}
        
      </div>
    );
  }
}

export default App;