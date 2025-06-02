import React from 'react'
import AndOrButton from '../AndOrButton/AndOrButton'
import RulesName from '../RulesName/RulesName'
import { CroupItemContainer, CroupItemWrapper } from './styled'
import { Button } from '@mui/material'
import { Add } from '@mui/icons-material'
import SortableList from '../SortableList'
import { useSetItems } from '../../hooks/useSetItems'

type GroupItemProps = {
  label: string
}

const GroupItem = ({ label }: GroupItemProps) => {
  const { items, setItems, handleClick } = useSetItems([])

  return (
    <CroupItemWrapper>
      <CroupItemContainer>
        <RulesName label={label} />
        <AndOrButton />
        <Button variant="contained" endIcon={<Add />} onClick={handleClick}>
          Add subgroup
        </Button>
      </CroupItemContainer>

      {items.length > 0 && <SortableList items={items} setItems={setItems} />}
    </CroupItemWrapper>
  )
}

export default GroupItem
