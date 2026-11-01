import * as React from "react"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"

const Select = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    value?: string
    onValueChange?: (value: string) => void
    options: { value: string; label: string }[]
  }
>(({ className, value, onValueChange, options, ...props }, ref) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div ref={ref} className={cn("relative", className)} {...props}>
      <button
        type="button"
        className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="truncate">
          {options.find((option) => option.value === value)?.label || "Select an option"}
        </span>
        <CaretSortIcon className="h-4 w-4 opacity-50" />
      </button>

      {isOpen && (
        <div className="absolute top-full z-50 mt-1 w-full rounded-md border bg-popover shadow-md">
          <div className="max-h-60 overflow-auto">
            {options.map((option) => (
              <div
                key={option.value}
                className="relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                onClick={() => {
                  onValueChange?.(option.value)
                  setIsOpen(false)
                }}
              >
                <CheckIcon
                  className={cn(
                    "mr-2 h-4 w-4 opacity-0",
                    value === option.value && "opacity-100"
                  )}
                />
                <span className={cn(value === option.value && "font-semibold")}>{option.label}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
})
Select.displayName = "Select"

export { Select }