import { ComponentProps } from "react";

export function Linkedin(props: ComponentProps<"svg">) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.871 8.251c1.184 0 1.94-.804 1.94-1.798C6.79 5.41 6.056 4.63 4.895 4.63c-1.16 0-1.917.78-1.893 1.823-.024.994.733 1.798 1.87 1.798zm-1.775 1.42v11.577h3.598V9.672H3.096zm6.386.002c.048 1.018.095 2.249.095 3.693h.002v7.884h3.598v-6.677c0-.332.046-.663.142-.9.236-.662.827-1.349 1.822-1.349 1.302 0 1.822 1.018 1.822 2.51v6.416h3.598v-6.867c0-3.408-1.775-4.97-4.142-4.97-1.918 0-3.101 1.112-3.575 1.846h-.07l-.167-1.586H9.482z"
        fill="#fff"
        fillOpacity={0.4}
      />
    </svg>
  );
}
