import React, { useRef } from "react";

const InputContainer = (props) => {
  // console.log(props);
  const inputRef = useRef();
  const labelRef = useRef();

  const changeLabel = () => {
    if (inputRef.current.value.length === 0) {
      labelRef.current.style.transform = "translateY(-20px)";
    }
  };
  const changeLabelPosition = () => {
    if (inputRef.current.value.length === 0) {
      labelRef.current.style.transform = "none";
    }
  };
  return (
    <div className="input_container">
      <input
        type={props.type}
        id={props.id}
        onChange={props.onChange}
        ref={inputRef}
        onClick={changeLabel}
        onBlur={changeLabelPosition}
      />
      <label htmlFor={props.id} ref={labelRef}>
        {props.labelName}
      </label>
    </div>
  );
};

export default InputContainer;
