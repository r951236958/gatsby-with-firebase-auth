require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'React App with Google Spreadsheet',
    description: `This is a fork of https://github.com/gatsbyjs/gatsby-starter-default which shows how to use Netlify Identity and Netlify Functions (via Netlify Dev) with Gatsby. Start here for your next JAMstack hackathon or use this as a reference implementation.`,
    author: `Nick Lin`,
    menuLinks: [
      {
        name: 'Home',
        link: '/',
      },
      {
        name: 'About',
        link: '/about/',
      },
      {
        name: 'App',
        link: '/app/',
      },
      {
        name: 'Page2',
        link: '/page-2/',
      },
      {
        name: 'Example',
        link: '/example/',
      },
      {
        name: 'Links',
        link: '/links/',
      },
      {
        name: 'Form',
        link: '/form/',
      },
      {
        name: 'Test',
        link: '/test/',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app/*`] },
    },
    {
      resolve: 'gatsby-plugin-firebase',
      options: {
        credentials: {
          apiKey: process.env.GATSBY_FIREBASE_API_KEY,
          authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
          databaseURL: process.env.GATSBY_FIREBASE_DATABASE_URL,
          projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
          storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
          messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID,
          appId: process.env.GATSBY_FIREBASE_APP_ID,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        // useResolveUrlLoader: true,
        sassOptions: {
          javascriptEnabled: true,
        },
      },
    },
    {
      resolve: `gatsby-theme-material-ui`,
      options: {
        webFontsConfig: {
          fonts: {
            google: [
              {
                family: `Roboto`,
                variants: [`300`, `400`, `500`],
              },
            ],
          },
        },
      },
    },
  ],
}
