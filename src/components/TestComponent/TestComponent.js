import React, { Component } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";

class TestComponent extends Component {
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
        placeholder="Choose a color..."
      />
    );
  }
}

export default TestComponent;
