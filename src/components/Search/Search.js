import React, { Component } from 'react';

class Search extends Component {
  isInputChange = (event) => {
    const value = event.target.value;
    this.props.handleSearch(value);
  }
  render() {
    return (
      <form className="form-inline my-2 my-md-0 mb-2">
        <div className="input-group col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <input
            className="form-control"
            aria-describedby="basic-addon1"
            type="text"
            placeholder="Search for ..."
            ref={(input) => { this.txtSearch = input }}
            onChange={(e) => this.isInputChange(e)}
          />
          <button
            className="input-group-addon"
            id="basic-addon1"
            type="reset"
            onClick={() => this.props.resetSearch()}
          >
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>
        </div>
        <button
          className="btn btn-outline-success my-2 my-sm-0"
          type="submit"
          onClick={(e) => this.props.clickSearch(e)}
        >
          Search
        </button>
      </form>
    )
  }
}
export default Search;
