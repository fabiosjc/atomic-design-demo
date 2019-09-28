import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "../components/atoms/button/button";
import Logo from "../components/atoms/logo/logo";
import Input from "../components/atoms/input/input";
import Link from "../components/atoms/link/link";

const logoStories = storiesOf("Atoms | Logo", module);
const buttonStories = storiesOf("Atoms | Button", module);
const inputStories = storiesOf("Atoms | Input", module);
const linkStories = storiesOf("Atoms | Link", module);

// Logo
logoStories
   .add("Default", () => <div style={{background: 'darkblue', padding: '10px'}}>
      <Logo />
    </div>)
   .add("With Heigth", () => <div style={{background: 'darkblue', padding: '10px'}}>
      <Logo height="50px" />
    </div>)

// Button
buttonStories
  .add("Default", () => <Button>Default</Button>)
  .add("Disabled", () => <Button disabled>Disabled</Button>)
  .add("Raised", () => <Button raised>Raised</Button>)
  .add("Outlined", () => <Button outlined>Outlined</Button>)
  .add("Rounded", () => <Button rounded>Rounded</Button>);

//Input
inputStories
  .add("Default", () => <Input type="text" placeholder={"Placeholder"} />)
  .add("Disabled", () => (
    <Input type="text" placeholder={"Input disabled"} disabled />
  ));

//Input
linkStories
  .add("Default", () => <div style={{background: 'darkblue', height: '100vh'}}>
    <Link>Link</Link>
  </div>);
