import React, { Component } from "react";
import _ from "lodash";
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
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}
export default reduxForm({
  form: "surveyForm"
})(SurveyForm);
