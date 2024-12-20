import { ComponentProps } from "react";

export function Youtube(props: ComponentProps<"svg">) {
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
        d="M20.963 6.705c.311.311.536.7.651 1.124.662 2.667.51 6.878.013 9.648a2.522 2.522 0 01-1.775 1.775c-1.557.424-7.821.424-7.821.424s-6.264 0-7.82-.424a2.521 2.521 0 01-1.776-1.775c-.666-2.655-.483-6.87-.013-9.635a2.521 2.521 0 011.775-1.775c1.557-.425 7.821-.437 7.821-.437s6.264 0 7.82.424c.426.115.814.34 1.125.651zm-5.742 5.948l-5.197 3.01v-6.02l5.197 3.01z"
        fill="#fff"
        fillOpacity={0.4}
      />
    </svg>
  );
}
