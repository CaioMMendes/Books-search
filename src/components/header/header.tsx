import { Button } from "../ui/button"

export function Header() {
  return (
    <header className="bg-header h-96 bg-cover">
      <div className="w-2/6 flex flex-col justify-between items-center h-full py-20">
        <h2 className="text-2xl font-semibold">Books Search</h2>

        <Button>Pesquisar Livros</Button>
      </div>
    </header>
  )
}
