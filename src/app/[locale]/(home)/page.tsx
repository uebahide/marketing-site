import Icons from "./Icons";

import Overview from "./Overview";
import SmallCards from "./SmallCards";
import EditorsChoice from "./EditorsChoice";
import Customization from "./Customization";
import WhatOthersAreSaying from "./WhatOthersAreSaying";
import StayInTheLoop from "./StayInTheLoop";
import ResearchAndLearning from "./ResearchAndLearning";
import React from "react";
import LargeCard from "../../../components/cards/LargeCard";
import Hero from "./Hero";

export const metadata = {
  title: "Craft - Docs and Notes Editor",
};

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="max-w-[1400px] mx-auto">
        <Icons />
        <LargeCard />
        <Overview />
        <SmallCards />
        <section>{/* quote */}</section>
        {/* <LargeCard /> */}
        <EditorsChoice />
        <Customization />
        <WhatOthersAreSaying />
        <StayInTheLoop />
        <ResearchAndLearning />
      </div>
    </div>
  );
}
