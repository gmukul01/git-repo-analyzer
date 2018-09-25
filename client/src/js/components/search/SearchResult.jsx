import React, { PureComponent, Fragment } from "react";
import ReactLoading from "react-loading";

export default class extends PureComponent {
  render() {
    const { isLoading, errorMessage, result } = this.props;
    if (isLoading) {
      return <ReactLoading type="spinningBubbles" color="black" />;
    }

    if (errorMessage) {
      return <p>{`Error : ${errorMessage}`}</p>;
    }

    if (!result.items) {
      return null;
    }

    const rows = result.items.map(repo => (
      <tr key={repo.id}>
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
      <section className="search--table">
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
