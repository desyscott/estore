import CollectionsSection from "@/components/home/collectionSection/collection_section";
import Landing from "@/components/home/landing";
import ProductsSection from "@/components/home/productsSection/product_section";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <section>
      <Reveal>
        <Landing />
      </Reveal>

      <Reveal delay={0.1}>
        <CollectionsSection />
      </Reveal>

      <Reveal delay={0.1}>
        <ProductsSection />
      </Reveal>
    </section>
  );
}

export const dynamic = "force-dynamic";
