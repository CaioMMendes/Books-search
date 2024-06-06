import { LoaderIcon } from "lucide-react"
import * as React from "react"

import { cn } from "@/utils/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  hasLoading?: boolean
  isLoading?: boolean
  disableButtonOnLoading?: boolean
  iconSize?: number
  buttonStyle?: "default" | "outline"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      disabled = false,
      asChild = false,
      hasLoading = true,
      isLoading = false,
      disableButtonOnLoading = true,
      iconSize = 20,
      children,
      buttonStyle = "default",
      ...props
    },
    ref
  ) => {
    const Comp = "button"
    return (
      <Comp
        className={cn(
          "shadow  px-4 py-2 font-semibold rounded-lg transition duration-200 ",
          buttonStyle === "default" &&
            "bg-primary text-zinc-50 hover:bg-primary/90",
          buttonStyle === "outline" &&
            "text-base bg-transparent ring-primary ring-1 text-primary hover:text-zinc-50 hover:bg-primary ",
          className
        )}
        ref={ref}
        disabled={
          disabled || (isLoading && hasLoading && disableButtonOnLoading)
        }
        {...props}
      >
        {hasLoading && isLoading && (
          <LoaderIcon
            data-testid="loader-icon"
            width={iconSize}
            height={iconSize}
            className="animate-spin"
          />
        )}
        {children}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button }
