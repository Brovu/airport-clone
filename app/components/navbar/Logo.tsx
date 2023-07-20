"use client";
import Image from "next/image";
import { useRouter } from "next/router";

const Logo = () => {
  // eslint-disable-next-line jsx-a11y/alt-text
  return (
    <Image
      className="hidden md:block cursor-pointer"
      alt="Logo"
      src="/images/logo.png"
      height="100"
      width="100"
    />
  );
};

export default Logo;
