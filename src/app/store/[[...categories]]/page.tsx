import { ProductView } from 'app/components/product/ProductView';
import { ProductsWrapper } from 'app/components/store/ProductsWrapper';
import { getCollectionProducts, getCollections } from 'app/services/shopify/collections';
import { getProducts } from 'app/services/shopify/products';

interface CategoryProp {
  params: {
    categories: string[],
  }
  searchParams?: string
}

export default async function Category(props: CategoryProp) {
  const { categories } = props.params;

  let products = [];
  const collections = await getCollections();
  
  if (categories?.length > 0) {
    const selectedCollectionsId = collections.find((collection) => collection.handle === categories[0]).id;
    products = await getCollectionProducts(selectedCollectionsId);
  } else {
    products = await getProducts();
  }

  return (
    <ProductsWrapper products={products} />
  )
}