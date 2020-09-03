import React from 'react';
import { withRouter } from 'react-router'
import Header from '../Header'
import "./styles/main.scss"

const Body = (props) => {

  const { children } = props
  return (
    <>
      <main className="page-content">
        <section className="container">
          <Header />
          {children}
          </section>
      </main>
    </>
  )
}

export default withRouter(Body);