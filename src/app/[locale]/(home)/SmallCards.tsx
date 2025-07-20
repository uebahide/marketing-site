import SmallCard, { SmallCardProps } from "@/components/cards/SmallCard";
import React from "react";

import SmallCardOffline from "../../../../public/images/home/small-card-offline-image.png";
import SmallCardPublish from "../../../../public/images/home/small-card-publish-image.png";
import SmallCardStructure from "../../../../public/images/home/small-card-structure-image.png";
import SmallCardSync from "../../../../public/images/home/small-card-sync-image.png";

export default function SmallCards() {
  const features = [
    {
      image: SmallCardStructure,
      bgColor: "bg-green-2",
      title: "From scattered to structured",
      description:
        "Build your ideal knowledge base with tables and collections.",
    },
    {
      image: SmallCardOffline,
      bgColor: "bg-blue-2",
      title: "Stay Offline",
      description: "Work on the go. Your best ideas happen offline anyway.",
    },
    {
      image: SmallCardPublish,
      bgColor: "bg-red-2",
      title: "Publish and Share",
      description:
        "Your work, your audience. Share selectively or publish for everyone.",
    },
    {
      image: SmallCardSync,
      bgColor: "bg-purple-2",
      title: "Instant Sync",
      description:
        "Write on your iPad, edit on your Mac, check on your phone. Sync that just works, every time.",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-6">
      {features.map((feature: SmallCardProps) => (
        <SmallCard
          key={feature.title}
          image={feature.image}
          bgColor={feature.bgColor}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </section>
  );
}
