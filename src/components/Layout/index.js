import React from 'react';
import { withRouter } from 'react-router'

import "./styles/main.scss"

const Body = (props) => {

  const { children } = props
  return (
    <>
      <main className="page-content">
        <section className="page-content__card">{children}</section>
      </main>
    </>
  )
}

export default withRouter(Body);