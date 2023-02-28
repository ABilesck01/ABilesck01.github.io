/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `My portfolio`,
    siteUrl: `https://abilesck01.github.io`
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
    `gatsby-plugin-mdx` ,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/posts`,
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `about`,
        path: `${__dirname}/about`,
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `projects`,
        path: `${__dirname}/projects`,
      }
    },
  ]
};