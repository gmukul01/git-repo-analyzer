import React, { PureComponent, Fragment } from "react";
import ReactLoading from "react-loading";

export default class extends PureComponent {
  render() {
    return (
      <div className="modal fade" id="myModal" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
              <h4 className="modal-title">{this.props.modalHeader}</h4>
            </div>
            <div className="modal-body">{this.props.children}</div>
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
