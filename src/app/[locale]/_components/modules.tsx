import { External } from "@/components/assets/external";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

interface Button {
  id: number;
  url: string;
  text: string;
}

interface ModuleCard {
  id: number;
  title?: string;
  description?: string;
  button?: Button;
}

interface ModulesProps {
  data: {
    id: number;
    __component: string;
    theme: "dark" | "light";
    preTitle?: string | null;
    title?: string;
    description?: string;
    cards?: ModuleCard[];
  };
}

export function Modules({ data }: ModulesProps) {
  const { preTitle, title, description, cards } = data;

  return (
    <div className="sm:overflow-hidden sm:flex sm:justify-center">
      <Carousel className="px-4 py-8 sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
        {preTitle && <p className="text-sm font-medium">{preTitle}</p>}
        <div className="flex justify-between items-center gap-4">
          <div className="max-w-xl">
            <h2 className="text-2xl font-medium mt-2">{title}</h2>
            <p className="mt-4 mb-6">{description}</p>
          </div>

          <div className="hidden justify-center items-center gap-2 sm:flex">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </div>

        <CarouselContent>
          {cards?.map((card) => (
            <CarouselItem
              key={card.id}
              className="basis-11/12 sm:basis-1/2 md:basis-1/3"
            >
              <div className="p-5 flex flex-col justify-between items-start bg-muted rounded-xl shadow-md text-left hover:shadow-lg transition-shadow h-full">
                <div>
                  <h3 className="text-xl font-semibold">{card.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 mb-6">
                    {card.description}
                  </p>
                </div>
                <Button variant="link" size="clean">
                  <Link href={card?.button?.url ?? ""} className="text-lg mr-4">
                    {card?.button?.text}
                  </Link>
                  <External />
                </Button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
