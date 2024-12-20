import { Button, ButtonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

interface Button {
  id: number;
  appearance: string;
  size: "sm" | "md" | "lg";
  color: "blue" | "gray" | "red" | "green" | string; // Extendable for custom colors
  url: string;
  text: string;
  subText?: string | null;
  fluid: boolean;
  newTab: boolean;
  startIcon?: React.ReactNode | null;
  endIcon?: React.ReactNode | null;
}

interface CenteredCTAProps {
  data: {
    id: number;
    __component: string;
    theme: "dark" | "light";
    preTitle?: string | null;
    title?: string;
    description?: string;
    buttons?: Button[];
  };
}

export function CenteredCTA({ data }: CenteredCTAProps) {
  const { preTitle, title, description, buttons } = data;

  return (
    <section className="sm:bg-muted">
      <div className="mx-auto px-4 py-12 text-center max-w-2xl">
        {preTitle && <p className="text-sm font-medium">{preTitle}</p>}
        <h2 className="text-2xl md:text-4xl font-medium mt-2 text-balance">
          {title}
        </h2>
        <p className="mt-4 md:text-lg text-muted-foreground">{description}</p>
        <div className="flex justify-center mt-6 space-x-4">
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
