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
import DailyNote from "../../../../public/images/features/daily_note.png";
import AaronImage from "../../../../public/images/people/Aaron.png";
import RayImage from "../../../../public/images/people/Ray.png";
import IconAiApple from "@/components/icons/AiApple";
import Verge from "@/components/features/Verge";

const Plan = () => {
  const toDoFeatures = [
    { icon: IconAiApple, label: "Add tasks to any document" },
    { icon: IconAiApple, label: "Move them around" },
  ];

  const AaronTestimonial = {
    iconImageSrc: AaronImage,
    name: "Aaron",
    testimonial:
      "I finished writing a history book this summer, and managed all of the planning, outlining, and tasks in Craft, and have recently started planning a novel in the app as well.",
  };
  const RayTestimonial = {
    iconImageSrc: RayImage,
    name: "Ray",
    testimonial:
      "Craft is the first thing I open to plan my day and the last thing I use to jot down my final thoughts. It's my dashboard and diary in one.'",
  };

  return (
    <>
      {/* <FeatureHero /> */}
      <div className="h-[100px]"></div>
      {/* to dos writing */}
      <Writing>
        <WritingImage src={ToDos} />
        <TextContent>
          <Title>Keep your to-dos clos to your ideas</Title>
          <Description>
            In Craft tasks are embedded directly into your documents — no
            switching apps, no lost context. You can write a brief, make a
            checklist, assign a task, and take notes on it — all in one place.
          </Description>
          <IconWithLabel features={toDoFeatures} />
        </TextContent>
      </Writing>
      {/* Aaron's verge */}
      <Verge
        iconImageSrc={AaronTestimonial.iconImageSrc}
        iconBGColor="bg-yellow-2"
        name={AaronTestimonial.name}
        testimonial={AaronTestimonial.testimonial}
      />
      {/* daily note writing */}
      <Writing>
        <TextContent>
          <Title>Your day in one place</Title>
          <Description>
            Capture your thoughts, plans, and reflections. Track how your day is
            going  or plan for tomorrow — all in one note.
          </Description>
          <Description>
            Daily Notes live in the calendar, so every day keeps a record. Use
            them as a journal, a lightweight planner, or both.
          </Description>
        </TextContent>
        <WritingImage src={DailyNote} />
      </Writing>
      {/* Ray's verge */}
      <Verge
        iconImageSrc={RayTestimonial.iconImageSrc}
        iconBGColor="bg-yellow-2"
        name={RayTestimonial.name}
        testimonial={RayTestimonial.testimonial}
        reverse
      />
    </>
  );
};

export default Plan;
