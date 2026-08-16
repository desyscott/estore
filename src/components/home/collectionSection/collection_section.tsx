import React from "react";
import { getCollections } from "@/lib/actions/actions";
import CollectionsFilterView from "./collections_filter_view";

type Props = {};

export default async function CollectionsSection({}: Props) {
  const collections = await getCollections();

  return (
    <div className="my-10 w-full max-w-[95%] mx-auto">
      <CollectionsFilterView collections={collections ?? []} />
    </div>
  );
}
