import React, { Component } from "react";
// import PropTypes from "prop-types";
import axios from "axios";
import Button from "../Button/Button";
import { TypeAheadWrapper, TableWrapper } from "./BasicTypeAhead.style";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.min.css";
import "react-bootstrap-typeahead/css/Typeahead-bs4.min.css";
import {
  showEmailInput,
  showEmailEdit,
  isValidEmail
} from "../../lib/validation.utils.js";

// import { TypeAheadWrapper } from "./TypeAhead.style";

class BasicTypeAhead extends Component {
  constructor() {
    super();
    this.state = {
      multiple: false,
      error: false,
      data: [],
      guests: "",
      email: "",
      _id: "",
      hasEmail: false,
      errorMessage: "",
      loading: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
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
    this.setState({
      error: false,
      guests: "",
      email: "",
      _id: "",
      hasEmail: false,
      errorMessage: "",
      loading: false
    });
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
          if (this.state.email && this.state.email.length > 0) {
            this.setState(
              {
                hasEmail: true
              },
              () => {
                console.log("hasEmail:", this.state.hasEmail);
              }
            );
          }
        }
      );
    }
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

  handleEdit(evt) {
    this.setState({
      hasEmail: false
    });
  }

  handleSubmit(evt) {
    console.log("Submit");
    this.setState({
      loading: true
    });
    console.log("isValidEmail:", isValidEmail(this.state.email));
    if (isValidEmail(this.state.email)) {
      axios
        .put(
          `https://georgia-maxwell-backend.herokuapp.com/invites/${
            this.state._id
          }`,
          {
            email: this.state.email,
            error: false,
            errorMessage: ""
          }
        )
        .then(res => {
          console.log(res);
          this.setState(
            {
              hasEmail: true,
              loading: false,
              error: false,
              errorMessage: ""
            },
            () => {
              console.log(this.state.hasEmail);
            }
          );
        })
        .catch(err => {
          console.log(err);
          this.setState({
            hasEmail: false,
            error: true,
            loading: false,
            errorMessage:
              "Something went wrong, please contact Georgia Busch or Maxwell Wyndorf for help"
          });
        });
    } else {
      this.setState({
        hasEmail: false,
        error: true,
        errorMessage: "Please provide a valid email",
        loading: false
      });
    }
  }

  componentWillMount() {
    console.log("componentWillMount");
    this.setState({
      loading: true
    });
    axios
      .get("https://georgia-maxwell-backend.herokuapp.com/invites")
      .then(res => {
        console.log(res);
        this.setState(
          {
            data: res.data,
            loading: false
          },
          () => {
            console.log(this.state.data);
          }
        );
      })
      .catch(err => {
        console.log(err);
        this.setState({
          loading: false
        });
      });
  }

  render() {
    const {
      multiple,
      email,
      data,
      guests,
      hasEmail,
      loading,
      error,
      errorMessage
    } = this.state;
    const options = data;

    // console.log(options);
    // console.log("showEmailInput:", showEmailInput(hasEmail, guests));
    // console.log("showEmailEdit:", showEmailEdit(hasEmail, guests));
    // console.log("showEmailError:", showEmailError(email));

    return (
      <TypeAheadWrapper>
        <Typeahead
          labelKey="guests"
          multiple={multiple}
          options={options}
          placeholder={this.props.placeholder}
          onChange={this.handleChange}
          minLength={3}
          isLoading={loading}
        />

        {showEmailInput(hasEmail, guests) ? (
          <TableWrapper>
            <tbody>
              <tr>
                <td className="right">
                  <input
                    className={
                      error ? "form-control error-box" : "form-control"
                    }
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

        {showEmailEdit(hasEmail, guests) ? (
          <div>
            <p className="center">
              The following email has been associated with this guest(s):
            </p>
            <TableWrapper>
              <tbody>
                <tr>
                  <td className="right">{email}</td>
                  <td className="left">
                    <Button handleClick={this.handleEdit} text="Change" />
                  </td>
                </tr>
              </tbody>
            </TableWrapper>
          </div>
        ) : null}

        {error ? <p className="error-message">{errorMessage}</p> : null}
      </TypeAheadWrapper>
    );
  }
}

export default BasicTypeAhead;
