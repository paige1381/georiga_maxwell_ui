import React, { Component } from "react";
// import PropTypes from "prop-types";
import "whatwg-fetch";
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
      invite: "",
      email: "",
      id: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
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

  handleEdit() {
    console.log("Edit");
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
    const { multiple, email } = this.state;
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
        {email && email.length > 0 ? (
          <div>
            <p className="center">
              The following email has already been provided:{" "}
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
        ) : (
          <input className="form-control" placeholder="Enter your email" />
        )}
      </div>
    );
  }
}

export default BasicTypeAhead;
