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
      <div className="flex text-white/70 gap-2 pt-8">
        <div className="bg-orange-00 w-[50%] flex flex-col gap-2">
          <p className="text-2xl font-semibold w-[50%]">
            We will growup your business with a personal ai assistant
          </p>
          <p className="text-sm mt-2">Micheal Essuman</p>
          <p className="text-sm -mt-1">October, 2024</p>
        </div>
        <div className="bg-amber-00 w-[15%] ml-auto">
          <p className="text-xl font-semibold mb-4">Company</p>
          <p className="text-base mb-1">Blog</p>
          <p className="text-base mb-1">Careers</p>
          <p className="text-base mb-1">Pricing</p>
        </div>
        <div className="bg-green-00 w-[15%] ml-auto">
          <p className="text-xl font-semibold mb-4">Resources</p>
          <p className="text-base mb-1">Documentation</p>
          <p className="text-base mb-1">Papers</p>
          <p className="text-base mb-1">Press kit </p>
          <p className="text-base mb-1">Contact</p>
          <p className="text-base mb-1">Support</p>
          <p className="text-base mb-1">Advertise</p>
        </div>
        <div className="bg-red-00 w-[15%] ml-auto">
          <p className="text-xl font-semibold  mb-4">Legal</p>
          <p className="text-base mb-1">Privacy</p>
          <p className="text-base mb-1">Terms</p>
          <p className="text-base mb-1">Code of conduct</p>
          <p className="text-base mb-1">Cookies</p>
          <p className="text-base mb-1">Accessibility</p>
        </div>
      </div>

      <div className="h-[0.5px] w-full bg-white/50 my-8"></div>

      <div className="flex justify-between items-center pt-8 pb-4 text-white/80 p-8">
        <div className="flex items-center gap-2">
          <Link href="mailto:michealessuman08@gmail.com" target="_blank">
            <EnvelopeClosedIcon className="w-5 h-5" />
          </Link>
          <Link href="https://github.com/k-stiles" target="_blank">
            <GitHubLogoIcon className="w-5 h-5" />
          </Link>
          <Link href="https://x.com/KwakuStiles" target="_blank">
            <TwitterLogoIcon className="w-5 h-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/micheal-essuman-38146a259"
            target="_blank"
          >
            <LinkedInLogoIcon className="w-5 h-5" />
          </Link>
        </div>
        <p className="">© 2024 Essuman Micheal. All rights reserved.</p>
      </div>
    </div>
  );
}
