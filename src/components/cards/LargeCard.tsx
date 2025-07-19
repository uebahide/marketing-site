import Image from "next/image";
import React from "react";
import LargeCardImage1 from "../../../public/images/home/image_large_card_1.jpg";
import PaperTexture from "../../../public/images/common/image_paper_texture.png";
import GlassButton from "../buttons/GlassButton";
import IconScribble from "../icons/Scribble";
import IconAi from "../icons/AI";
import IconCloud from "../icons/Cloud";
import IconBlankDoc from "../icons/Blank Doc";

const features = [
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

export default function LargeCard() {
  return (
    <section className="relative p-4 rounded-3xl space-y-6 shadow-block">
      <div className="absolute bg-purple-2 inset-0 -z-10 rounded-3xl h-full" />
      <Image
        src={PaperTexture}
        alt="large card image1"
        className="absolute -z-10 opacity-20 rounded-3xl"
        fill
      />

      <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:gap-10 lg:p-8 z-20">
        <Image
          src={LargeCardImage1}
          alt="large card image1"
          className="rounded-2xl aspect-square sm:aspect-4/3 lg:aspect-auto object-cover lg:h-[736px] lg:mb-0"
        />
        <div className="py-6 px-4 space-y-8 lg:flex lg:flex-col lg:justify-between lg:items-start">
          <div className="space-y-8 sm:flex  lg:flex-col lg:h-full lg:justify-between sm:gap-12">
            <div className="space-y-8 sm:flex-1 lg:flex-none">
              <h4 className="text-black-600">writing</h4>
              <h2>From first thought to final form</h2>
              <p className="text-black-600">
                The right tool unlocks your flow. Craft helps you shape ideas
                into something rich, structured, and uniquely yours.
              </p>
            </div>
            <div className="grid gap-4 lg:grid-cols-2 sm:w-[280px] lg:w-full">
              {features.map((feature) => (
                <div key={feature.label} className="flex items-center gap-4">
                  <feature.icon className="h-[40px] w-[40px]" />
                  <p className="font-semibold">{feature.label}</p>
                </div>
              ))}
            </div>
            <div className="hidden lg:block">
              <GlassButton>Learn more</GlassButton>
            </div>
          </div>
          <GlassButton className="lg:hidden">Learn more</GlassButton>
        </div>
      </div>
    </section>
  );
}
