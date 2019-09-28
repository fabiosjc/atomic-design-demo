import React from "react";
import { storiesOf } from "@storybook/react";
import Home from "../components/pages/home/home";

const homeStories = storiesOf("Pages | Home", module);

// Homepage
homeStories
  .add("Homepage", () => <Home />)