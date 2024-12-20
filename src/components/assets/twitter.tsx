import { ComponentProps } from "react";

export function Twitter(props: ComponentProps<"svg">) {
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
        d="M13.647 11.4l7.285-8.469h-1.726l-6.326 7.353-5.053-7.353H2l7.64 11.12L2 22.93h1.726l6.68-7.765 5.336 7.765h5.828L13.646 11.4zm-2.365 2.748l-.774-1.107-6.16-8.81H7l4.971 7.11.774 1.107 6.462 9.243h-2.652l-5.273-7.542z"
        fill="#fff"
        fillOpacity={0.4}
      />
    </svg>
  );
}
