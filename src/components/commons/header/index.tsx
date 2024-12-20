"use client";
import { ArrowRight } from "@/components/assets/arrow-right";
import { fetchGlobalContent } from "@/utils/api";
import { GlobalResponse } from "@/utils/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Brand } from "../../assets/brand";
import { Menu as MenuIcon } from "../../assets/menu";
import { Menu } from "./menu";
import { MobileMenu } from "./mobile-menu";

export function Header() {
  const [data, setData] = useState<GlobalResponse>();
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const locale = pathname.split("/")[1];

  const login = data?.menu.find((item) => item.link === "/login");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchGlobalContent(locale);
        setData(result);
      } catch (error) {
        console.error("Error fetching content:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <header className="absolute top-0 left-0 w-full">
      <div className="flex justify-between items-center p-6">
        <Link href="/">
          <Brand />
        </Link>
        <button className="md:hidden" onClick={() => setMenuOpen(true)}>
          <MenuIcon />
        </button>

        <Menu data={data} />

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

      <MobileMenu data={data} open={menuOpen} onOpenChange={setMenuOpen} />
    </header>
  );
}
