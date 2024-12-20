import { ComponentProps } from "react";

export function Tiktok(props: ComponentProps<"svg">) {
  return (
    <svg
      width={24}
      height={25}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18.451 11.423l.696.023V8.162l-.278-.02a3.969 3.969 0 01-3.658-3.544l-.028-.268H12.32l-.024 11.47c0 1.186-1.056 2.15-2.281 2.15a2.181 2.181 0 110-4.361c.054 0 .1.006.166.015l.099.013.335.04V10.64l-.28-.017-.063-.005a3.737 3.737 0 00-.257-.011 5.162 5.162 0 105.161 5.161v-5.726a4.57 4.57 0 003.274 1.38z"
        fill="#fff"
        fillOpacity={0.4}
      />
    </svg>
  );
}
