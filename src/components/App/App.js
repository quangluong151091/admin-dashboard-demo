import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Table from '../Table/Table';
import Form from '../Form/Form';
import myData from '../../data.json'
import Search from '../Search/Search';
import EditUser from '../Modal/EditUser';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statusForm : false,
      showEditForm : false,
      usersData : [],
      textSearch : '',
      userEditObj : {}
    }
  }

  componentWillMount() {
    if (localStorage.getItem('initData') === null) {
      localStorage.setItem('initData', JSON.stringify(myData));
      this.setState({
        usersData : myData
      }) 
    } else {
      var temp = JSON.parse(localStorage.getItem('initData'));
      this.setState({
        usersData : temp
      }) 
    }
  }

  showForm = () => {
    if (this.state.statusForm) {
      return( 
        <Form
          formToggle={(e) => this.changeStatusForm(e)}
          addUser={ (item) => this.addUser(item) } />
    
      )
    }
  }
  changeStatusForm = (event) => {
    event.preventDefault();
    this.setState({
      statusForm : !this.state.statusForm
    })
    if (this.state.showEditForm) {
      this.setState({
        showEditForm : false
      })
    }
  }

  showEditForm = () => {
    if (this.state.showEditForm) {
      if (this.state.statusForm) {
        this.setState({
          statusForm: false
        })
      }
      return( 
        <EditUser
          userEditObj={this.state.userEditObj}
          showForm={this.state.showEditForm}
          saveUser={(item) => this.saveUser(item)}
          closeForm={(e) => this.changeEditForm(e)}
        />
      )
    }
  }
  changeEditForm = () => {
    this.setState({
      showEditForm : !this.state.showEditForm
    })
  }
  saveUser = (item) => {
    this.state.usersData.forEach((value) => {
      if(value.id === item.id) {
        value.username = item.username;
        value.password = item.password;
        value.level = item.level;
      }
    })
    localStorage.setItem('initData', JSON.stringify(this.state.usersData));
  }
  editUser = (user) => {
    this.setState({
      userEditObj : user
    })
  }
  
  addUser = (item) => {
    this.state.usersData.push(item);
    this.setState({
      usersData : this.state.usersData
    })
    localStorage.setItem('initData', JSON.stringify(this.state.usersData));
  }

  handleSearchClick = (event) => {
    event.preventDefault();
    var result = [];
    this.state.usersData.forEach((item) => {
      if (item.username.indexOf(this.state.textSearch) !== -1) {
        result.push(item);
      }
    })
    this.setState({
      usersData : result
    })
  }
  resetSearch = () => {
    this.setState({
      usersData : myData
    })
  }
  getTextSearch = (value) => {
    this.setState({
      textSearch : value
    })
  }
  
  deleteUser = (userId) => {
    let check = this.state.usersData;
    check = check.filter(item => item.id !== userId);
    
    this.setState({
      usersData : check
    }) 
    localStorage.setItem('initData', JSON.stringify(check));
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Nav/>
          <Search 
            resetSearch={(e) => this.resetSearch(e)}
            handleSearch={(value) => this.getTextSearch(value)}
            clickSearch={(e) => this.handleSearchClick(e)}
          />
          <div className="row">
            <Table
              usersData={ this.state.usersData }
              statusForm={ this.state.statusForm }
              showEditForm={ this.state.showEditForm }
              editForm={ () => this.changeEditForm() }
              formToggle={(e) => this.changeStatusForm(e)}
              editUser={(user) => this.editUser(user)}
              deleteUser={(userId) => this.deleteUser(userId)}
            >
            </Table>
            { this.showForm() }
            { this.showEditForm() }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
