import { cn } from "@/utils/ClassNames";
import Image, { StaticImageData } from "next/image";
import React, { ReactNode } from "react";
import { Feature } from "../cards/LargeCard";
import PaperTexture from "../../../public/images/common/image_paper_texture.png";

export const Writing = ({ children }: { children: ReactNode }) => {
  return (
    <section
      className={cn(
        "flex w-fit mx-auto gap-10 2xl:gap-20 flex-col lg:flex-row"
      )}
    >
      {children}
    </section>
  );
};

export const WritingImage = ({ src }: { src: StaticImageData }) => {
  return (
    <Image
      src={src}
      alt={`${src} image`}
      className="max-h-[560px] w-fit mx-auto lg:w-auto rounded-[24px] shadow-block"
    />
  );
};

export const TextContent = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col gap-10 lg:w-[306px] justify-center px-10 lg:px-0">
      {children}
    </div>
  );
};

export const Title = ({ children }: { children: ReactNode }) => {
  return <h3 className="leading-[1.2] text-black-900">{children}</h3>;
};

export const Description = ({ children }: { children: ReactNode }) => {
  return (
    <p className="text-[20px] max-w-[653px] text-[#030302BF]/75">{children}</p>
  );
};

export const IconWithLabel = ({ features }: { features: Feature[] }) => {
  return (
    <div className="flex flex-col items-start gap-5">
      {features.map((feature) => (
        <div key={feature.label} className="flex items-center gap-5">
          <feature.icon className="h-[26.67px] w-[26.67px]" />
          <p className="text-[16px] font-bold text-[#181615E5]/90">
            {feature.label}
          </p>
        </div>
      ))}
    </div>
  );
};
