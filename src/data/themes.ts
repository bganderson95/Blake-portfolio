export const THEMES = [
  "sifnos",
  "ursula",
  "curacao",
  "wahoowa",
  "snowspeeder",
  "ewok",
] as const

export type Theme = (typeof THEMES)[number]
