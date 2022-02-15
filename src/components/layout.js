import * as React from 'react'
import { Link } from 'gatsby'
import * as s from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
    return (
      <div className={s.container}>
        <title>{pageTitle}</title>
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