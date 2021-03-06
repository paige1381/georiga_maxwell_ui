import glamorous from "glamorous";

const ButtonWrapper = glamorous.button("form-control", {
  minWidth: "80px",
  maxWidth: "100%",
  backgroundColor: "white",
  letterSpacing: ".5px",
  ":hover": {
    cursor: "pointer"
  }
});
ButtonWrapper.displayName = "ButtonWrapper";

export default ButtonWrapper;
