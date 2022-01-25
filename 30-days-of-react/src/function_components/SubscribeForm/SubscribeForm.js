import React from "react";
import SubscribeFormContent from "./SubscribeFormContent/SubscribeFormContent";
import SubscribeFormTitle from "./SubscribeFormTitle/SubscribeFormTitle";
import './SubscribeForm.css'

const SubscribeForm = () => {
    return (
      <div className="form__container">
        <div className="form__content">
          <SubscribeFormTitle />
          <SubscribeFormContent />
        </div>
      </div>
    );
  };

export default SubscribeForm