import { useDrag, useDrop } from 'react-dnd'
import React, { useRef } from 'react'
import { SortableItemWrapper } from './styled'
import GroupItem from '../GroupItem'
import type { Identifier, XYCoord } from 'dnd-core'

type ItemProps = {
  id: string
  label: string
  moveCard: (dragIndex: number, hoverIndex: number) => void
  index: number
}

type DragItem = {
  index: number
  id: string
  type: string
}

const ItemTypes = {
  CARD: 'card',
}

const SortableItem = ({ id, label, moveCard, index }: ItemProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [{ handlerId }, drop] = useDrop<
    DragItem,
    void,
    { handlerId: Identifier | null }
  >({
    accept: ItemTypes.CARD,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    hover(item: DragItem, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index

      if (dragIndex === hoverIndex) {
        return
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect()

      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

      const clientOffset = monitor.getClientOffset()

      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }

      moveCard(dragIndex, hoverIndex)

      item.index = hoverIndex
    },
  })

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD,
    item: () => {
      return { id, index }
    },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const opacity = isDragging ? 0 : 1
  drag(drop(ref))

  return (
    <SortableItemWrapper
      ref={ref}
      data-handler-id={handlerId}
      style={{ opacity }}
    >
      <GroupItem label={label} />
    </SortableItemWrapper>
  )
}

export default SortableItem
