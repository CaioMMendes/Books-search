"use client"
import BooksList from "@/components/books-list"
import { Container } from "@/components/container/container"
import { Header } from "@/components/header/header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Input from "@/components/ui/input"
import { useBooks } from "@/context/books-context"
import { searchBooks } from "@/utils/functions/searchBooks"
import axios from "axios"
import {
  ChangeEvent,
  KeyboardEvent,
  useCallback,
  useContext,
  useState,
} from "react"
import { v4 as uuidV4 } from "uuid"

export default function Home() {
  const genderBooks = [
    "Ação",
    "Aventura",
    "Biografia",
    "Comédia",
    "Drama",
    "Ficção",
  ]

  const [selectedGender, setSelectedGender] = useState<string[]>([])
  const [searchInput, setSearchInput] = useState<string>("")
  const { books, setBooks } = useBooks()

  const handleSelect = useCallback(
    (title: string) => {
      if (selectedGender.includes(title)) {
        setSelectedGender((selectedGender) =>
          selectedGender.filter((item) => item !== title)
        )
      } else {
        setSelectedGender((selectedGender) => [title, ...selectedGender])
      }
    },
    [selectedGender]
  )

  const handleSubmit = async () => {
    const response = await searchBooks(searchInput)
    setBooks(response)
  }

  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value)
  }

  return (
    <>
      <Header />
      <Container>
        <main className="flex flex-col gap-6">
          <section className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold border-primary border-b w-fit">
              O que você deseja ler hoje?
            </h2>

            <div className="flex gap-5">
              {genderBooks.map((gender) => {
                return (
                  <Button
                    onClick={() => handleSelect(gender)}
                    key={uuidV4()}
                    buttonStyle={
                      selectedGender.includes(gender) ? "selected" : "default"
                    }
                  >
                    {gender}
                  </Button>
                )
              })}
            </div>

            <h4 className="text-lg font-medium">
              Sobre o que você gostaria de receber uma recomendação de livro?
            </h4>
            <Input
              className="w-full"
              placeholder="Eu gostaria de ler..."
              value={searchInput}
              onChange={handleSearchInput}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSubmit()
                }
              }}
            />
          </section>

          <section className="flex flex-col gap-5">
            <h2 className="text-2xl font-semibold border-primary border-b w-fit">
              Livros recomendados
            </h2>
            <BooksList books={books} />
          </section>
        </main>
      </Container>
    </>
  )
}
