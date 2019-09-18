import React from "react";
import { storiesOf } from "@storybook/react";

import Label from "./label";

const stories = storiesOf("Label", module);

stories.add("Label", () => <Label>Label</Label>);
