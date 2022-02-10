import { Component } from "react";
import validator from "validator";
import "./App.css";

const Input = ({
  text,
  type,
  name,
  onBlur,
  onChange,
  onClick,
  onSubmit,
  value,
  min,
  max,
}) => {
  return (
    <>
      <label htmlFor={name}>{text}: </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={text}
        value={value}
        min={min}
        max={max}
        onBlur={onBlur}
        onChange={onChange}
        onClick={onClick}
        onSubmit={onSubmit}
      />
    </>
  );
};

const InputWithType = (CompParam, type = "text") => {
  return class extends Component {
    state = {
      value: "",
      touched: false,
      submit: false,
      error: "",
    };
    render() {
      const handleTouched = () => {
        this.setState({ touched: true });
      };
      const types = [
        {
          type: "text",
          onBlur: () => {
            console.log("text");
            handleTouched();
            if (validator.isEmpty(this.state.value))
              this.setState({ error: "This field is not empty" });
            else this.setState({ error: "" });
          },
          onChange: (e) => {
            this.setState({ value: e.target.value });
          },
        },
        {
          type: "number",
          onBlur: () => {
            handleTouched();
            if (!validator.isNumeric(this.state.value))
              this.setState({ error: "Invalid number" });
            else this.setState({ error: "" });
          },
          onChange: (e) => {
            this.setState({ value: e.target.value });
          },
        },
        {
          type: "range",
          onBlur: () => {
            handleTouched();
            if (validator.isEmpty(this.state.value))
              this.setState({ error: "This field is not empty" });
            else this.setState({ error: "" });
          },
          onChange: (e) => {
            this.setState({ value: e.target.value });
            console.log(e.target.value);
          },
        },
        {
          type: "email",
          onBlur: () => {
            handleTouched();
            if (!validator.isEmail(this.state.value))
              this.setState({ error: "Invalid email" });
            else this.setState({ error: "" });
          },
          onChange: (e) => {
            this.setState({ value: e.target.value });
          },
        },
        {
          type: "password",
          onBlur: () => {
            handleTouched();
            if (!this.state.value.trim.length >= 8)
              this.setState({
                error: "Password require at least 8 characters",
              });
            else this.setState({ error: "" });
          },
          onChange: (e) => {
            this.setState({ value: e.target.value });
          },
        },
        {
          type: "tel",
          onBlur: () => {
            handleTouched();
            if (!validator.isMobilePhone(this.state.value))
              this.setState({ error: "Invalid phone number" });
            else this.setState({ error: "" });
          },
          onChange: (e) => {
            this.setState({ value: e.target.value });
          },
        },
        {
          type: "checkbox",
          onBlur: () => {
            handleTouched();
            if (validator.isEmpty(this.state.value))
              this.setState({ error: "This field is not empty" });
            else this.setState({ error: "" });
          },
          onChange: (e) => {
            this.setState({ value: e.target.value });
          },
        },
        {
          type: "radio",
          onBlur: () => {
            handleTouched();
          },
          onChange: (e) => {
            this.setState({ value: e.target.value });
          },
        },
        {
          type: "color",
          onBlur: () => {
            handleTouched();
            if (validator.isEmpty(this.state.value))
              this.setState({ error: "This field is not empty" });
            else this.setState({ error: "" });
          },
          onChange: (e) => {
            this.setState({ value: e.target.value });
          },
        },

        {
          type: "url",
          onBlur: () => {
            handleTouched();
            if (!validator.isURL(this.state.value))
              this.setState({ error: "Invalid URL" });
            else this.setState({ error: "" });
          },
          onChange: (e) => {
            this.setState({ value: e.target.value });
          },
        },
        {
          type: "image",
          onBlur: () => {
            handleTouched();
            if (validator.isEmpty(this.state.value))
              this.setState({ error: "This field is not empty" });
            else this.setState({ error: "" });
          },
          onChange: (e) => {
            this.setState({ value: e.target.value });
          },
        },
        {
          type: "file",
          onBlur: () => {
            handleTouched();
            if (validator.isEmpty(this.state.value))
              this.setState({ error: "This field is not empty" });
            else this.setState({ error: "" });
          },
          onChange: (e) => {
            this.setState({ value: e.target.value });
          },
        },

        {
          type: "hidden",
          onBlur: () => {
            handleTouched();
          },
          onChange: (e) => {
            this.setState({ value: e.target.value });
          },
        },

        {
          type: "date",
          onBlur: () => {
            handleTouched();
            if (validator.isEmpty(this.state.value))
              this.setState({ error: "This field is not empty" });
            else this.setState({ error: "" });
          },
          onChange: (e) => {
            this.setState({ value: e.target.value });
          },
        },
        {
          type: "datetime-local",
          onBlur: () => {
            handleTouched();
            if (validator.isEmpty(this.state.value))
              this.setState({ error: "This field is not empty" });
            else this.setState({ error: "" });
          },
          onChange: (e) => {
            this.setState({ value: e.target.value });
          },
        },
        {
          type: "month",
          onBlur: () => {
            handleTouched();
            if (validator.isEmpty(this.state.value))
              this.setState({ error: "This field is not empty" });
            else this.setState({ error: "" });
          },
          onChange: (e) => {
            this.setState({ value: e.target.value });
          },
        },
        {
          type: "week",
          onBlur: () => {
            handleTouched();
            if (validator.isEmpty(this.state.value))
              this.setState({ error: "This field is not empty" });
            else this.setState({ error: "" });
          },
          onChange: (e) => {
            this.setState({ value: e.target.value });
          },
        },
        {
          type: "time",
          onBlur: () => {
            handleTouched();
            if (validator.isEmpty(this.state.value))
              this.setState({ error: "This field is not empty" });
            else this.setState({ error: "" });
          },
          onChange: (e) => {
            this.setState({ value: e.target.value });
          },
        },

        {
          type: "reset",
          onBlur: () => {
            handleTouched();
            if (validator.isEmpty(this.state.value))
              this.setState({ error: "This field is not empty" });
            else this.setState({ error: "" });
          },
          onChange: (e) => {
            this.setState({ value: e.target.value });
          },
        },
        {
          type: "search",
          onBlur: () => {
            handleTouched();
          },
          onChange: (e) => {
            this.setState({ value: e.target.value });
          },
        },
        {
          type: "submit",
          onSubmit: () => {
            alert("you have submitted");
          },
        },
        {
          type: "button",
          onClick: () => {
            alert("You have clicked button");
          },
        },
      ];
      const { onBlur, onChange, onClick, onSubmit } = types.find(
        (item) => item.type === type
      );
      return (
        <div className="form-group">
          <Input
            {...this.props}
            onBlur={onBlur}
            onChange={onChange}
            onClick={onClick}
            onSubmit={onSubmit}
          />
          <br />
          <small>{this.state.error}</small>
        </div>
      );
    }
  };
};

const TextInput = InputWithType(Input);
const NumberInput = InputWithType(Input, "number");
const RangeInput = InputWithType(Input, "range");
const ButtonInput = InputWithType(Input, "button");

class App extends Component {
  render() {
    return (
      <div className="App">
        <TextInput text="text" type="text" name="text" />
        <NumberInput text="number" type="number" name="number" />
        <RangeInput text="range" type="range" name="range" min="50" max="200" />
        <ButtonInput text="button" type="button" name="button" value="button" />
      </div>
    );
  }
}

export default App;
