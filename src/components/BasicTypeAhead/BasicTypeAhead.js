import React, { Component } from "react";
// import PropTypes from "prop-types";
import "whatwg-fetch";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.min.css";
import "react-bootstrap-typeahead/css/Typeahead-bs4.min.css";

// import { TypeAheadWrapper } from "./TypeAhead.style";

class BasicTypeAhead extends Component {
  constructor() {
    super();
    this.state = {
      multiple: false,
      data: [],
      error: null
    };
    this.pollInterval = null;
  }

  componentDidMount() {
    this.loadGuestsFromServer();
    if (!this.pollInterval) {
      this.pollInterval = setInterval(this.loadGuestsFromServer, 10000);
    }
  }

  componentWillUnmount() {
    if (this.pollInterval) clearInterval(this.pollInterval);
    this.pollInterval = null;
  }

  loadGuestsFromServer = () => {
    console.log("inside loadGuestsFromServer");
    fetch("/api/invites/", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(data => data.json())
      .then(res => {
        if (!res.success) {
          this.setState({
            error: res.error
          });
        } else
          this.setState({ data: res.data }, () => console.log(this.state.data));
      });
  };

  render() {
    const { multiple } = this.state;
    const options = this.state.data.map(x => x.guest);

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
