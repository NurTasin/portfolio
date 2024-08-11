"use client";
import AvatarSection from "@/components/bigt/AvatarSection";
import { DockDemo } from "@/components/bigt/Dock";
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
    </div>
  );
}
