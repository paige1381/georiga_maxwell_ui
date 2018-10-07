import React from "react";
import { storiesOf } from "@storybook/react";
import TestComponent from "./TestComponent";
import "react-bootstrap-typeahead/css/Typeahead.css";

storiesOf("TestComponent", module).add("Default", () => <TestComponent />);
