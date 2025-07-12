import Icons from "./Icons";
import LargeCard from "@/components/cards/LargeCard";
import Hero from "@/app/[locale]/(home)/Hero";
import Overview from "./Overview";
import SmallCards from "./SmallCards";
import EditorsChoice from "./EditorsChoice";
import Customization from "./Customization";
import WhatOthersAreSaying from "./WhatOthersAreSaying";
import StayInTheLoop from "./StayInTheLoop";
import ResearchAndLearning from "./ResearchAndLearning";

export const metadata = {
  title: "Craft - Docs and Notes Editor",
};

export default function Home() {
  return (
    <div className="">
      <Hero />
      <div>
        <Icons />
        <LargeCard />
        <Overview />
        <SmallCards />
        <section>{/* quote */}</section>
        <LargeCard />
        <EditorsChoice />
        <Customization />
        <WhatOthersAreSaying />
        <StayInTheLoop />
        <ResearchAndLearning />
      </div>
    </div>
  );
}
