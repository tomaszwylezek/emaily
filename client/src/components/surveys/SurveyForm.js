import React, { Component } from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";

const FIELDS = [
  {
    label: "Survey title",
    name: "title"
  },
  {
    label: "Subject line",
    name: "subject"
  },
  {
    label: "Email body",
    name: "body"
  },
  {
    label: "Recipient List",
    name: "emails"
  }
];

class SurveyForm extends Component {
  renderFields() {
    return (
      <>
        {_.map(FIELDS, ({ label, name }) => (
          <Field
            component={SurveyField}
            name={name}
            type="text"
            label={label}
          />
        ))}
      </>
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(val => console.log(val))}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">Cancel</Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}
export default reduxForm({
  form: "surveyForm"
})(SurveyForm);
