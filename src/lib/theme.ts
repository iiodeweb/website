export const themes = ["dark", "light"] as const

export type Theme = (typeof themes)[number]

export const defaultTheme: Theme = "dark"

export function isTheme(value: string | null | undefined): value is Theme {
  return Boolean(value && themes.includes(value as Theme))
}
