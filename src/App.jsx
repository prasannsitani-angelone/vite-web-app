import "./App.css"
import { ErrorBoundary } from "solid-js"

import { A, Route, Routes } from "@solidjs/router"
import { Home, Cart, Product } from "@pages"
import { useCartContext } from "@context/cart-context"

function App() {
  const { items } = useCartContext()

  const quantity = () => {
    return items.reduce((acc, cur) => acc + cur.quantity, 0)
  }

  return (
    <ErrorBoundary fallback={<p>Something went wrong :-/</p>}>
      <header class='space-x-4'>
        <h1>Nav Bar</h1>
        <A href='/'>Home</A>
        <A href='/cart'>Cart ({quantity})</A>
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
