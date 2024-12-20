import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { GlobalResponse } from "@/utils/types";
import Link from "next/link";

interface MenuProps {
  data?: GlobalResponse;
}

export function Menu({ data }: MenuProps) {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {data?.menu?.map((item) =>
          item?.dropdown?.length > 0 ? (
            <NavigationMenuItem key={item.id} value={`${item.id}`}>
              <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="p-4 flex flex-col gap-1">
                  {item?.dropdown.map((subItem) => (
                    <NavigationMenuLink
                      key={subItem.id}
                      href={subItem.link ?? ""}
                      target={subItem.openNewWindow ? "_blank" : "_self"}
                    >
                      {subItem.title}
                    </NavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : (
            item.link !== "/login" && (
              <Button variant="ghost">
                <Link
                  key={item.id}
                  href={item.link ?? ""}
                  target={item.openNewWindow ? "_blank" : "_self"}
                  className="py-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.title}
                </Link>
              </Button>
            )
          )
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
