import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

type Theme = "light" | "dark"

const getInitialTheme = (): Theme => {
  if (typeof window === "undefined") {
    return "dark"
  }

  const storedTheme = window.localStorage.getItem("theme")

  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

const applyTheme = (theme: Theme) => {
  document.documentElement.classList.toggle("dark", theme === "dark")
  document.documentElement.dataset.theme = theme
}

const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    applyTheme(theme)
    window.localStorage.setItem("theme", theme)
  }, [theme])

  const nextTheme = theme === "dark" ? "light" : "dark"
  const Icon = theme === "dark" ? Sun : Moon

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      aria-label={`Switch to ${nextTheme} theme`}
      title={`Switch to ${nextTheme} theme`}
      onClick={() => setTheme(nextTheme)}
      className="shrink-0"
    >
      <Icon className="size-4" />
    </Button>
  )
}

export default ThemeToggle
