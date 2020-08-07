import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import StringUtil from 'src/views/string-util/index.js'
import Layout from 'src/views/layout/index.js'
export default function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/audit">
            <StringUtil />
          </Route>
          <Route path="/string">
            <div></div>
          </Route>
          <Route path="/home">
            <Welcome />
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
