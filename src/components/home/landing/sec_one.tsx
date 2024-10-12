import Image from "next/image";
import React from "react";

type Props = {};

export default function SecOne({}: Props) {
  return (
    <Image
      src="https://images.pexels.com/photos/9069207/pexels-photo-9069207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      // src="https://images.pexels.com/photos/8728382/pexels-photo-8728382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      alt="banner"
      width={2000}
      height={1000}
      className="rounded-lg h-full w-full md:w-[85%] mx-auto object-cover"
      // className="rounded-lg h-64 md:h-[80%] w-full md:w-[85%] mx-auto object-cover"
    />
  );
}
