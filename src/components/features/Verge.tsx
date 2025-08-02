import { cn } from "@/utils/ClassNames";
import Image, { StaticImageData } from "next/image";
import React from "react";

type Variant = "LargeText" | "MediumText";

const Verge = ({
  iconImageSrc,
  iconBGColor,
  name,
  testimonial,
  variant = "LargeText",
  reverse = false,
}: {
  iconImageSrc: StaticImageData;
  iconBGColor: string;
  name: string;
  testimonial: string;
  variant?: Variant;
  reverse?: boolean;
}) => {
  return (
    <section
      className={cn(
        "flex py-15 px-30 gap-10 items-start justify-center",
        reverse && "flex-row-reverse"
      )}
    >
      <div
        className={cn("flex items-center gap-6", reverse && "flex-row-reverse")}
      >
        <div className="flex items-center gap-6">
          <Image
            src={iconImageSrc}
            alt={`Image of ${name}`}
            width={56}
            height={56}
            className={cn(iconBGColor, "rounded-full")}
          />
          <p className="text-[#030302BF]/75">{name}</p>
        </div>
        <hr
          className={cn(
            "border-t-[1px] border-[#B6B6B6]",
            variant === "LargeText" ? "w-[121px]" : "w-[325px]"
          )}
        />
      </div>
      <p
        className={cn(
          variant === "LargeText" ? "max-w-[680px]" : "max-w-[480px]",
          "text-[32px] italic"
        )}
      >
        {testimonial}
      </p>
    </section>
  );
};

export default Verge;
