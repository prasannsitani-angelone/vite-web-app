import React from "react"
import App from "./App.jsx"
import "./index.css"
import { render } from "solid-js/web"
import "@solid-devtools/debugger/setup"
import { Router } from "@solidjs/router"

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById("root")
)
