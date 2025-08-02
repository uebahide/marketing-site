import React from "react";

import {
  Description,
  IconWithLabel,
  TextContent,
  Title,
  Writing,
  WritingImage,
} from "@/components/features/Writing";

import ToDos from "../../../../public/images/features/to_dos.png";
import IconAiApple from "@/components/icons/AiApple";

const Plan = () => {
  const features = [
    { icon: IconAiApple, label: "Add tasks to any document" },
    { icon: IconAiApple, label: "Move them around" },
  ];

  return (
    <>
      {/* <FeatureHero /> */}
      <div className="h-[100px]"></div>
      <Writing>
        <WritingImage src={ToDos} />
        <TextContent>
          <Title>Keep your to-dos clos to your ideas</Title>
          <Description>
            In Craft tasks are embedded directly into your documents — no
            switching apps, no lost context. You can write a brief, make a
            checklist, assign a task, and take notes on it — all in one place.
          </Description>
          <IconWithLabel features={features} />
        </TextContent>
      </Writing>
    </>
  );
};

export default Plan;
