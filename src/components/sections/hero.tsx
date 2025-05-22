import { HERO_TITLE, HERO_WORDS } from "@/constants";
import { TextGenerateEffect } from "../animations/text-generate-effect";
import { TypewriterEffectSmooth } from "../animations/typewriter-effect";
import { WavyBackground } from "../animations/wavy-background";

export function Hero() {
  return (
    <WavyBackground className="mx-auto w-full max-w-7xl px-4 py-2">
      <div className="pb-10 md:pb-20 lg:pb-40">
        <TypewriterEffectSmooth words={HERO_TITLE} />
        <TextGenerateEffect words={HERO_WORDS} />
      </div>
    </WavyBackground>
  );
}
