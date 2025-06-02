import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import React, { useState } from 'react'

const AndOrButton = () => {
  const [alignment, setAlignment] = useState<'and' | 'or'>('and')

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: 'and' | 'or' | null
  ) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment)
    }
  }

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      color={alignment === 'and' ? 'primary' : 'success'}
      onChange={handleChange}
      aria-label="AND OR toggle"
    >
      <ToggleButton
        value="and"
        aria-label="AND"
        sx={{
          bgcolor: alignment === 'and' ? 'blue' : 'default',
          color: alignment === 'and' ? 'white' : 'inherit',
          '&:hover': {
            bgcolor: alignment === 'and' ? 'darkblue' : 'default',
          },
        }}
      >
        AND
      </ToggleButton>
      <ToggleButton
        value="or"
        aria-label="OR"
        sx={{
          bgcolor: alignment === 'or' ? 'green' : 'default',
          color: alignment === 'or' ? 'white' : 'inherit',
          '&:hover': {
            bgcolor: alignment === 'or' ? 'darkgreen' : 'default',
          },
        }}
      >
        OR
      </ToggleButton>
    </ToggleButtonGroup>
  )
}

export default AndOrButton
