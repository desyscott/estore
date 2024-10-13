import React from "react";
import Header from "./header";
import Collections from "./collections";

type Props = {};

export default function CollectionsSection({}: Props) {
  return (
    <div className="my-10 w-full max-w-[95%] mx-auto">
      <Header />

      <div className="my-10">
        <Collections />
      </div>
    </div>
  );
}
