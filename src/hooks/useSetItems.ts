import { useState } from 'react'
import { Item } from '../App'

export const useSetItems = (initial: Item[]) => {
  const [items, setItems] = useState<Item[]>(initial)

  const handleClick = () => {
    setItems((prevState) => {
      const newId = `${prevState.length + 1}`

      return [...prevState, { id: newId, label: `Rule ${newId}` }]
    })
  }

  return { items, setItems, handleClick }
}
