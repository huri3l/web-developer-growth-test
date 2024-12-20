import { iconMap } from "@/components/ui/icon";

interface Card {
  id: number;
  title?: string;
  description?: string;
  icon?: string;
}

interface CardContentGridProps {
  data: {
    id: number;
    __component: string;
    theme: "dark" | "light";
    preTitle?: string;
    title?: string;
    description?: string;
    cards?: Card[];
  };
}

export function CardContentGrid({ data }: CardContentGridProps) {
  const { preTitle, title, description, cards } = data;

  return (
    <section className="flex justify-center">
      <div className="max-w-7xl p-6 text-center">
        {preTitle && (
          <p className="text-sm font-medium text-secondary">{preTitle}</p>
        )}
        <h2 className="text-2xl font-medium mt-2">{title}</h2>
        <p className="mt-4 text-muted-foreground">{description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-8">
          {cards?.map((card) => (
            <div
              key={card.id}
              className="card rounded-lg shadow-md text-left hover:shadow-lg transition-shadow"
            >
              <div className="icon text-blue-500 text-4xl mb-4">
                {card?.icon && iconMap[card.icon as Icon]}
                <span className={`icon-${card.icon}`} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
