import glamorous from "glamorous";

export const TypeAheadWrapper = glamorous.div({
  " .error-message": {
    color: "red",
    padding: "5px .25rem 0",
    textAlign: "center"
  },
  " .error-box": {
    border: "1px solid red"
  },
  " .email-message": {
    marginTop: "20px"
  },
  "@media only screen and (min-width: 640px)": {
    textAlign: "left",
    " .error-message": {
      textAlign: "left"
    }
  }
});
TypeAheadWrapper.displayName = "TypeAheadWrapper";

export const DivWrapper = glamorous.div({
  marginTop: "20px",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  alignItems: "center",
  "> p": {
    width: "100%",
    textAlign: "center",
    margin: "0 0 10px 0"
  },
  " input": {
    width: "100%",
    margin: "0 0 10px 0"
  },
  "@media only screen and (min-width: 640px)": {
    flexDirection: "row",
    "> p": {
      width: "50%",
      margin: "0 10px 0 0",
      textAlign: "right"
    },
    "> input": {
      width: "90%",
      margin: "0 10px 0 0"
    },
    "> div": {
      width: "20%",
      textAlign: "right",
      margin: "0 0 0 10px"
    },
    " .button-div": {
      maxWidth: "100%"
    }
  }
});
DivWrapper.displayName = "DivWrapper";
