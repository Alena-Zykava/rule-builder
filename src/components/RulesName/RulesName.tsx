import React, { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit'
import { Button, Modal, TextField } from '@mui/material'
import { ModalWrapper, NameWrapper, NewNameWrapper } from './styled'

type RulesNameProps = {
  label: string
}

const RulesName = ({ label }: RulesNameProps) => {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState(label)
  const [newName, setNewName] = useState(label)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleSave = () => {
    setName(newName || label)
    handleClose()
  }

  return (
    <>
      <NameWrapper>
        <div>{name}</div>
        <EditIcon onClick={handleOpen} />
      </NameWrapper>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalWrapper>
          <NewNameWrapper>
            <TextField
              id="outlined-basic"
              label="Text new name"
              variant="outlined"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
            <Button onClick={handleSave} variant="contained">
              Save
            </Button>
          </NewNameWrapper>
        </ModalWrapper>
      </Modal>
    </>
  )
}

export default RulesName
