export const getCollections = async () => {
  // const collections = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections`)
  // return await collections.json()
  console.log("Fetching collections from API:", `${process.env.NEXT_PUBLIC_API_URL}/collections`);

  try {
    const collections = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections`);

    // Check if the request was successful
    if (!collections.ok) {
      console.error("Failed to fetch collections, status:", collections.status);
      return []; // Return an empty array if the request fails
    }

    const data = await collections.json();
    console.log("Fetched collections data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching collections:", error);
    return []; // Return an empty array in case of an error
  }
}

export const getCollectionDetails = async (collectionId: string) => {
  // const collection = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections/${collectionId}`)
  // return await collection.json()
  console.log("Fetching collections from API:", `${process.env.NEXT_PUBLIC_API_URL}/collections`);

  try {
    const collections = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections`);

    // Check if the request was successful
    if (!collections.ok) {
      console.error("Failed to fetch collections, status:", collections.status);
      return []; // Return an empty array if the request fails
    }

    const data = await collections.json();
    console.log("Fetched collections data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching collections:", error);
    return []; // Return an empty array in case of an error
  }
}

export const getProducts = async () => {
  // const products = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`)
  // return await products.json()

  console.log(`${process.env.NEXT_PUBLIC_API_URL}`); // Check the URL being hit
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);

  // Check if the response is successful
  if (!response.ok) {
    console.error('Failed to fetch products:', response.status, response.statusText);
    return []; // Return an empty array or handle as needed
  }

  try {
    const products = await response.json();
    console.log("Products fetched:", products); // Log the products to inspect them
    return products;
  } catch (error) {
    console.error('Error parsing JSON:', error);
    return []; // Return an empty array in case of JSON parse error
  }
}

export const getProductDetails = async (productId: string) => {
  // const product = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`)
  // return await product.json()
  console.log(`${process.env.NEXT_PUBLIC_API_URL}`);
  try {
    const product = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`);

    // Check if the request was successful
    if (!product.ok) {
      console.error('Failed to fetch product details:', product.status, product.statusText);
      return null; // Or return a default value as needed
    }

    const productData = await product.json();
    return productData;
  } catch (error) {
    console.error('Error fetching product details:', error);
    return null; // Or handle the error as needed
  }
}

export const getSearchedProducts = async (query: string) => {
  // const searchedProducts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search/${query}`)
  // return await searchedProducts.json()
  console.log(`${process.env.NEXT_PUBLIC_API_URL}`);
  try {
    const searchedProducts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search/${query}`);

    // Check if the request was successful
    if (!searchedProducts.ok) {
      console.error('Failed to fetch searched products:', searchedProducts.status, searchedProducts.statusText);
      return []; // Return an empty array or handle as needed
    }

    const products = await searchedProducts.json();
    return products;
  } catch (error) {
    console.error('Error fetching searched products:', error);
    return []; // Return an empty array or handle as needed
  }
}

export const getOrders = async (customerId: string) => {
  // const orders = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders/customers/${customerId}`)
  // return await orders.json()
  console.log(`${process.env.NEXT_PUBLIC_API_URL}`);
  try {
    const orders = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders/customers/${customerId}`);

    // Check if the request was successful
    if (!orders.ok) {
      console.error('Failed to fetch orders:', orders.status, orders.statusText);
      return []; // Return an empty array or handle as needed
    }

    const orderData = await orders.json();
    return orderData;
  } catch (error) {
    console.error('Error fetching orders:', error);
    return []; // Return an empty array or handle as needed
  }
}


export const getRelatedProducts = async (productId: string) => {
  // const relatedProducts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}/related`)
  // return await relatedProducts.json()
  console.log(`${process.env.NEXT_PUBLIC_API_URL}`);
  try {
    const relatedProducts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}/related`);

    // Check if the request was successful
    if (!relatedProducts.ok) {
      console.error('Failed to fetch related products:', relatedProducts.status, relatedProducts.statusText);
      return []; // Return an empty array or handle as needed
    }

    const relatedProductData = await relatedProducts.json();
    return relatedProductData;
  } catch (error) {
    console.error('Error fetching related products:', error);
    return []; // Return an empty array or handle as needed
  }
}