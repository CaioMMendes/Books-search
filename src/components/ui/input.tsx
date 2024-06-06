import { cn } from "@/utils/utils"
import { InputHTMLAttributes } from "react"

const Input = ({
  className,
  ...rest
}: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      type="text"
      className={cn(
        "px-2.5 py-2.5 text-sm shadow-md rounded-lg focus:ring-1 focus:ring-primary focus:outline-none",
        className
      )}
      {...rest}
    />
  )
}

export default Input
