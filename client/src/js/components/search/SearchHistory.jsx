import React, { PureComponent } from "react";
import Modal from "components/Modal";

export default class SearchHistory extends PureComponent {
  render() {
    const { history } = this.props;

    const rows = history.map((repo, index) => {
      return (
        <tr key={repo.updated_at} data-toggle="modal" data-target={`#${index}`}>
          <td>{repo.repoName}</td>
          <td>{repo.commitCount}</td>
          <td>{repo.openPullRequenCount}</td>
          <td>
            <a href={repo.htmlUrl} target="_blank">
              Link
            </a>
          </td>
        </tr>
      );
    });

    const modals = history.map((repo, index) => {
      return <Modal key={repo.updated_at} readme={repo.readme} modalId={`${index}`} modalHeader={repo.repoName} />;
    });

    return (
      <section className="search--table container">
        <table className="table table-hover table-responsive">
          <thead>
            <tr>
              <th>Repo Full Name</th>
              <th>Commits</th>
              <th>Open Pull Reuests</th>
              <th>Repo Link</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
        {modals}
      </section>
    );
  }
}
