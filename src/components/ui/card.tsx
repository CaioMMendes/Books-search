import Image from "next/image"
import { Badge } from "./badge"

import { v4 as uuidV4 } from "uuid"
import { Button } from "./button"

export type CardTypes = {
  image: string
  title: string
  author: string[]
  categories: string[]
  synopsis: string
}

export function Card({
  image,
  title,
  author,
  categories,
  synopsis,
}: CardTypes) {
  return (
    <div className="flex rounded-lg shadow-md">
      <div>
        <Image src={image} alt={`${title} book`} width={300} height={500} />
      </div>

      <div className="flex p-4 flex-col gap-4">
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-primary/70">{author[0]}</p>
        </div>
        <div className="flex flex-wrap">
          {categories.map((category: string) => {
            return <Badge category={category} key={uuidV4()} />
          })}
        </div>

        <p>
          <span className="font-bold">Sinopse</span> {synopsis}
        </p>
        <Button buttonStyle="selected">Ver mais</Button>
      </div>
    </div>
  )
}
