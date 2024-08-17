"use client";
import AvatarSection from "@/components/bigt/AvatarSection";
import BlogSection from "@/components/bigt/BlogSection";
import { DockDemo } from "@/components/bigt/Dock";
import EducationSection from "@/components/bigt/EducationSection";
import IntroSection from "@/components/bigt/IntroSection";
import { Skills } from "@/components/bigt/Skills";


export default function Home() {
  return (
    <div>
      <div className="w-full flex flex-col items-center lg:flex-row justify-center p-10 gap-x-12 ">
        <AvatarSection />
        <IntroSection />
      </div>
      {/* <DockDemo /> */}
      <Skills />
      <EducationSection />
      <BlogSection />
    </div>
  );
}
