"use client";
import MainPageAbout from "@/components/MainPageAbout";
import MainPageBanner from "@/components/MainPageBanner";
import MainPageProjects from "@/components/MainPageProjects";

export default function HomeClient() {
  return (
    <div>
      <MainPageBanner />
      <MainPageProjects />
      <MainPageAbout />
    </div>
  );
}
