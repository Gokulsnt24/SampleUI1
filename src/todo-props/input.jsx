const InputBox = ({ name, value, setTask, placeholder, type }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={(e) => setTask(e.target.value)}
      placeholder={placeholder}
    />
  );
};

InputBox.defaultProps = {
  type: "text",
  placeholder: "Enter text here!",
};

export default InputBox;