import React, { Component } from 'react';

class TableRow extends Component {
  handleEdit = () => {
    this.props.editClick();
    this.props.editForm();
  }
  handleDelete = (userId) => {
    this.props.deleteClick(userId);
  }
  render() {
    return (
      <tr>
        <td> { (this.props.index + 1) } </td>
        <td> { this.props.username } </td>
        <td> { (this.props.level)===1 ? "Admin" : "Member" } </td>
        <td className="text-center" width="50px">
          <button
            className="btn btn-warning btn-sm"
            href="sua"
            onClick={() => this.handleEdit()}
          >
            <i className="fa fa-pencil-square-o" aria-hidden="true" />
            Edit
          </button>
        </td>
        <td className="text-center" width="50px">
          <button
            className="btn btn-danger btn-sm"
            href="xoa" 
            onClick={(id) => this.handleDelete(this.props.id)}
          >
            <i className="fa fa-trash-o" aria-hidden="true" />
            Delete
          </button>
        </td>
      </tr>
    )
  }
}
export default TableRow;
