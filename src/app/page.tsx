import { Branding } from "@/components/sections/branding";
import { Contact } from "@/components/sections/contact";
import { Content } from "@/components/sections/content";
import { Service } from "@/components/sections/service";

export default function Home() {
  return (
    <main>
      <Content />
      <Branding />
      <Service />
      <Contact />
    </main>
  );
}
