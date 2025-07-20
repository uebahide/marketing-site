import { cn } from "@/utils/ClassNames";
import Image, { StaticImageData } from "next/image";
import React from "react";
import PaperTexture from "../../../public/images/common/image_paper_texture.png";

export type SmallCardProps = {
  image: StaticImageData;
  bgColor: string;
  title: string;
  description: string;
};

export default function SmallCard({
  image,
  bgColor,
  title,
  description,
}: SmallCardProps) {
  return (
    <section className="relative rounded-3xl shadow-block w-[334px] h-[320px] md:w-[800px] md:h-[560px] overflow-hidden">
      <div
        className={cn("absolute  inset-0 -z-10 rounded-3xl h-full", bgColor)}
      />
      <Image
        src={PaperTexture}
        alt="large card image1"
        className="absolute -z-10 opacity-20 rounded-3xl"
        fill
      />
      <Image
        src={image}
        alt="large card image1"
        className="absolute bottom-0 rounded-b-2xl inset-x-0 left-1/2 -translate-x-1/2"
      />

      <div className="text-center pt-8 px-5 md:p-12 space-y-4">
        <h3>{title}</h3>
        <p className="text-black-600">{description}</p>
      </div>
    </section>
  );
}
