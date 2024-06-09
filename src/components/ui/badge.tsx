export function Badge({ category }: { category: string }) {
  return (
    <div className="rounded-full text-sm bg-primary/15 px-2 py-1.5 flex items-center">
      <p className="flex items-center my-auto text-center text-sm ">
        {" "}
        {category}
      </p>
    </div>
  )
}
