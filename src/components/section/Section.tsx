import React, { ReactNode } from "react";
import GlassButton from "../buttons/GlassButton";

export function SectionContainer({ children }: { children: ReactNode }) {
  return (
    <section className="flex flex-col gap-30 py-20 px-4 md:py-45 md:px-12">
      {children}
    </section>
  );
}
export function SectionHeader({
  label,
  title,
  description,
  href,
  buttonText,
}: {
  label?: string;
  title?: string;
  description?: string;
  href?: string;
  buttonText?: string;
}) {
  return (
    <div className="flex flex-col items-center max-w-[720px] mx-auto text-center gap-6">
      {label && <SectionLabel>{label}</SectionLabel>}
      {title && <SectionTitle>{title}</SectionTitle>}
      {description && <SectionDescription>{description}</SectionDescription>}
      {href && buttonText && (
        <SectionButton href={href}>{buttonText}</SectionButton>
      )}
    </div>
  );
}
export function SectionLabel({ children }: { children: ReactNode }) {
  return <h4 className="uppercase text-black-600">{children}</h4>;
}
export function SectionTitle({ children }: { children: ReactNode }) {
  return <h2>{children}</h2>;
}
export function SectionDescription({ children }: { children: ReactNode }) {
  return <p className="text-black-600">{children}</p>;
}

export function SectionButton({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  return <GlassButton href={href}>{children}</GlassButton>;
}
