import Link from "next/link";
import React from "react";
import CtaButton from "../buttons/CtaButton";

export default function Header() {
  return (
    <div className="flex gap-2 w-fit mx-auto h-[52px] rounded-[303px] bg-blue-50 items-center p-2 pl-4 inset-0 fixed top-6">
      <div>
        <Link href="/">Craft</Link>
      </div>
      <ul className="flex gap-6 w-[485px] justify-center">
        <li>
          <Link href="/">Product</Link>
        </li>
        <li>
          <Link href="/">Community</Link>
        </li>
        <li>
          <Link href="/pricing">Pricing</Link>
        </li>
        <li>
          <Link href="/download">Download</Link>
        </li>
      </ul>
      <div className="flex gap-4 items-center">
        <Link href="/">Log in</Link>
        <CtaButton>Try Craft Free</CtaButton>
      </div>
    </div>
  );
}
