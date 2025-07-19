import Image, { StaticImageData } from "next/image";
import React, { ReactElement } from "react";
import PaperTexture from "../../../public/images/common/image_paper_texture.png";
import GlassButton from "../buttons/GlassButton";
import IconScribble from "../icons/Scribble";
import IconAi from "../icons/AI";
import IconCloud from "../icons/Cloud";
import IconBlankDoc from "../icons/Blank Doc";
import { cn } from "@/utils/ClassNames";

type Feature = {
  icon: ({
    className,
  }: {
    className?: string | undefined;
  }) => React.JSX.Element;
  label: string;
};

type LargeCardProps = {
  image: StaticImageData;
  bgColor: string;
  label: string;
  title: string;
  description: string;
  features: Feature[];
  reverse?: boolean;
};

export default function LargeCard({
  image,
  bgColor,
  label,
  title,
  description,
  features,
  reverse = false,
}: LargeCardProps) {
  return (
    <section className="relative p-4 md:p-8 lg:p-0 rounded-3xl space-y-6 shadow-block">
      <div
        className={cn("absolute  inset-0 -z-10 rounded-3xl h-full", bgColor)}
      />
      <Image
        src={PaperTexture}
        alt="large card image1"
        className="absolute -z-10 opacity-20 rounded-3xl"
        fill
      />

      <div
        className={cn(
          "flex flex-col gap-6 lg:flex-row  lg:gap-10 lg:p-8 z-20",
          reverse && "flex-col-reverse lg:flex-row-reverse"
        )}
      >
        <Image
          src={image}
          alt="large card image1"
          className="rounded-2xl aspect-square sm:aspect-4/3 lg:aspect-auto object-cover lg:h-[736px] lg:w-1/2 lg:mb-0"
        />
        <div className="py-6 px-4 space-y-8 lg:flex lg:flex-col lg:justify-between lg:items-start">
          <div className="space-y-8 sm:flex  lg:flex-col lg:h-full lg:justify-between sm:gap-12">
            <div className="space-y-8 sm:flex-1 lg:flex-none">
              <h4 className="text-black-600">{label}</h4>
              <h2>{title}</h2>
              <p className="text-black-600">{description}</p>
            </div>
            <div className="grid gap-4 lg:grid-cols-2 sm:w-[280px] lg:w-full md:gap-8">
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
