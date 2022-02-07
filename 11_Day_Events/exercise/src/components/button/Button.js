const Button = (props) => {
    const {btnStyle, text, onMouseEnter} = props
  return (
    <>
      <button style={btnStyle} onMouseEnter={onMouseEnter}>{text}
      </button>
    </>
  );
};

export default Button
