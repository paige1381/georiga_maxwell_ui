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
      error: null,
      guest: "",
      email: "",
      value: "-1"
    };
    this.pollInterval = null;
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.loadGuestsFromServer();
    // if (!this.pollInterval) {
    //   this.pollInterval = setInterval(this.loadGuestsFromServer, 10000);
    // }
  }

  // componentWillUnmount() {
  //   if (this.pollInterval) clearInterval(this.pollInterval);
  //   this.pollInterval = null;
  // }

  handleChange(evt) {
    console.log(evt);
    // const { selectItem, items, id } = this.props;
    // const { value } = evt.target;
    // const { item } = items[value];
    // this.setState(
    //   {
    //     value
    //   },
    //   () => {
    //     selectItem(id, item);
    //   }
    // );
  }

  // loadGuestsFromServer = () => {
  //   console.log("inside loadGuestsFromServer");
  //   fetch("/api/invites/", {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json"
  //     }
  //   })
  //     .then(data => data.json())
  //     .then(res => {
  //       if (!res.success) {
  //         this.setState({
  //           error: res.error
  //         });
  //       } else
  //         this.setState({ data: res.data }, () => console.log(this.state.data));
  //     });
  // };

  render() {
    const { multiple, data } = this.state;
    // const options = data.map(x => x.guest);
    const options = [{ id: 1, color: "red" }, { id: 2, color: "red" }];

    return (
      <div>
        <Typeahead
          labelKey="name"
          multiple={multiple}
          options={options}
          placeholder={this.props.placeholder}
          onChange={this.handleChange}
        />
        <input className="form-control" placeholder="Enter your email">
          {data.email}
        </input>
      </div>
    );
  }
}

export default BasicTypeAhead;
