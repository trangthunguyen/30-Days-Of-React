import React from "react";
import './SubscribeFormContent.css'

const SubscribeFormContent = () => {
    return (
      <div>
        <div>
          <input
            className="form__input"
            type={"text"}
            placeholder="First name"
          ></input>
          <input
            className="form__input"
            type={"text"}
            placeholder="Last name"
          ></input>
          <input
            className="form__input"
            type={"email"}
            placeholder="Email"
          ></input>
        </div>
        <button type="button" className="form__btn">
          Subscribe
        </button>
      </div>
    );
};

export default SubscribeFormContent