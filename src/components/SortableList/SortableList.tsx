import React, { useCallback } from 'react'
import update from 'immutability-helper'
import SortableItem from '../SortableItem'
import { SortableListWrapper } from './styled'
import { Item } from '../../App'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

type SortableListProps = {
  items: Item[]
  setItems: React.Dispatch<React.SetStateAction<Item[]>>
}

const SortableList = ({ items, setItems }: SortableListProps) => {
  const moveCard = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      setItems((prevCards: Item[]) =>
        update(prevCards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevCards[dragIndex] as Item],
          ],
        })
      )
    },
    [setItems]
  )

  return (
    <DndProvider backend={HTML5Backend}>
      <SortableListWrapper>
        {items.map((item, index) => (
          <SortableItem
            key={item.id}
            id={item.id}
            label={item.label}
            moveCard={moveCard}
            index={index}
          />
        ))}
      </SortableListWrapper>
    </DndProvider>
  )
}

export default SortableList
