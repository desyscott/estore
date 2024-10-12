import React from "react";
import { Button } from "../ui/button";
import { Apple } from "lucide-react";
import TitleSection from "./landing/title_section";
import ImageSection from "./landing/image_section";

type Props = {};

export default function Landing({}: Props) {
  return (
    <div className="py-4">
      <TitleSection />
      <ImageSection />
    </div>
  );
}
