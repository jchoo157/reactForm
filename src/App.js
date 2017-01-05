import React, { Component } from 'react';
import UserMeritRow from './UserMeritRow';
import MeritOptions from './MeritOptions';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      companyMerits: {
        sigmaEngineering: [
          { id: "x", title: "1000 Commits" },
          { id: "y", title: "100 Commits" },
          { id: "z", title: "First Commit" }
        ],
        superSmashBrosMerits: [
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
          identificationCode: '123'
        },
        { 
          email: 'jchoo156@gmail.com',
          firstName: 'Johnny',
          lastName: 'Choo',
          merit: { type: 'sigmaEngineering', id: 'y' },
          date: '01/01/2017',
          expirationDate: '02/01/2021',
          identificationCode: 'abc'
        },
        { 
          email: 'jchoo156@gmail.com',
          firstName: 'Johnny',
          lastName: 'Choo',
          merit: { type: 'sigmaEngineering', id: 'z' },
          date: '3/01/2015',
          expirationDate: '5/01/2019',
          identificationCode: '1337'
        }
      ]
    }

    this.addMerit = this.addMerit.bind(this);
  };

    addMerit(e) {
    var row = <UserMeritRow />
    var myArray = this.state.companyMerits;
    myArray.push(row);
    this.setState({companyMerits: myArray});
  }


  render() {
    return (
      <div>
        <MeritOptions companyMeritsProp={this.state.companyMerits} />
        {this.state.rows.map((user, i) => <UserMeritRow key={i} emailProp={user.email} firstNameProp={user.firstName} lastNameProp={user.lastName} meritIdProp={user.merit.id} meritProp={this.state.companyMerits[user.merit.type]} dateProp={user.date} expirationDateProp={user.expirationDate} identificationProp={user.identificationCode}/>)}
        <button onClick={this.addMerit}>ADD</button>
      </div>
    );
  }
}

export default App;