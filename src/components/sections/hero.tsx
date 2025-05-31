import { HERO_TITLE, HERO_WORDS } from "@/constants";
import { BackgroundBeams } from "../animations/background-beams";
import { TextGenerateEffect } from "../animations/text-generate-effect";
import { TypewriterEffectSmooth } from "../animations/typewriter-effect";

export default function Hero() {
  return (
    <div className="h-[30rem] md:h-screen w-full bg-[#002240] relative flex flex-col items-center justify-center">
      <div className="mx-auto p-4">
        <TypewriterEffectSmooth words={HERO_TITLE} />
        <TextGenerateEffect words={HERO_WORDS} />
      </div>
      <BackgroundBeams />
    </div>
  );
}
