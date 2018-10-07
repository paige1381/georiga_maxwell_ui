import React from "react";
import { storiesOf } from "@storybook/react";
import BasicTypeAhead from "./BasicTypeAhead";

storiesOf("BasicTypeAhead", module).add("Default", () => (
  <BasicTypeAhead placeholder="Search guests" />
));
