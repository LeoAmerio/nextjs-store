
interface CategoryProp {
  params: {
    categories: string[],
    searchParams?: string
  }
}

export default function Category(props: CategoryProp) {
  const { categories } = props.params;
  console.log(categories);

  return (
    <h1>Category: { categories }</h1>
  )
}