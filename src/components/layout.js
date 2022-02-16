import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import * as s from './layout.module.css'

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
      <div className={s.container}>
        <title>{pageTitle} | {data.site.siteMetadata.title}</title>
        <header className={s.siteTitle}>{data.site.siteMetadata.title}</header>
        <nav>
          <ul className={s.navLinks}>
            <li className={s.navLinkItem}>
              <Link to="/" className={s.navLinkText}>
                Home
              </Link>
            </li>

            <li className={s.navLinkItem}>
              <Link to="/about" className={s.navLinkText}>
                About
              </Link>
            </li>

            <li className={s.navLinkItem}>
              <Link to="/blog" className={s.navLinkText}>
                Blog
              </Link>
            </li>

            <li className={s.navLinkItem}>
              <Link to="/ssr" className={s.navLinkText}>
                SSR
              </Link>
            </li>
          </ul>
        </nav>
        <main>
          <h1 className={s.heading}>{pageTitle}</h1>
          {children}
        </main>
      </div>
    )
  }

export default Layout