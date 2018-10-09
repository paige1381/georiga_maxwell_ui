import React, { Component } from "react";
// import PropTypes from "prop-types";
import axios from "axios";
import Button from "../Button/Button";
import TableWrapper from "./BasicTypeAhead.style";
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
      data: [],
      guests: "",
      email: "",
      _id: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTextInput = this.handleTextInput.bind(this);
  }

  // componentWillMount() {
  //   this.loadInvitesFromServer();
  // if (!this.pollInterval) {
  //   this.pollInterval = setInterval(this.loadGuestsFromServer, 10000);
  // }
  // }

  // componentWillUnmount() {
  //   if (this.pollInterval) clearInterval(this.pollInterval);
  //   this.pollInterval = null;
  // }

  handleChange(evt) {
    console.log(evt);
    if (evt[0]) {
      this.setState(
        {
          guests: evt[0].guests,
          email: evt[0].email,
          _id: evt[0]._id
        },
        () => {
          console.log("guests:", this.state.guests);
          console.log("email:", this.state.email);
          console.log("_id:", this.state._id);
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

  handleTextInput(evt) {
    // console.log("text change", evt.value);
    this.setState(
      {
        email: evt.target.value
      },
      () => {
        console.log(this.state.email);
      }
    );
  }

  handleEdit() {
    console.log("Edit");
  }

  handleSubmit() {
    console.log("Submit");
    axios
      .put(
        `https://georgia-maxwell-backend.herokuapp.com/invites/${
          this.state._id
        }`,
        {
          email: this.state.email
        }
      )
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentWillMount() {
    console.log("inside loadGuestsFromServer");
    axios
      .get("https://georgia-maxwell-backend.herokuapp.com/invites")
      .then(res => {
        console.log(res);
        this.setState(
          {
            data: res.data
          },
          () => {
            console.log(this.state.data);
          }
        );
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { multiple, email, data, guests } = this.state;
    const options = data;

    console.log(options);

    return (
      <div>
        <Typeahead
          labelKey="guests"
          multiple={multiple}
          options={options}
          placeholder={this.props.placeholder}
          onChange={this.handleChange}
        />

        {guests &&
        guests.length > 0 &&
        options.email &&
        options.email.length > 0 ? (
          <div>
            <p className="center">
              The following email has already been provided:
            </p>
            <TableWrapper>
              <tbody>
                <tr>
                  <td className="right">{email}</td>
                  <td className="left">
                    <Button handleClick={this.handleEdit} />
                  </td>
                </tr>
              </tbody>
            </TableWrapper>
          </div>
        ) : null}
        {guests &&
        guests.length > 0 &&
        (!options.email || options.email.length === 0) ? (
          <TableWrapper>
            <tbody>
              <tr>
                <td className="right">
                  <input
                    className="form-control"
                    placeholder="Enter your email"
                    onChange={this.handleTextInput}
                  />
                </td>
                <td className="left">
                  <Button handleClick={this.handleSubmit} text="Submit" />
                </td>
              </tr>
            </tbody>
          </TableWrapper>
        ) : null}
      </div>
    );
  }
}

export default BasicTypeAhead;
