import React, { ReactNode } from "react";
import GlassButton from "../buttons/GlassButton";

export function SectionContainer({ children }: { children: ReactNode }) {
  return <section>{children}</section>;
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
    <div>
      {label && <SectionLabel>{label}</SectionLabel>}
      {title && <SectionTitle>{title}</SectionTitle>}
      {description && <SectionDescription>{description}</SectionDescription>}
      {href && <SectionButton href={href}>{buttonText}</SectionButton>}
    </div>
  );
}
export function SectionLabel({ children }: { children: ReactNode }) {
  return <p>{children}</p>;
}
export function SectionTitle({ children }: { children: ReactNode }) {
  return <h1>{children}</h1>;
}
export function SectionDescription({ children }: { children: ReactNode }) {
  return <p>{children}</p>;
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
