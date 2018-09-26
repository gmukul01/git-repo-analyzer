import React, { PureComponent } from "react";
import Modal from "components/Modal";

export default class SearchHistory extends PureComponent {
  render() {
    const { history } = this.props;

    const rows = history.map((repo, index) => {
      return (
        <tr key={repo.updated_at}>
          <td>{repo.repoName}</td>
          <td>{repo.commitCount}</td>
          <td>{repo.openPullRequenCount}</td>
          <td>
            <a href={`${repo.htmlUrl}`} target="_blank">
              Link
            </a>
          </td>
          <td>
            <a href="#" data-toggle="modal" data-target={`#${index}`}>
              Readme
            </a>
          </td>
        </tr>
      );
    });

    const modals = history.map((repo, index) => {
      return <Modal key={repo.updated_at} readme={repo.readme} modalId={`${index}`} modalHeader={repo.repoName} />;
    });

    return (
      <section className="table-responsive search-history-table">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Repo Full Name</th>
              <th>Commits</th>
              <th>Open Pull Reuests</th>
              <th>Repo Link</th>
              <th>Readme</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
        {modals}
      </section>
    );
  }
}
