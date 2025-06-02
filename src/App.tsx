import React from 'react'
import SortableList from './components/SortableList'
import { Button } from '@mui/material'
import { Add } from '@mui/icons-material'
import styled from 'styled-components'
import { useSetItems } from './hooks/useSetItems'

export type Item = {
  id: string
  label: string
}

const AppWrapper = styled.div`
  width: 1200px;
  margin: 20px auto;
`

function App() {
  const { items, setItems, handleClick } = useSetItems([])

  return (
    <AppWrapper>
      <Button variant="contained" endIcon={<Add />} onClick={handleClick}>
        Add group
      </Button>
      <SortableList items={items} setItems={setItems} />
    </AppWrapper>
  )
}

export default App
