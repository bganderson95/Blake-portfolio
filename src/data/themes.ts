/* Order matters: the Nav's theme button cycles through this list in order,
   and the first entry is the default a first-time visitor sees. */
export const THEMES = [
  "sifnos",
  "wahoowa",
  "curacao",
  "ewok",
  "snowspeeder",
  "ursula",
] as const

export type Theme = (typeof THEMES)[number]
