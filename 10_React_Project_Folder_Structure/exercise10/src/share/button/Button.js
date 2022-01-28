import react from "react";
import '../../style/components/button/Button.scss'

const Button = (props) => {
  const { text, onClick, style } = props;
  return (
    <button className="btn" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
