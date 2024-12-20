interface Brand {
  id: number;
  title?: string;
  url: string;
  alternativeText?: string | null;
}

interface BrandsProps {
  data: {
    id: number;
    __component: string;
    theme: "dark" | "light";
    brands?: Brand[];
  };
}

export function Brands({ data }: BrandsProps) {
  const { brands } = data;

  return (
    <section>
      <div className="mx-auto px-4 py-8 text-center">
        <div className="overflow-hidden relative">
          <div className="flex animate-slideInfinitely shadow-inner">
            {brands?.map((brand) => (
              <div key={brand.id} className="min-w-0 shrink-0 px-4 lg:px-8">
                <img
                  src={brand.url}
                  alt={brand.alternativeText || brand.title}
                  className="w-fit h-10"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
