import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./button";

const stories = storiesOf("Button", module);

stories
  .add("Default", () => <Button>Default</Button>)
  .add("Disabled", () => <Button disabled>Disabled</Button>)
  .add("Raised", () => <Button raised>Raised</Button>)
  .add("Outlined", () => <Button outlined>Outlined</Button>)
  .add("Rounded", () => <Button rounded>Rounded</Button>);
