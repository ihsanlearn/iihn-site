"use client"

import * as React from "react"
import { Globe, Check } from "lucide-react"
import * as Popover from "@radix-ui/react-popover"
import { useLanguage } from "@/lib/LanguageContext"
import { cn } from "@/lib/utils"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()
  const [open, setOpen] = React.useState(false)

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <button
          className="fixed top-6 right-20 z-50 rounded-full bg-background/80 p-3 shadow-lg border border-border backdrop-blur-sm transition-all hover:bg-muted data-[state=open]:bg-muted"
          aria-label="Change language"
        >
          <Globe className="h-5 w-5 text-primary" />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="z-50 w-40 rounded-xl border border-border bg-popover p-1 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
          sideOffset={8}
          align="end"
        >
          <div className="grid gap-1">
            <button
              onClick={() => {
                setLanguage("en")
                setOpen(false)
              }}
              className={cn(
                "flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                language === "en" && "bg-accent"
              )}
            >
              <span>English</span>
              {language === "en" && <Check className="h-4 w-4" />}
            </button>
            <button
              onClick={() => {
                setLanguage("id")
                setOpen(false)
              }}
              className={cn(
                "flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                language === "id" && "bg-accent"
              )}
            >
              <span>Indonesia</span>
              {language === "id" && <Check className="h-4 w-4" />}
            </button>
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
