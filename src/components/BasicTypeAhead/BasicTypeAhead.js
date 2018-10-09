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
      error: null,
      invite: "",
      email: "",
      id: ""
    };
    this.pollInterval = null;
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // this.loadGuestsFromServer();
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
    if (evt[0]) {
      this.setState(
        {
          invite: evt[0].invite,
          email: evt[0].email,
          id: evt[0].id
        },
        () => {
          console.log("invite:", this.state.invite);
          console.log("email:", this.state.email);
          console.log("id:", this.state.id);
        }
      );
    }
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
    const options = [
      { id: 1, invite: "red", email: "red@test.com" },
      { id: 2, invite: "green" }
    ];

    return (
      <div>
        <Typeahead
          labelKey="invite"
          multiple={multiple}
          options={options}
          placeholder={this.props.placeholder}
          onChange={this.handleChange}
        />
        {this.state.email && this.state.email.length > 0 ? (
          <p className="center">
            The following email has already been provided: <br />
            {this.state.email}
          </p>
        ) : (
          <input className="form-control" placeholder="Enter your email" />
        )}
      </div>
    );
  }
}

export default BasicTypeAhead;
