import React, { Component } from "react";

import { fetchSurveys } from "../../actions";
import { connect } from "react-redux";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.reverse().map(survey => {
      return (
        <div className="card darken-1" key={survey.id}>
          <div className="card-content">
            <span className="card-title"> {survey.title}</span>
            <p>{survey.body}</p>
            <p className="right">
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <a href="#">Yes: {survey.yes}</a>
            <a href="#">No: {survey.no}</a>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderSurveys()}</div>;
  }
}

const mapStateToProps = ({ surveys }) => ({
  surveys
});
export default connect(
  mapStateToProps,
  { fetchSurveys }
)(SurveyList);
