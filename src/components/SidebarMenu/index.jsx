import React, { useCallback } from 'react'
import { List, ListItem } from '@react-md/list'
import { Sheet } from '@react-md/sheet'
// import { Button } from '@react-md/button'
// import { useToggle } from '@react-md/utils'
// import { FontIcon } from '@react-md/icon'

export default function SidebarMenu(props) {
  const { onRequestClose } = props
  const handleClick = useCallback(
    (event) => {
      if (event.target !== event.currentTarget) {
        onRequestClose()
      }
    },
    [onRequestClose]
  )
  return (
    <>
      <Sheet
        {...props}
        id="example-sheet-1"
        aria-label="Example Sheet"
        onClick={handleClick}
        onRequestClose={onRequestClose}
        position="left"
      >
        <List>
          <ListItem id="example-sheet-item-1">Item 1</ListItem>
          <ListItem id="example-sheet-item-2">Item 2</ListItem>
          <ListItem id="example-sheet-item-3">Item 3</ListItem>
          <ListItem id="example-sheet-item-4">Item 4</ListItem>
          <ListItem id="example-sheet-item-5">Item 5</ListItem>
        </List>
      </Sheet>
    </>
  )
}
