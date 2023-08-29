import "./App.css"
import { ErrorBoundary } from "solid-js"

import { A, Route, Routes } from "@solidjs/router"
import Home from "@pages/home"
import Cart from "@pages/cart"

function App() {
  return (
    <ErrorBoundary fallback={<p>Something went wrong :-/</p>}>
      <div>
        <h1>Nav Bar</h1>
        <A href='/'>Home</A>
        <A href='/cart'>Cart</A>
      </div>
      <Routes>
        <Route path='/' component={Home} />
        <Route path='/cart' component={Cart} />
      </Routes>
    </ErrorBoundary>
  )
}

export default App
