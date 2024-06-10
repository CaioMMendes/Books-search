import { Book } from "@/context/books-context"
import { Card, CardTypes } from "./ui/card"
import { v4 as uuidV4 } from "uuid"

type BooksListProps = { books: Book[] }

const BooksList = ({ books }: BooksListProps) => {
  return (
    <div className="flex">
      {books.map(
        ({
          authors = ["autor"],
          categories = ["categoria"],
          thumbnailUrl = "https://m.media-amazon.com/images/I/51E2055ZGUL._AC_UF1000,1000_QL80_.jpg",
          longDescription = "asasdasdad asda sda sda sd",
          title = "Codigo limpo",
          _id,
        }: Book) => {
          return (
            <Card
              author={authors}
              categories={categories}
              image={thumbnailUrl}
              synopsis={longDescription}
              title={title}
              key={_id}
            />
          )
        }
      )}
    </div>
  )
}

export default BooksList
