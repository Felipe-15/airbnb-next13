"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  return (
    <Image
      src="/images/logo.png"
      alt="Logo"
      className="
            sm:hidden
            md:block
            cursor-pointer
        "
      height="100"
      width="100"
    />
  );
};

export default Logo;
