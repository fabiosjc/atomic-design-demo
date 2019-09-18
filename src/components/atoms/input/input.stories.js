import React from "react";
import { storiesOf } from "@storybook/react";
import Input from "./input";

const stories = storiesOf("Input", module);

stories
  .add("Input with label", () => (
    <Input type="text" label={"Label"} placeholder={"Input with label"} />
  ))
  .add("Input without label", () => (
    <Input type="text" placeholder={"Input without label"} />
  ))
  .add("Input disabled", () => (
    <Input type="text" placeholder={"Input disabled"} disabled />
  ));
