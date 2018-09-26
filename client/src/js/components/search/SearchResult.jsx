import React, { PureComponent } from "react";

export default class extends PureComponent {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evnt, repo) {
    evnt.preventDefault();
    this.props.addToSearchHistory(repo.full_name, repo.html_url);
  }

  render() {
    const { result } = this.props;

    const rows = result.items.map(repo => (
      <tr key={repo.id} onClick={evnt => this.handleClick(evnt, repo)}>
        <td>{repo.owner.login}</td>
        <td>{repo.name}</td>
        <td>
          <a href={repo.url} target="_blank">
            Link
          </a>
        </td>
      </tr>
    ));

    return (
      <section className="search--table container">
        <table className="table table-hover table-responsive">
          <thead>
            <tr>
              <th>Owner Name</th>
              <th>Repo Name</th>
              <th>Repo Link</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </section>
    );
  }
}
