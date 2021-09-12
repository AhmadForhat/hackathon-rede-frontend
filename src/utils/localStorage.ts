export const setLocalStorage = (key: string, value: string) => {
  window.localStorage.setItem(key, value)
}

export const getLocalStorage = (key: string) => {
  return window.localStorage.getItem(key)
}
