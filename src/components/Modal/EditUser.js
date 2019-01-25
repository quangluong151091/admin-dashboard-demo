import React, { Component } from 'react';

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id : this.props.userEditObj.id,
      txtUser: this.props.userEditObj.username,
      txtPass: this.props.userEditObj.password,
      sltLevel: this.props.userEditObj.level
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
  handleSave = () => {
    const { txtUser, txtPass, sltLevel } = this.state;

    const item = {};
    item.id = this.props.userEditObj.id;
    item.username = txtUser;
    item.password = txtPass;
    item.level = parseInt(sltLevel);

    this.props.saveUser(item);
    this.props.closeForm();
  }
  render() {
    return (
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="card">
          <div className="card-header font-weight-bold bg-warning">
            Edit User Information
            <button
              type="button"
              className="close"
              aria-label="Close"
              onClick={(e) => this.props.closeForm(e)}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="card-block">
            <form method="POST">
              <div className="form-group">
                <label htmlFor="txtUser">Username</label>
                <input
                  type="text"
                  name="txtUser"
                  defaultValue={this.props.userEditObj.username}
                  className="form-control"
                  onChange={(e) => this.changeInput(e)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="txtPass">Password</label>
                <input
                  type="text"
                  name="txtPass"
                  defaultValue={this.props.userEditObj.password}
                  className="form-control"
                  onChange={(e) => this.changeInput(e)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="sltLevel">Permission</label>
                <select
                  className="form-control"
                  name='sltLevel'
                  defaultValue={this.props.userEditObj.level}
                  onChange={(e) => this.changeInput(e)}
                >
                  <option value={1}>Admin</option>
                  <option value={2}>Member</option>
                </select>
              </div>
              <button 
                type="button" 
                className="btn btn-success"
                onClick={() => this.handleSave()}
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default EditUser;
