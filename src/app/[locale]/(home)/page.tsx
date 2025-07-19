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

import LargeCardImage1 from "../../../../public/images/home/image_large_card_1.jpg";
import LargeCardImage2 from "../../../../public/images/home/image_large_card_2.jpg";
import IconBlankDoc from "@/components/icons/Blank Doc";
import IconScribble from "@/components/icons/Scribble";
import IconAi from "@/components/icons/AI";
import IconCloud from "@/components/icons/Cloud";
import IconTodo from "@/components/icons/Todo";
import IconClock from "@/components/icons/Clock";
import IconDoc from "@/components/icons/Doc";
import IconCalendar from "@/components/icons/Calendar";

export const metadata = {
  title: "Craft - Docs and Notes Editor",
};

const writingFeatures = [
  {
    icon: IconBlankDoc,
    label: "Templates",
  },
  {
    icon: IconScribble,
    label: "Whiteboards",
  },
  {
    icon: IconAi,
    label: "Write with AI",
  },
  {
    icon: IconCloud,
    label: "Publish & share",
  },
];
const planningFeatures = [
  {
    icon: IconTodo,
    label: "Tasks",
  },
  {
    icon: IconClock,
    label: "Reminders",
  },
  {
    icon: IconDoc,
    label: "Daily Notes",
  },
  {
    icon: IconCalendar,
    label: "Calender",
  },
];

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="max-w-[1400px] mx-auto">
        <Icons />
        <LargeCard
          image={LargeCardImage1}
          label="writing"
          title="From first thought to final form"
          description="The right tool unlocks your flow. Craft helps you shape ideas into something rich, structured, and uniquely yours."
          features={writingFeatures}
          bgColor="bg-purple-2"
        />
        <Overview />
        <SmallCards />
        <section>{/* quote */}</section>
        <LargeCard
          image={LargeCardImage2}
          label="planning"
          title="Planning that doesn’t feel like work"
          description="From quick to-dos to long-term goals, Craft helps you plan without friction and stay focused without forcing it."
          features={planningFeatures}
          bgColor="bg-yellow-2"
          reverse
        />
        <EditorsChoice />
        <Customization />
        <WhatOthersAreSaying />
        <StayInTheLoop />
        <ResearchAndLearning />
      </div>
    </div>
  );
}
