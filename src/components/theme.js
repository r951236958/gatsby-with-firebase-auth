import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#ffeb3b',
    },
    secondary: {
      main: '#f50057',
    },
    blueGray: {
      light: '#62727b',
      main: '#37474f',
      dark: '#102027',
    },
  },
  // Enable typography v2: https://material-ui.com/style/typography/#migration-to-typography-v2
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    useNextVariants: true,
  },
  flexColumnCenter: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  flexRowCenter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
})

export default responsiveFontSizes(theme)
