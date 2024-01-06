import { ProductView } from 'app/components/product/ProductView';
import { getProducts } from 'app/services/shopify/products';
import { redirect } from 'next/navigation';

interface ProductPageProp {
  searchParams: {
    id: string,
  }
}

export default async function Product({ searchParams }: ProductPageProp) {
  const id = searchParams.id;
  const products = await getProducts(id);
  const product = products[0];

  if(!id)
    redirect('/store');

  return (
    <ProductView product={product} />
  )
}