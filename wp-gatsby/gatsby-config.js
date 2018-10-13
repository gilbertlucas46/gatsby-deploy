module.exports = {
  siteMetadata: {
    title: 'Nanobook',
    subtitle: 'Best nonfiction book in 15 minutes of text and sound.'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "localhost:8888",
        protocol: "http",
        hostingWPCOM: false,
        useACF: true,
        verboseOutput: true,
        name: 'Nanobook',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
