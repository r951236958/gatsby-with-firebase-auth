import React, { useState } from 'react'
// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
// import firebase from 'gatsby-plugin-firebase'
// import { uiConfig } from '../../utils/auth'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'

function rand() {
  return Math.round(Math.random() * 20) - 10
}

function getModalStyle() {
  const top = 50 + rand()
  const left = 50 + rand()

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  }
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))

export default function UserLogin() {
  const classes = useStyles()
  const [modalStyle] = useState(getModalStyle)
  const [openModal, setModalOpen] = useState(false)

  const handleModalOpen = () => {
    setModalOpen(!openModal)
  }

  const handleModalClose = () => {
    setModalOpen(openModal)
  }

  const modalBody = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="modal-demo-title">Text in a modal</h2>
      <p id="modal-demo-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
    </div>
  )

  return (
    <>
      <button
        type="button"
        className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        id="user-menu"
        onClick={handleModalOpen}
      >
        <span className="sr-only">Login</span>
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          width="16"
          height="16"
          viewBox="0 0 16 16"
        >
          <path d="M6 3.5a.5.5 0 01.5-.5h8a.5.5 0 01.5.5v9a.5.5 0 01-.5.5h-8a.5.5 0 01-.5-.5v-2a.5.5 0 00-1 0v2A1.5 1.5 0 006.5 14h8a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0014.5 2h-8A1.5 1.5 0 005 3.5v2a.5.5 0 001 0v-2z" />
          <path d="M11.854 8.354a.5.5 0 000-.708l-3-3a.5.5 0 10-.708.708L10.293 7.5H1.5a.5.5 0 000 1h8.793l-2.147 2.146a.5.5 0 00.708.708l3-3z" />
        </svg>
      </button>
      <Modal
        open={openModal}
        onClose={handleModalClose}
        aria-labelledby="modal-demo-title"
        aria-describedby="modal-demo-description"
      >
        {modalBody}
      </Modal>
    </>
  )
}
