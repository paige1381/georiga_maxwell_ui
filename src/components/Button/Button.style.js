import glamorous from "glamorous";

const ButtonWrapper = glamorous.button("form-control", {
  minWidth: "80px",
  maxWidth: "120px",
  backgroundColor: "white",
  letterSpacing: ".5px"
});
ButtonWrapper.displayName = "ButtonWrapper";

export default ButtonWrapper;
