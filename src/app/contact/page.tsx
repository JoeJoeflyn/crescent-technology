import { ContactComponent } from "@/components/contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
};

export default function ContactPage() {
  return <ContactComponent />;
}
