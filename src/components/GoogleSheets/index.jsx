import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Modal from '@material-ui/core/Modal'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
// import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { navigate } from '@reach/router'
import axios from 'axios'
import React, { useState } from 'react'
import TextField from '../TextField'
import useGoogleSheets from 'use-google-sheets'

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
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  modal: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  submit: {
    margin: theme.spacing(1),
  },
}))

function GoogleSheets() {
  const classes = useStyles()

  const [modalStyle] = useState(getModalStyle)
  const [modalOpen, setModalOpen] = useState(false)

  const [formValue, setFormVale] = useState({
    name: '',
    age: '',
    salary: '',
    hobby: '',
  })

  const { data, loading, error } = useGoogleSheets({
    apiKey: process.env.GATSBY_GOOGLE_API_KEY,
    sheetId: process.env.GATSBY_GOOGLE_SHEETS_ID,
  })

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error!</div>
  }

  const handleChange = (event) => {
    setFormVale({
      ...formValue,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('data on submit', formValue)

    const connectionURL =
      'https://sheet.best/api/sheets/42627f2d-e682-427a-928a-154ff1e109df'

    axios.post(connectionURL, formValue).then((response) => {
      console.log(response)
      navigate(`/thankyou`)
    })
  }

  const handleModalOpen = () => {
    setModalOpen(true)
  }

  const handleModalClose = () => {
    setModalOpen(false)
  }
  const modalBody = (
    <div style={modalStyle} className={classes.modal}>
      <h2 id="simple-modal-title">Text in a modal</h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
    </div>
  )

  return (
    <>
      <div>
        <pre className="language-json">
          <code>{JSON.stringify(data)}</code>
        </pre>
      </div>
      <div className="flex items-center justify-center mx-auto w-full">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} component={Paper} elevation={6} square>
            <div className={classes.paper}>
              <div className="my-2">
                <Typography variant="body2" gutterBottom>
                  點擊前往
                  <Link
                    href="https://docs.google.com/spreadsheets/d/1kDZReOEau2uXPwyFyS4xsKFE_a2aJiZvUNTtOT66uqo/edit?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Google試算表
                  </Link>
                </Typography>
              </div>
              <form
                className={classes.form}
                method="post"
                data-sheet-best="https://sheet.best/api/sheets/42627f2d-e682-427a-928a-154ff1e109df"
                onSubmit={handleSubmit}
              >
                <TextField
                  required
                  label="Name"
                  placeholder="Enter your name"
                  type="text"
                  name="name"
                  id="name"
                  value={formValue.name}
                  onChange={handleChange}
                />

                <TextField
                  required
                  label="Age"
                  placeholder="Enter your age"
                  type="number"
                  name="age"
                  id="age"
                  value={formValue.age}
                  onChange={handleChange}
                />

                <TextField
                  required
                  label="Salary"
                  placeholder="Enter your salary"
                  type="number"
                  name="salary"
                  id="salary"
                  value={formValue.salary}
                  onChange={handleChange}
                />

                <TextField
                  required
                  label="Hobby"
                  placeholder="Enter your hobby"
                  type="text"
                  name="hobby"
                  id="hobby"
                  value={formValue.hobby}
                  onChange={handleChange}
                />
                <Button
                  color="primary"
                  variant="contained"
                  type="submit"
                  className={classes.submit}
                >
                  Submit
                </Button>
              </form>
              <Button
                color="secondary"
                variant="outlined"
                type="button"
                className={classes.submit}
                onClick={handleModalOpen}
              >
                Open Modal
              </Button>
              <Modal
                open={modalOpen}
                onClose={handleModalClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
              >
                {modalBody}
              </Modal>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default GoogleSheets
