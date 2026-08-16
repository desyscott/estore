import Image from "next/image";
import Link from "next/link";
import { getCollections } from "@/lib/actions/actions";
import Pill from "@/components/home/collectionSection/pill";
import Info from "@/components/home/collectionSection/info";

const CollectionsPage = async () => {
  const collections = await getCollections();

  return (
    <div className="px-10 py-10">
      <p className="text-heading3-bold mb-8">All Collections</p>

      {!collections || collections.length === 0 ? (
        <p className="text-body-bold">No collections found</p>
      ) : (
        <div className="fluid-grid">
          {collections.map((collection: CollectionType) => (
            <Link
              href={`/collections/${collection._id}`}
              key={collection._id}
              className="group relative overflow-hidden rounded-lg shadow-sm transition-shadow duration-300 hover:shadow-xl"
            >
              <Image
                src={collection.image}
                alt={collection.title}
                width={350}
                height={200}
                className="cursor-pointer w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <Pill className="absolute top-2 right-3 " />
              <Info
                className="absolute bottom-2 w-[90%] left-0 right-0 mx-auto"
                collection={collection}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export const dynamic = "force-dynamic";

export default CollectionsPage;
