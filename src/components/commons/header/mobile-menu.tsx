import { ArrowRight } from "@/components/assets/arrow-right";
import { Brand } from "@/components/assets/brand";
import { Close } from "@/components/assets/close";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { GlobalResponse } from "@/utils/types";
import Link from "next/link";

interface MobileMenuProps {
  data?: GlobalResponse;
  open: boolean;
  onOpenChange: (state: boolean) => void;
}

export function MobileMenu({ data, open, onOpenChange }: MobileMenuProps) {
  const login = data?.menu.find((item) => item.link === "/login");

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        className="bg-black text-white size-full flex flex-col justify-between md:hidden"
        side="top"
      >
        <div className="h-full flex flex-col justify-between">
          <div>
            <SheetHeader className="p-0 pb-6 flex flex-row justify-between items-center">
              <SheetTitle className="sr-only">{data?.siteName}</SheetTitle>
              <SheetDescription className="sr-only">
                {data?.metadata.metaDescription}
              </SheetDescription>
              <Brand />
              <button onClick={() => onOpenChange(false)}>
                <Close />
              </button>
            </SheetHeader>

            <Accordion type="single" collapsible className="flex flex-col">
              {data?.menu?.map((item) =>
                item?.dropdown?.length > 0 ? (
                  <AccordionItem key={item.id} value={`${item.id}`}>
                    <AccordionTrigger>{item.title}</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-1 pl-4">
                      {item?.dropdown.map((subItem) => (
                        <Link
                          key={subItem.id}
                          href={subItem.link ?? ""}
                          target={subItem.openNewWindow ? "_blank" : "_self"}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                ) : (
                  item.link !== "/login" && (
                    <Link
                      key={item.id}
                      href={item.link ?? ""}
                      target={item.openNewWindow ? "_blank" : "_self"}
                      className={"py-3 text-muted-foreground"}
                    >
                      {item.title}
                    </Link>
                  )
                )
              )}
            </Accordion>
          </div>

          {login && (
            <Link
              href={login.link ?? ""}
              target={login.openNewWindow ? "_blank" : "_self"}
              className="py-3 text-white flex gap-1 items-center font-medium"
            >
              {login.title}
              {login.link === "/login" && <ArrowRight />}
            </Link>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
