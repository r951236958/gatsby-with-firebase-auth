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
      <div>{JSON.stringify(data)}</div>
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

      <div className="mt-5 md:mt-0 md:col-span-2 ">
        <form id="" action="#" method="POST">
          <div className="shadow-xl w-3xl md:max-w-2xl overflow-hidden mx-auto rounded-lg">
            <div className="px-4 py-5 bg-white dark:bg-paper-500 sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3 focus-within:text-cyan-500">
                  <label
                    htmlFor="first_name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    autocomplete="given-name"
                    className="mt-1 focus:ring-cyan-500 block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-400 rounded-md dark:bg-transparent"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3 focus-within:text-cyan-500">
                  <label
                    htmlFor="last_name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    autocomplete="family-name"
                    className="mt-1 focus:ring-cyan-500 block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-400 rounded-md dark:bg-transparent"
                  />
                </div>

                <div className="col-span-6 sm:col-span-4 focus-within:text-cyan-500">
                  <label
                    htmlFor="email_address"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Email address
                  </label>
                  <input
                    type="text"
                    name="email_address"
                    id="email_address"
                    autocomplete="email"
                    className="mt-1 focus:ring-cyan-500 block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-400 rounded-md dark:bg-transparent"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3 focus-within:text-cyan-500">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Country / Region
                  </label>
                  <select
                    id="country"
                    name="country"
                    autocomplete="country"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 dark:border-gray-400 bg-white dark:bg-transparent rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 sm:text-sm"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>

                <div className="col-span-6 focus-within:text-cyan-500">
                  <label
                    htmlFor="street_address"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Street address
                  </label>
                  <input
                    type="text"
                    name="street_address"
                    id="street_address"
                    autocomplete="street-address"
                    className="mt-1 focus:ring-cyan-500 block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-400 rounded-md dark:bg-transparent"
                  />
                </div>

                <div className="col-span-6 sm:col-span-6 lg:col-span-2 focus-within:text-cyan-500">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    className="mt-1 focus:ring-cyan-500 block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-400 rounded-md dark:bg-transparent"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3 focus-within:text-cyan-500 lg:col-span-2">
                  <label
                    htmlFor="state"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    State / Province
                  </label>
                  <input
                    type="text"
                    name="state"
                    id="state"
                    className="mt-1 focus:ring-cyan-500 block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-400 rounded-md dark:bg-transparent"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3 focus-within:text-cyan-500 lg:col-span-2">
                  <label
                    htmlFor="postal_code"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    ZIP / Postal
                  </label>
                  <input
                    type="text"
                    name="postal_code"
                    id="postal_code"
                    autocomplete="postal-code"
                    className="mt-1 focus:ring-cyan-500 block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-400 rounded-md dark:bg-transparent"
                  />
                </div>
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 dark:bg-paper-500 text-right sm:px-6 focus-within:text-cyan-500">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 shadow-sm text-sm font-medium rounded-md text-gray-200 hover:text-cyan-500 border border-cyan-500 hover:bg-cyan-500 hover:bg-opacity-20 hover:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default GoogleSheets
