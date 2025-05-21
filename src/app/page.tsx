import { Branding } from "@/components/sections/branding";
import { Contact } from "@/components/sections/contact";
import { Content } from "@/components/sections/content";
import { Hero } from "@/components/sections/hero";
import {Service} from "@/components/sections/service";

export default function Home() {
  return (
    <main>
      <Hero />
      <Content />
      <Branding />
      <Service />
      <Contact />
    </main>
  );
}
