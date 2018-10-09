import React from "react";
import PropTypes from "prop-types";

import ButtonWrapper from "./Button.style";

const Button = ({ text, handleClick }) => (
  <ButtonWrapper onClick={handleClick}>{text}</ButtonWrapper>
);

Button.propTypes = {
  text: PropTypes.string,
  handleClick: PropTypes.func
};

Button.defaultProps = {
  text: "Edit"
};

export default Button;
