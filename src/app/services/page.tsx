import Service from "@/components/services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
};

export default function page() {
  return <Service />;
}
