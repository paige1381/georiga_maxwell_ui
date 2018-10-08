import { configure } from "@storybook/react";
import { configureViewport } from "@storybook/addon-viewport";
import { setOptions } from "@storybook/addon-options";

setOptions({
  addonPanelInRight: true
});

const req = require.context("../src/components", true, /\.story\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
