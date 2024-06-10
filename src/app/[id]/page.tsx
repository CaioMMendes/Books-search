import BooksList from "@/components/books-list"
import { Container } from "@/components/container/container"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { v4 as uuidV4 } from "uuid"

const BookDetailsPage = () => {
  const books = [
    {
      authors: ["autor"],
      categories: ["categoria"],
      thumbnailUrl:
        "https://m.media-amazon.com/images/I/51E2055ZGUL._AC_UF1000,1000_QL80_.jpg",
      longDescription: "asasdasdad asda sda sda sd",
      title: "Codigo limpo",

      score: 1,
      shortDescription: "string",
      status: "string",

      _id: "string",
    },
  ]

  return (
    <Container>
      <div className="flex flex-col gap-14">
        <header>
          <Link href={"/"}>Books Search</Link>
        </header>
        <main className="flex flex-col gap-6">
          <section className="flex gap-10 w-full justify-between">
            <div className="flex p-4 flex-col gap-4">
              <div className="flex flex-col">
                <h2 className="text-5xl font-semibold">{books[0].title}</h2>
                <p className="text-primary/70 text-xl">{books[0].authors[0]}</p>
              </div>

              <p className="text-lg">{books[0].longDescription}</p>
            </div>
            <div>
              <Image
                src={books[0].thumbnailUrl}
                alt={`${books[0].title} book`}
                width={300}
                height={500}
              />
            </div>
          </section>

          <section className="flex flex-col gap-5">
            <h2 className="text-2xl font-semibold border-primary border-b w-fit">
              Recomendações com base neste livro
            </h2>
            <BooksList books={books} />
          </section>
        </main>
      </div>
    </Container>
  )
}

export default BookDetailsPage
