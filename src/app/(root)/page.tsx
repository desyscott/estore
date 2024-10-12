import Collections from "@/components/Collections";
import CollectionsSection from "@/components/home/collectionSection/collection_section";
import Landing from "@/components/home/landing";
import ProductList from "@/components/ProductList";

import Image from "next/image";

export default function Home() {
  return (
    <section>
      <Landing />
      <CollectionsSection />

      {/* <Collections /> */}
      {/* <ProductList /> */}
    </section>
  );
}

export const dynamic = "force-dynamic";
