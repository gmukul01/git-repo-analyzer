import React, { PureComponent, Fragment } from "react";

export default class SearchForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      ownerName: "",
      repoName: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleClick(evt) {
    evt.preventDefault();
    this.props.fetchRepoDetails(this.state);
  }

  render() {
    return (
      <Fragment>
        <form className="search--form">
          <input value={this.state.ownerName} onChange={this.handleChange} type="text" name="ownerName" className="form-control" placeholder="Owner Name" />
          <span>/</span>
          <input value={this.state.repoName} onChange={this.handleChange} type="text" name="repoName" className="form-control" placeholder="Repository Name" />
          <button className="btn btn-primary" onClick={this.handleClick}>
            Search
          </button>
        </form>
      </Fragment>
    );
  }
}
