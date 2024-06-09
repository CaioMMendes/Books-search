import { cn } from "@/utils/utils"
import { forwardRef, InputHTMLAttributes } from "react"



const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, ...rest }, ref) => {
  return (
    <input
      type="text"
      className={cn(
        "px-2.5 py-2.5 text-sm shadow-md rounded-lg focus:ring-1 focus:ring-primary focus:outline-none",
        className
      )}
      ref={ref}
      {...rest}
    />
  )
})

Input.displayName = "Input"
export default Input
