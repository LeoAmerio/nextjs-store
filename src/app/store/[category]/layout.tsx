export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <nav>Nevagacion categories</nav>
      {children}
    </main>
  )
}