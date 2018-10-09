import glamorous from "glamorous";

const TableWrapper = glamorous.table({
  marginTop: "20px",
  width: "100%",
  " td": {
    width: "50%"
  }
});
TableWrapper.displayName = "TableWrapper";

export default TableWrapper;
