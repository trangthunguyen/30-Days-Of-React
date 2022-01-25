import React from "react";
import SubscribeFormContent from "./SubscribeFormContent/SubscribeFormContent";
import SubscribeFormTitle from "./SubscribeFormTitle/SubscribeFormTitle";
import "./SubscribeForm.css";

class SubscribeForm extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="form__container">
        <div className="form__content">
          <SubscribeFormTitle />
          <SubscribeFormContent />
        </div>
      </div>
    );
  }
}

export default SubscribeForm;
