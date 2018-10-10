import glamorous from "glamorous";

export const TypeAheadWrapper = glamorous.div({
  " .error-message": {
    color: "red",
    padding: "5px .25rem 0"
  },
  " .error-box": {
    border: "1px solid red"
  }
});
TypeAheadWrapper.displayName = "TypeAheadWrapper";

export const TableWrapper = glamorous.table({
  marginTop: "20px",
  width: "100%",
  " td": {
    width: "50%"
  }
});
TableWrapper.displayName = "TableWrapper";
