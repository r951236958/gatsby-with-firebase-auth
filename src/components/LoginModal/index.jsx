import React from 'react'
import {
  Dialog,
  // DialogOverlay, DialogContent
} from '@reach/dialog'
import VisuallyHidden from '@reach/visually-hidden'

const LoginModal = () => {
  const [showDialog, setShowDialog] = React.useState(false)
  const open = () => setShowDialog(true)
  const close = () => setShowDialog(false)

  return (
    <>
      <button onClick={open}>Open Dialog</button>
      <Dialog isOpen={showDialog} onDismiss={close}>
        <button className="close-button" onClick={close}>
          <VisuallyHidden>Close</VisuallyHidden>
          <span className="text-gray-600 right-0" aria-hidden>
            ×
          </span>
        </button>
        <p className="text-gray-700">Hello there. I am a dialog</p>
      </Dialog>
    </>
  )
}

export default LoginModal
