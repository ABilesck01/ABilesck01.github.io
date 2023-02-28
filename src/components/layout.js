import * as React from 'react'
import { MDXProvider } from "@mdx-js/react"
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
  button
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={container}>

      <header className={siteTitle}>{data.site.siteMetadata.title}</header>

      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
          <li className={navLinkItem}><Link to="/projects" className={navLinkText}>Projects</Link></li>
          {/* <li className={navLinkItem}><Link to="/about" className={navLinkText}>About</Link></li> */}
          <li className={navLinkItem}><Link to="/posts" className={navLinkText}>Posts</Link></li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        <MDXProvider>
          {children}
        </MDXProvider>

      </main>

    </div>
  )
}

export default Layout