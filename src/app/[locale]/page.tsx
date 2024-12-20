import { fetchGlobalContent, fetchPageContent } from "@/utils/api";
import type { Metadata, ResolvingMetadata } from "next";
import { Brands } from "./_components/brands";
import { CardContentGrid } from "./_components/card-content-grid";
import { CenteredCTA } from "./_components/centered-cta";
import { HeroVideo } from "./_components/hero-video";
import { Modules } from "./_components/modules";

type MetadataProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(
  { params }: MetadataProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const locale = (await params).locale;

  const global = await fetchGlobalContent(locale);
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: global.metadata.metaTitle,
    description: global.metadata.metaDescription,
    robots: global.metadata.robots,
    openGraph: {
      images: [global.metadata.shareImage, ...previousImages],
    },
  };
}

const componentMap = {
  "sections.hero-video": HeroVideo,
  "sections.brands": Brands,
  "sections.card-content-grid": CardContentGrid,
  "sections.modules": Modules,
  "sections.centered-cta": CenteredCTA,
};

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = (await params).locale;
  const [home] = await fetchPageContent(locale, "/");

  return (
    <div>
      {home?.contentSections?.map((section) => {
        const Component = componentMap[section.__component];
        console.log("Component", Component);
        return Component ? <Component key={section.id} data={section} /> : null;
      })}
    </div>
  );
}
