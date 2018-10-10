import React, { Component } from "react";
import axios from "axios";
import Button from "../Button/Button";
import { TypeAheadWrapper, DivWrapper } from "./BasicTypeAhead.style";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.min.css";
import "react-bootstrap-typeahead/css/Typeahead-bs4.min.css";
import {
  showEmailInput,
  showEmailEdit,
  isValidEmail
} from "../../lib/validation.utils.js";

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
    if (evt[0]) {
      this.setState(
        {
          guests: evt[0].guests,
          email: evt[0].email,
          _id: evt[0]._id
        },
        () => {
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
      hasEmail: false,
      email: ""
    });
  }

  handleSubmit(evt) {
    this.setState({
      loading: true
    });
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
    this.setState({
      loading: true
    });
    axios
      .get("https://georgia-maxwell-backend.herokuapp.com/invites")
      .then(res => {
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
          <DivWrapper>
            <input
              className={error ? "form-control error-box" : "form-control"}
              placeholder="Enter your email"
              onChange={this.handleTextInput}
            />
            <div>
              <Button handleClick={this.handleSubmit} text="Submit" />
            </div>
          </DivWrapper>
        ) : null}

        {showEmailEdit(hasEmail, guests) ? (
          <div>
            <p className="center email-message">
              The following email has been associated with this guest(s):
            </p>
            <DivWrapper>
              <p>{email}</p>
              <div className="button-div">
                <div>
                  <Button handleClick={this.handleEdit} text="Change" />
                </div>
              </div>
            </DivWrapper>
          </div>
        ) : null}

        {error ? <p className="error-message">{errorMessage}</p> : null}
      </TypeAheadWrapper>
    );
  }
}

export default BasicTypeAhead;
