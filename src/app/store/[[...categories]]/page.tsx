import { ProductsWrapper } from 'app/components/store/ProductsWrapper';
import { getCollections } from 'app/services/shopify/collections';
import { getProducts } from 'app/services/shopify/products';

interface CategoryProp {
  params: {
    categories: string[],
    searchParams?: string
  }
}

export default async function Category(props: CategoryProp) {
  const { categories } = props.params;

  const products = await getProducts();

  return (
    <ProductsWrapper products={products} />
  )
}