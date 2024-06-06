import { Container } from "@/components/container/container"
import { Header } from "@/components/header/header"
import { Button } from "@/components/ui/button"
import Input from "@/components/ui/input"

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <>
          <section className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold border-primary border-b w-fit">
              O que você deseja ler hoje?
            </h2>

            <div className="flex gap-5">
              <Button>Comédia</Button>
              <Button buttonStyle="outline">Drama</Button>
            </div>

            <h4 className="text-lg font-medium">
              Sobre o que você gostaria de receber uma recomendação de livro?
            </h4>
            <Input className="w-full" placeholder="Eu gostaria de ler..." />
          </section>
        </>
      </Container>
    </>
  )
}
