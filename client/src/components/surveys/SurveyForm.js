import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

class SurveyForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(console.log)}>
          <Field type="text" name="surveyTitle" component="input" />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}
export default reduxForm({
  form: "surveyForm"
})(SurveyForm);
