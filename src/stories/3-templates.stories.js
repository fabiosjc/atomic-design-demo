import React from "react";
import { storiesOf } from "@storybook/react";
import Homepage from "../components/templates/homepage/homepage";

const homepageStories = storiesOf("Templates | Homepage", module);

// Home template
homepageStories
  .add("Homepage", () => <Homepage />)

