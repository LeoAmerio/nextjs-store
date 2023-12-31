
interface CategoryProp {
  params: {
    category: string
  }
}

export default function Category(props: CategoryProp) {
  const { category } = props.params;

  return (
    <h1>Category: { category }</h1>
  )
}