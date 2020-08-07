import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import StringUtil from 'src/views/string-util/index.js'
import Layout from 'src/views/layout/index.js'
import Audit from 'src/views/audit/index.js'
import Welcome from 'src/views/welcome/index.js'
export default function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/index">
            <Welcome />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/audit">
            <Audit />
          </Route>
          <Route path="/string">
            <StringUtil />
          </Route>
          <Redirect to="/index" />
        </Switch>
      </Layout>
    </Router>
  )
}

function Home() {
  return <h2>Welcome</h2>
}
