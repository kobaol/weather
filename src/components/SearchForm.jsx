import { useCallback } from 'react'

export default function SearchForm({ value, onChange }) {
  const handle = useCallback(
    (e) => {
      onChange(e.target.value)
    },
    [onChange]
  )

  return (
    <div className="search">
      <input
        className="input"
        placeholder="Szukaj miasta..."
        value={value}
        onChange={handle}
      />
    </div>
  )
}
