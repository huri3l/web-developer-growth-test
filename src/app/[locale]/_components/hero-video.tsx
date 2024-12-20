import { CustomAudioPlayer } from "@/components/commons/audio-player";
import { Button, ButtonVariants } from "@/components/ui/button";
import { cn } from "@/utils";
import Link from "next/link";

interface Button {
  id: number;
  appearance: string;
  size: "sm" | "md" | "lg";
  color: string;
  url: string;
  text: string;
  subText?: string | null;
  fluid?: boolean;
  newTab?: boolean;
  startIcon?: string | null;
  endIcon?: string | null;
}

interface Demo {
  id: number;
  title?: string;
  url: string;
  format: string;
}

interface Background {
  id: number;
  alternativeText?: string | null;
  width: number;
  height: number;
  url: string;
}

interface HeroVideoProps {
  data: {
    id: number;
    __component: string;
    theme: "dark" | "light";
    full?: boolean;
    preTitle?: string | null;
    title?: string;
    description?: string;
    buttons?: Button[];
    demo?: Demo;
    background?: Background;
  };
}

export function HeroVideo({ data }: HeroVideoProps) {
  const { theme, full, title, description, buttons, demo, background } = data;

  return (
    <section
      style={{
        backgroundImage: `url(${background?.url})`,
      }}
      className={cn(
        "mt-10 bg-cover bg-center md:h-screen md:flex md:justify-center md:items-center",
        theme,
        full ? "full" : ""
      )}
    >
      <div className="text-center text-white p-6 text-balance max-w-5xl">
        <h1 className="text-4xl md:text-6xl mb-4 font-medium">{title}</h1>
        <p className="mb-6 text-muted-foreground font-medium text-balance">
          {description}
        </p>

        {demo?.title && demo?.url && (
          <div className="mt-8 flex justify-center">
            <CustomAudioPlayer title={demo.title} url={demo.url} />
          </div>
        )}

        <div className="flex justify-center gap-4 mt-10">
          {buttons?.map((button) => (
            <Button
              key={button.id}
              variant={button.appearance as ButtonVariants}
              startIcon={button.startIcon as Icon}
              endIcon={button.endIcon as Icon}
            >
              <Link
                href={button.url}
                target={button.newTab ? "_blank" : "_self"}
                rel={button.newTab ? "noopener noreferrer" : undefined}
              >
                {button.text}
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
