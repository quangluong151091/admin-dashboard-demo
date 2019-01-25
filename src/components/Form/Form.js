import React, { Component } from 'react';
const uuidv4 = require('uuid/v4');

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtUser: '',
      txtPass: '',
      sltLevel: 1
    }
  }
  changeInput = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    })
  }
  onSubmitForm = (event) => {
    event.preventDefault();
    event.target.reset();
    const { txtUser, txtPass, sltLevel } = this.state;

    const item = {};
    item.id = uuidv4();
    item.username = txtUser;
    item.password = txtPass;
    item.level = parseInt(sltLevel);

    this.props.addUser(item);
    
  }
  render() {
    return (
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="alert alert-danger" role="alert">
          <strong>Error </strong> Input value
              </div>
        <div className="alert alert-success" role="alert">
          <strong>Success </strong>
              </div>
        <div className="card">
          <div className="card-header">
            Add User
            <button
              type="button"
              className="close"
              aria-label="Close"
              onClick={(e) => this.props.formToggle(e)}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="card-block">
            <form method="POST" onSubmit={(e) => { this.onSubmitForm(e) }}>
              <div className="form-group">
                <label htmlFor="txtUser">Username</label>
                <input type="text" name="txtUser" className="form-control" placeholder="Nhập Thành Viên" onChange={(e) => this.changeInput(e)} />
              </div>
              <div className="form-group">
                <label htmlFor="txtPass">Password</label>
                <input type="text" name="txtPass" className="form-control" placeholder="Nhập Mật Khẩu" onChange={(e) => this.changeInput(e)} />
              </div>
              <div className="form-group">
                <label htmlFor="sltLevel">Permission</label>
                <select className="form-control" name='sltLevel' value={this.state.sltLevel} onChange={(e) => this.changeInput(e)}>
                  <option value={1}>Admin</option>
                  <option value={2}>Member</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary">Thêm</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default Form;
