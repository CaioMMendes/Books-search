import { cn } from "@/utils/utils"
import { ReactElement } from "react"

type ContainerType = {
  children: ReactElement
  className?: string
}

export function Container({ children, className = "" }: ContainerType) {
  return (
    <div
      className={cn(
        `px-2 md:px-5 py-3 md:py-4 max-w-screen-2xl mx-auto w-full flex flex-col`,
        className
      )}
    >
      {children}
    </div>
  )
}
