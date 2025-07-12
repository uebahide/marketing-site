import IconCalendar from "@/components/icons/Calendar";
import IconCloud from "@/components/icons/Cloud";
import IconDoc from "@/components/icons/Doc";
import IconPencil from "@/components/icons/Pencil";
import IconScribble from "@/components/icons/Scribble";
import IconTodo from "@/components/icons/Todo";
import { useTranslations } from "next-intl";
import React from "react";

export default function Icons() {
  const t = useTranslations();
  const icons = [
    {
      icon: IconDoc,
      label: t("home.icons.docs"),
    },
    {
      icon: IconTodo,
      label: t("home.icons.tasks"),
    },
    {
      icon: IconPencil,
      label: t("home.icons.dailyNotes"),
    },
    {
      icon: IconScribble,
      label: t("home.icons.whiteBoards"),
    },
    {
      icon: IconCalendar,
      label: t("home.icons.calender"),
    },
    {
      icon: IconCloud,
      label: t("home.icons.publishing"),
    },
  ];
  return (
    <section className="flex flex-col justify-center items-center py-[80px] px-[24px] md:py-[160px] md:px-[120px] gap-[80px] ">
      <h2 className="font-serif text-center">{t("home.icons.title")}</h2>
      <div className="grid grid-cols-2 md:flex gap-[60px]">
        {icons.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center gap-[16px]"
          >
            <item.icon className="h-[32px] w-[32px]" />
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
