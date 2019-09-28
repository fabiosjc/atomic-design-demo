import React from "react";
import { storiesOf } from "@storybook/react";
import Hero from "../components/molecules/hero/hero";
import Navbar from "../components/molecules/navbar/Navbar";
import { menuItems } from "../components/organisms/header/menuItems";

const heroStories = storiesOf("Molecules | Hero", module);
const navbarStories = storiesOf("Molecules | Navbar", module);

//Hero
heroStories
  .add("Default", () => <Hero />);

// Navbar
navbarStories
  .add("Default", () => <div style={{background: '#222', height: '10vh'}}>
    <Navbar />
  </div>
  )
  .add("With menuItems props", () => <div style={{background: '#222', height: '10vh'}}>
    <Navbar menuItems={menuItems}/>
  </div>
  );