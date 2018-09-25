import React, { PureComponent } from "react";
import ReactMarkdown from "react-markdown";

export default class Modal extends PureComponent {
  render() {
    const source = this.props.readme || "### Readme is not available";

    return (
      <div className="modal fade" id={this.props.modalId} role="dialog">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
              <h4 className="modal-title">{this.props.modalHeader}</h4>
            </div>
            <div className="modal-body">
              <ReactMarkdown source={source} />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
