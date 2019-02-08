import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import formFields from "./formFields";

const SurveyFormReview = ({ onCancel, formValues }) => {
  const reviewFields = _.map(formFields, field => (
    <div key={field.name}>
      <label>{field.label}</label>
      <div>{formValues[field.name]}</div>
    </div>
  ));

  return (
    <div>
      <h5>Please confirm your entries</h5>
      <div>{reviewFields()}</div>
      <button className="yellow darken-3 btn-flat" onClick={onCancel}>
        Back
      </button>
    </div>
  );
};

const mapStateToProps = ({ form }) => ({
  formValues: form.surveyForm.values
});

export default connect(mapStateToProps)(SurveyFormReview);
