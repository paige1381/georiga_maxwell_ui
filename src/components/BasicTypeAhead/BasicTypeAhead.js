import React, { Component } from "react";
// import PropTypes from "prop-types";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.min.css";
import "react-bootstrap-typeahead/css/Typeahead-bs4.min.css";

// import { TypeAheadWrapper } from "./TypeAhead.style";

class BasicTypeAhead extends Component {
  state = {
    multiple: false
  };

  render() {
    const { multiple } = this.state;
    const options = ["red", "green", "blue"];

    return (
      <Typeahead
        labelKey="name"
        multiple={multiple}
        options={options}
        placeholder={this.props.placeholder}
      />
    );
  }
}

export default BasicTypeAhead;
