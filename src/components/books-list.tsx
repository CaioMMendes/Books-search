import { Card, CardTypes } from "./ui/card"
import { v4 as uuidV4 } from "uuid"

type BooksListProps = { books: CardTypes[] }

const BooksList = ({ books }: BooksListProps) => {
  return (
    <div className="flex">
      {books.map(
        ({
          author = "autor",
          categories = ["categoria"],
          image = "https://m.media-amazon.com/images/I/51E2055ZGUL._AC_UF1000,1000_QL80_.jpg",
          synopsis = "asasdasdad asda sda sda sd",
          title = "Codigo limpo",
        }: CardTypes) => {
          return (
            <Card
              author={author}
              categories={categories}
              image={image}
              synopsis={synopsis}
              title={title}
              key={uuidV4()}
            />
          )
        }
      )}
    </div>
  )
}

export default BooksList
