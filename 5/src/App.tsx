import { useState, useEffect } from 'react'

async function api(word: string) {
  const res = await fetch(`https://api.datamuse.com/words?rel_rhy=${word}`)
  const words = await res.json()
  return words.map((it: { word: string }) => it.word)
}

function useDebounce<T>(value: T, ms: number) {
  const [val, setVal] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => setVal(value), ms)
    return () => clearTimeout(timer)
  }, [value])

  return val
}

export default function App() {
  const [words, setWords] = useState<string[]>([])

  const [value, setValue] = useState<string>('')
  const debounceValue = useDebounce(value, 500)

  useEffect(() => {
    debounceValue && api(debounceValue).then(setWords)
  }, [debounceValue])

  return (
    <div>
      <input
        type="text"
        placeholder="enter a word..."
        onChange={e => setValue(e.target.value.trim())}
      />
      <ul>
        {words.map(it => (
          <li key={it}>{it}</li>
        ))}
      </ul>
    </div>
  )
}
