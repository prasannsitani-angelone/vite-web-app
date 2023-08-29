import { useCartContext } from "@context/cart-context"
import { For } from "solid-js"

const Cart = (props) => {
  const { items } = useCartContext()

  return (
    <div class='max-w-md my-8 mx-auto'>
      <h2> Your Shopping Cart </h2>
      <For each={items}>
        {(item) => (
          <p class='my-3'>
            {item.title} - Rs{item.price} x {item.quantity}
          </p>
        )}
      </For>
    </div>
  )
}

export default Cart
