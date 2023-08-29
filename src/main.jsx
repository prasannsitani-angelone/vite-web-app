import React from "react"
import App from "./App.jsx"
import "./index.css"
import { render } from "solid-js/web"
import "@solid-devtools/debugger/setup"
import { Router } from "@solidjs/router"
import { CartContextProvider } from "@context/cart-context.jsx"

render(
  () => (
    <Router>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </Router>
  ),
  document.getElementById("root")
)
