import "./App.css"
import { ErrorBoundary } from "solid-js"

import { A, Route, Routes } from "@solidjs/router"
import { Home, Cart, Product } from "@pages"

function App() {
  return (
    <ErrorBoundary fallback={<p>Something went wrong :-/</p>}>
      <header class='space-x-4'>
        <h1>Nav Bar</h1>
        <A href='/'>Home</A>
        <A href='/cart'>Cart</A>
      </header>
      <Routes>
        <Route path='/' component={Home} />
        <Route path='/cart' component={Cart} />
        <Route path='/products/:id' component={Product} />
      </Routes>
    </ErrorBoundary>
  )
}

export default App
