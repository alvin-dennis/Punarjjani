import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-xl transform hover:scale-105 transition-all duration-300 rounded-full cursor-pointer shadow-sm",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 hover:shadow-xl transform hover:scale-105 transition-all duration-300 rounded-full cursor-pointer shadow-sm",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 hover:shadow-xl transform hover:scale-105 transition-all duration-300 rounded-full cursor-pointer shadow-sm",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:shadow-xl transform hover:scale-105 transition-all duration-300 rounded-full cursor-pointer shadow-sm",
        ghost:
          "hover:text-black dark:hover:bg-accent/50 hover:shadow-xl transform hover:scale-105 transition-all duration-300 rounded-full cursor-pointer shadow-sm",
        link: "text-primary underline-offset-4 hover:underline cursor-pointer",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Button({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Button, buttonVariants }
