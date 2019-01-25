import React, { Component } from 'react';
import TableRow from './TableRow';

class Table extends Component {
  changeButton = () => {
    if (!this.props.statusForm) {
      return(
        <a
          className="btn btn-success btn-sm"
          href="them"
          role="button"
          onClick={(e) => this.props.formToggle(e)}
        >
          <i className="fa fa-plus" aria-hidden="true" />
          Add
        </a>
      )
    } else {
      return(
        <a
          className="btn btn-danger btn-sm"
          href="dong"
          role="button"
          onClick={(e) => this.props.formToggle(e)}
        >
          <i className="fa fa-close" aria-hidden="true" />
          Close
        </a>
      )
    }
  }

  deleteClick = (userId) => {
    this.props.deleteUser(userId);
  }

  mappingData = () => {
    const tableRow = this.props.usersData.map((value, key) => {
      return( 
        <TableRow
          key={key}
          index={key}
          id={value.id}
          level={value.level}
          username= { value.username }
          editClick={(user) => this.props.editUser(value)}
          editForm={ () => this.props.editForm() }
          showEditForm={ this.props.showEditForm }
          deleteClick={(userId) => this.deleteClick(userId)}
        />
      )
    });
    return tableRow;
  }
  render() {
    return (
      <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 mt-3">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>No.</th>
              <th>Username</th>
              <th>Permission</th>
              <th className="text-center" colSpan={2}>
              { this.changeButton() }
              </th>
            </tr>
          </thead>
          <tbody>
            { this.mappingData() }
          </tbody>
        </table>
      </div>
    )
  }
}
export default Table;
