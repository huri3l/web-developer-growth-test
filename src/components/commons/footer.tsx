"use client";
import { fetchGlobalContent } from "@/utils/api";
import { GlobalResponse } from "@/utils/types";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Brand } from "../assets/brand";
import { CircleGradient } from "../assets/circle-gradient";
import { iconMap } from "../ui/icon";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export function Footer() {
  const [data, setData] = useState<GlobalResponse>();
  const router = useRouter();
  const pathname = usePathname();
  const locale = pathname.split("/")[1];

  const toggleLocale = (value: "en" | "pt") => {
    const segments = pathname.split("/");
    segments[1] = value;
    const newPath = segments.join("/");
    router.push(newPath);
  };

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
  }, [locale]);

  return (
    <footer className="text-white p-6 md:p-10 relative overflow-hidden flex flex-col items-center">
      <div className="max-w-7xl w-full">
        <div className="md:flex justify-between">
          <div>
            <div className="space-y-1 mb-6">
              <Brand />
              <p className="text-muted-foreground">{data?.helpText}</p>
            </div>

            <Select defaultValue={locale} onValueChange={toggleLocale}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="English" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="pt">Português</SelectItem>
              </SelectContent>
            </Select>

            <ul className="flex space-x-4 my-6">
              {data?.social &&
                Object.entries(data.social).map(([key, url]) => (
                  <li key={key}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {iconMap[key as Icon]}
                    </a>
                  </li>
                ))}
            </ul>
          </div>

          <div>
            <nav className="mb-6">
              <ul className="flex flex-col md:flex-row md:space-x-8">
                {data?.footerMenu?.map((item) => (
                  <li key={item.id} className="relative group mb-4 md:mb-0">
                    {item.link ? (
                      <Link
                        href={item.link}
                        target={item.openNewWindow ? "_blank" : "_self"}
                        rel={
                          item.openNewWindow ? "noopener noreferrer" : undefined
                        }
                        className="hover:underline uppercase"
                      >
                        {item.title}
                      </Link>
                    ) : (
                      <strong className="uppercase cursor-pointer duration-75 font-medium text-muted-foreground hover:text-white transition-colors">
                        {item.title}
                      </strong>
                    )}

                    {item.dropdown && (
                      <ul className="mt-2 space-y-2">
                        {item.dropdown.map((dropdownItem) => (
                          <li key={dropdownItem.id}>
                            <Link
                              href={dropdownItem.link || "#"}
                              target={
                                dropdownItem.openNewWindow ? "_blank" : "_self"
                              }
                              rel={
                                dropdownItem.openNewWindow
                                  ? "noopener noreferrer"
                                  : undefined
                              }
                              className="block py-1 text-muted-foreground hover:text-white transition-colors"
                            >
                              {dropdownItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <hr className="mb-6" />
        <div className="text-muted-foreground">
          <p className="text-sm">{data?.copyright}</p>
        </div>
      </div>

      <CircleGradient className="absolute top-0 right-0 md:left-0 w-full max-w-3xl -z-10" />
    </footer>
  );
}
