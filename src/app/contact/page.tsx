import { ContactComponent } from "@/components/contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Crescent Technology. Our global team is ready to assist you with innovative technology solutions and services.",
};

export default function ContactPage() {
  return <ContactComponent />;
}
