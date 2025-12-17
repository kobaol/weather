const KEY = 'weather_app_state_v1'

export function loadPersistedState() {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return undefined
    return JSON.parse(raw)
  } catch {
    return undefined
  }
}

export function savePersistedState(state) {
  try {
    localStorage.setItem(KEY, JSON.stringify(state))
  } catch {
    // ignore
  }
}
