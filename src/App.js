import React, { Component } from 'react';
import UserMeritRow from './UserMeritRow';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        sigmaMerits: [
          { id: "x", title: "1000 Commits" },
          { id: "y", title: "100 Commits" },
          { id: "z", title: "First Commit" }
        ]
      },

      rows: [
        { 
          email: 'jchoo156@gmail.com',
          firstName: 'Johnny',
          lastName: 'Choo',
          merit: { type: 'sigmaMerits', id: 'x' },
          date: '12/01/2018',
          expirationDate: '8/01/2022',
          identificationCode: '123'
        },
        { 
          email: 'jchoo156@gmail.com',
          firstName: 'Johnny',
          lastName: 'Choo',
          merit: { type: 'sigmaMerits', id: 'y' },
          date: '01/01/2017',
          expirationDate: '02/01/2021',
          identificationCode: 'abc'
        },
        { 
          email: 'jchoo156@gmail.com',
          firstName: 'Johnny',
          lastName: 'Choo',
          merit: { type: 'sigmaMerits', id: 'z' },
          date: '3/01/2015',
          expirationDate: '5/01/2019',
          identificationCode: '1337'
        }
      ]
    }

    this.addRow = this.addRow.bind(this);
  };

    addRow() {
    var row = <UserMeritRow />
    var myArray = this.state.data;
    myArray.push(row);
    this.setState({data: myArray});
  }


  render() {
    return (
      <div>
        {this.state.rows.map((user, i) => <UserMeritRow key={i} emailProp={user.email} firstNameProp={user.firstName} lastNameProp={user.lastName} meritIdProp={user.merit.id} meritProp={this.state.data[user.merit.type]} dateProp={user.date} expirationDateProp={user.expirationDate} identificationProp={user.identificationCode}/>)}
        <button onClick={this.addData}>ADD</button>
      </div>
    );
  }
}

export default App;