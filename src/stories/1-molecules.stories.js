import React from "react";
import { storiesOf } from "@storybook/react";
import Hero from "../components/molecules/hero/hero";
import Navbar from "../components/molecules/navbar/Navbar";
import { menuItems } from "../components/organisms/header/menuItems";
import Card from "../components/molecules/card/card";
import {
  basic_smartphone,
  basic_lightbulb,
  basic_webpage_img_txt
} from "react-icons-kit/linea/";

const heroStories = storiesOf("Molecules | Hero", module);
const navbarStories = storiesOf("Molecules | Navbar", module);
const cardStories = storiesOf("Molecules | Card", module);

// Hero
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

// Card
cardStories
.add("Default", () => <Card>Lorem ipsum dolor sit amet</Card>)
.add("With Icon", () => <Card icon={basic_lightbulb}>Lorem ipsum dolor sit amet</Card>)
.add("With Title", () => <Card title="Title">Lorem ipsum dolor sit amet</Card>)
.add("With Icon and Title", () => <Card icon={basic_smartphone} title="Title">Lorem ipsum dolor sit amet</Card>)
