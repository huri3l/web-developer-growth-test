import { ComponentProps } from "react";

export function Menu(props: ComponentProps<"svg">) {
  return (
    <svg
      width={19}
      height={13}
      viewBox="0 0 19 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 .25a.75.75 0 100 1.5h16.5a.75.75 0 000-1.5H1zM1 5.5A.75.75 0 001 7h16.5a.75.75 0 000-1.5H1zM1 10.75a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H1z"
        fill="#fff"
      />
    </svg>
  );
}
