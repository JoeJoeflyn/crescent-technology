import { NAV_ITEMS } from "@/constants";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: "https://www.crescenttechnology.com/",
      lastModified: new Date(),
    },
    ...NAV_ITEMS.map((item) => ({
      url: `https://www.crescenttechnology.com${item.link}`,
      lastModified: new Date(),
    })),
  ];
}
