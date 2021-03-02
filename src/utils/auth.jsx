import firebase from 'firebase/app'

export const isBrowser = () => typeof window !== 'undefined'

export const getUser = () =>
  isBrowser() && window.localStorage.getItem('user')
    ? JSON.parse(window.localStorage.getItem('user'))
    : {}

export const setUser = (user) =>
  isBrowser() && window.localStorage.setItem('user', JSON.stringify(user))

export const isLoggedIn = () => {
  const user = getUser()
  return !!user.email
}

export const logout = (firebase) => {
  return new Promise((resolve) => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        setUser({})
        resolve()
        console.log('logged out')
      })
  })
}

export const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    // firebase.auth.PhoneAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    signInSuccessWithAuthResult: function (authResult, redirectUrl) {
      if (authResult.user) {
        setUser(authResult.user)
      }
      return true
    },
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInSuccessUrl: '/app/profile/',
  // Terms of service url.
  tosUrl: 'https://www.google.com',
  // Privacy policy url.
  privacyPolicyUrl: 'https://www.google.com',
}
