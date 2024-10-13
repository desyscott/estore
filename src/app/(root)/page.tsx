import CollectionsSection from "@/components/home/collectionSection/collection_section";
import Landing from "@/components/home/landing";
import ProductList from "@/components/ProductList";
import Collections from "@/components/Collections";

import Image from "next/image";
import ProductsSection from "@/components/home/productsSection/product_section";

export default function Home() {
  return (
    <section>
      <Landing />

      <CollectionsSection />

      <ProductsSection />

      {/* <Collections /> */}
      {/* <ProductList /> */}
    </section>
  );
}

export const dynamic = "force-dynamic";
