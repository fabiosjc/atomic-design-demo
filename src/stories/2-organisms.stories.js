import React from "react";
import { storiesOf } from "@storybook/react";
import Header from "../components/organisms/header/Header";
import { menuItems } from "../components/organisms/header/menuItems";


const headerStories = storiesOf("Organisms | Header", module);

//Header
headerStories
  .add("Default", () => <div style={{background: 'darkblue', height: '13vh'}}>
    <Header menuItems={menuItems}/>
</div>);
