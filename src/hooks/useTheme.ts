import { useSyncExternalStore } from "react"
import { THEMES, type Theme } from "../data/themes"

/* Single source of truth for the active theme, so every component that can
   change it (the Nav button, the hero's "Switch theme" button) stays in sync.
   The store owns the three side effects the theme has always had: the
   `data-theme` attribute on <html>, the localStorage entry, and the brief
   `.theme-transitioning` class that crossfades colors site-wide. */

const STORAGE_KEY = "theme"
const TRANSITION_MS = 400

let listeners: (() => void)[] = []

function read(): Theme | null {
  try {
    const saved = localStorage.getItem(STORAGE_KEY) as Theme | null
    return saved && THEMES.includes(saved) ? saved : null
  } catch {
    return null
  }
}

function persist(theme: Theme) {
  try {
    localStorage.setItem(STORAGE_KEY, theme)
  } catch {
    // Private-mode/blocked storage: the theme still applies for this session.
  }
}

/* Applied at import time so the theme is on <html> before first paint —
   the default (first in THEMES) on a first visit, the saved one after that.
   Deliberately not random: every first-time visitor should see the same
   site, and the theme they pick afterwards is the one that persists. */
let current: Theme = (() => {
  const theme = read() ?? THEMES[0]
  persist(theme)
  document.documentElement.setAttribute("data-theme", theme)
  return theme
})()

export function setTheme(next: Theme) {
  if (next === current) return
  const el = document.documentElement
  el.classList.add("theme-transitioning")
  el.setAttribute("data-theme", next)
  persist(next)
  current = next
  listeners.forEach(l => l())
  window.setTimeout(
    () => el.classList.remove("theme-transitioning"),
    TRANSITION_MS
  )
}

function subscribe(listener: () => void) {
  listeners.push(listener)
  return () => {
    listeners = listeners.filter(l => l !== listener)
  }
}

const getSnapshot = () => current

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getSnapshot)
  const nextTheme = THEMES[(THEMES.indexOf(theme) + 1) % THEMES.length]
  return { theme, nextTheme, cycleTheme: () => setTheme(nextTheme) }
}
