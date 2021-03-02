import React from 'react'
import Icon from '@material-ui/core/Icon'
import { MenuItem, MenuItemLink } from '@react-md/menu'

export const menuItems = [
  'Item 1',
  null,
  0,
  1,
  'separator',
  { children: 'Item 2' },
  { role: 'separator', inset: true },
  { rightAddon: <Icon>home</Icon>, children: 'Home' },
  {
    leftAddon: <Icon>help_outline</Icon>,
    children: <span>Custom content</span>,
  },
  { href: '/', children: 'Link' },
  <MenuItem>Custom item</MenuItem>,
  <MenuItemLink href="#">Link</MenuItemLink>,
]
