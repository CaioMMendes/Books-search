"use client"

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
  useContext,
} from "react"

export type Book = {
  authors: string[]
  categories: string[]
  longDescription: string
  score: number
  shortDescription: string
  status: string
  thumbnailUrl: string
  title: string
  _id: string
}

type PropsContext = {
  books: Book[]
  setBooks: Dispatch<SetStateAction<Book[]>>
}

const BooksContext = createContext<PropsContext | undefined>(undefined)

export function BooksProvider({ children }: { children: ReactNode }) {
  const [books, setBooks] = useState<Book[]>([])
  return (
    <BooksContext.Provider value={{ books, setBooks }}>
      {children}
    </BooksContext.Provider>
  )
}

// Custom hook to use the BooksContext
export function useBooks() {
  const context = useContext(BooksContext)
  if (!context) {
    throw new Error("useBooks must be used within a BooksProvider")
  }
  return context
}
