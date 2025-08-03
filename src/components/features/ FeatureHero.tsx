import Image, { StaticImageData } from "next/image";
import React, { ReactNode } from "react";

import PaperTexture from "../../../public/images/common/image_paper_texture.png";
import IconCalendar from "../icons/Calendar";
import IconPencil from "../icons/Pencil";
import IconFolder from "../icons/Folder";
import IconScribble from "../icons/Scribble";
import { cn } from "@/utils/ClassNames";

type FeatureVariant = "plan" | "write" | "organize" | "customize";

const FeatureHero = ({
  variant,
  bgColor,
  title,
  description,
  heroVectorSrc,
}: {
  variant: FeatureVariant;
  bgColor: string;
  title: string | ReactNode;
  description: string;
  heroVectorSrc: StaticImageData;
}) => {
  const features = [
    {
      icon: IconCalendar,
      label: "plan",
    },
    {
      icon: IconPencil,
      label: "write",
    },
    {
      icon: IconFolder,
      label: "organize",
    },
    {
      icon: IconScribble,
      label: "customize",
    },
  ];

  return (
    <section className="shadow-block flex flex-col items-center p-8 sm:p-12 pt-35 sm:pt-48  relative h-[500px] sm:h-[600px] lg:h-[720px] rounded-3xl gap-12 overflow-hidden">
      <div className={cn("absolute inset-0 -z-10", bgColor)} />
      <Image
        src={PaperTexture}
        alt="paper texture background image"
        fill
        className="mix-blend-overlay opacity-50 -z-10"
      />
      <Image
        src={heroVectorSrc}
        alt="vector image"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 -z-10 object-cover"
      />
      {/* main contents */}
      <div className="flex flex-col items-center gap-10 h-[310px]">
        <h1>{title}</h1>
        <p className="text-black-700/75">{description}</p>
      </div>
      <div className="grid grid-cols-2 lg:flex">
        {features.map((feature) => (
          <div
            key={feature.label}
            className={cn(
              "flex items-center py-[5px] px-[10px] sm:py-[15px] sm:px-[30px] gap-3 rounded-[100px] w-fit",
              variant === feature.label && "bg-white"
            )}
          >
            <feature.icon className="w-8 h-8" />
            <p className="italic sm:text-2xl text-black-900">{feature.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureHero;
