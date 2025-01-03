import React from "react";
import {
  GitHubLogoIcon,
  TwitterLogoIcon,
  LinkedInLogoIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="bg-black p-8">
      <div className="flex flex-wrap md:flex-nowrap text-white/70 gap-12 md:gap-2 pt-8 bg-red-00">
        <div className="bg-orange-00 w-[50%] flex flex-col gap-2">
          <p className="text-lg md:text-xl font-semibold w-full md:w-[70%] lg:w-[50%]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
          <p className="text-sm mt-2">Desmond Essuman</p>
          <p className="text-sm -mt-1">October, 2024</p>
        </div>
        <div className="bg-amber-00 w-[40%] md:w-[15%] ml-0 md:ml-auto ">
          <p className="text-lg font-medium mb-4">Company</p>
          <p className="text-base mb-1">Blog</p>
          <p className="text-base mb-1">Careers</p>
          <p className="text-base mb-1">Pricing</p>
          <p className="text-base mb-1">Advertise</p>
        </div>
        <div className="bg-green-00 w-[40%] md:w-[15%]  ml-0 md:ml-auto ">
          <p className="text-lg font-medium mb-4">Resources</p>
          <p className="text-base mb-1">Documentation</p>
          <p className="text-base mb-1">Papers</p>
          <p className="text-base mb-1">Press kit </p>
          <p className="text-base mb-1">Contact</p>
          <p className="text-base mb-1">Support</p>
        </div>
        <div className="bg-red-00 w-[40%] md:w-[15%]  ml-0 md:ml-auto ">
          <p className="text-lg font-medium  mb-4">Legal</p>
          <p className="text-base mb-1">Privacy</p>
          <p className="text-base mb-1">Terms</p>
          <p className="text-base mb-1">Code of conduct</p>
          <p className="text-base mb-1">Cookies</p>
          <p className="text-base mb-1">Accessibility</p>
        </div>
      </div>

      <div className="h-[0.5px] w-full bg-white/50 my-8"></div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0  pt-8 pb-4 text-white/80 p-8">
        <div className="flex items-center gap-2">
          <Link href="mailto:desmondessuman054@gmail.com" target="_blank">
            <EnvelopeClosedIcon className="w-5 h-5" />
          </Link>
          <Link href="https://github.com/desyscott" target="_blank">
            <GitHubLogoIcon className="w-5 h-5" />
          </Link>
          <Link href="https://x.com/desy_scott" target="_blank">
            <TwitterLogoIcon className="w-5 h-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/desmond-essuman/"
            target="_blank"
          >
            <LinkedInLogoIcon className="w-5 h-5" />
          </Link>
        </div>
        <p className="">© 2024 Essuman Desmond. All rights reserved.</p>
      </div>
    </div>
  );
}
