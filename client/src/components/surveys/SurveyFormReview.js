import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { submitSurvey } from "../../actions";
import formFields from "./formFields";

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(formFields, field => (
    <div key={field.name}>
      <label>{field.label}</label>
      <div>{formValues[field.name]}</div>
    </div>
  ));

  return (
    <div>
      <h5>Please confirm your entries</h5>
      <div>{reviewFields}</div>
      <button className="yellow darken-3 btn-flat" onClick={onCancel}>
        Back
      </button>
      <button
        className="green btn-flat right white-text"
        onClick={() => submitSurvey(formValues, history)}
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

const mapStateToProps = ({ form }) => ({
  formValues: form.surveyForm.values
});

export default connect(
  mapStateToProps,
  { submitSurvey }
)(withRouter(SurveyFormReview));
