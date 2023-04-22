"use client";

import Image from "next/image";

interface Props {
  src?: string | null;
}

const Avatar = ({ src }: Props) => {
  return (
    <Image
      className="rounded-full"
      height={30}
      width={30}
      alt="Avatar"
      src={src || "/images/placeholder.png"}
    />
  );
};

export default Avatar;
