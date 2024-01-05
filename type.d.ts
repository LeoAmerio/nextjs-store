
interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

type ProductType = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  quantity: string;
  handle: string;
  tags: string;
};
