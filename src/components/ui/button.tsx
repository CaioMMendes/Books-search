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
      ...props
    },
    ref
  ) => {
    const Comp = "button"
    return (
      <Comp
        className={cn(
          "bg-primary text-zinc-50 shadow hover:bg-primary/90",
          "px-4 py-2 text-base font-semibold rounded-lg ",
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
