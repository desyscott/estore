import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/actions/actions";

const ProductsPage = async () => {
  const products = await getProducts();

  return (
    <div className="px-10 py-10">
      <p className="text-heading3-bold mb-8">All Products</p>

      {!products || products.length === 0 ? (
        <p className="text-body-bold">Sorry, no products to display</p>
      ) : (
        <div className="flex flex-wrap gap-16 justify-center">
          {products.map((product: ProductType) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export const dynamic = "force-dynamic";

export default ProductsPage;
