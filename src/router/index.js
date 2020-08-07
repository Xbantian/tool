import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import StringUtil from 'src/views/string-util/index.js'
import Layout from 'src/views/layout/index.js'
import Audit from 'src/views/audit/index.js'
export default function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/home">
            <Welcome />
          </Route>
          <Route path="/audit">
            <Audit />
          </Route>
          <Route path="/string">
            <StringUtil />
          </Route>
          <Redirect to="/home" />
        </Switch>
      </Layout>
    </Router>
  )
}

function Welcome() {
  return <h2>Welcome</h2>
}
