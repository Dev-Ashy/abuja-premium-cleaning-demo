import * as React from "react"
import { X, CheckCircle, AlertCircle, Info } from "lucide-react"
import { cn } from "@/lib/utils"

interface ToastProps {
  title?: string
  description?: string
  action?: React.ReactNode
  variant?: "default" | "success" | "error" | "info"
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  ({ className, title, description, action, variant = "default", ...props }, ref) => {
    const variantStyles = {
      default: "bg-white border-gray-200",
      success: "bg-green-50 border-green-200",
      error: "bg-red-50 border-red-200",
      info: "bg-blue-50 border-blue-200",
    }

    const iconVariant = {
      default: "text-gray-600",
      success: "text-green-600",
      error: "text-red-600",
      info: "text-blue-600",
    }

    const Icon = {
      default: Info,
      success: CheckCircle,
      error: AlertCircle,
      info: Info,
    }[variant]

    return (
      <div
        ref={ref}
        className={cn(
          "pointer-events-auto relative w-full max-w-md rounded-lg border p-4 shadow-lg",
          variantStyles[variant],
          className
        )}
        {...props}
      >
        <div className="flex items-start">
          <Icon className={cn("h-5 w-5 mt-0.5", iconVariant[variant])} />
          <div className="ml-3 flex-1">
            {title && (
              <div className="font-semibold text-gray-900">
                {title}
              </div>
            )}
            {description && (
              <div className="text-sm text-gray-600 mt-1">
                {description}
              </div>
            )}
          </div>
          {action}
          <button className="ml-4 inline-flex h-5 w-5 items-center justify-center rounded-full text-gray-400 hover:text-gray-600">
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    )
  }
)
Toast.displayName = "Toast"

export { Toast }