import { MainProducts } from 'app/components/home/MainProducts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Future E-commerce',
  description: 'The next gen e-commerce platform',
  keywords: ["e-commerce", "future", "world", "tecnology"]
};

export default function Home() {
  return (
    <main>
      <MainProducts />
    </main>
  )
}
