import { useParams, useSearchParams } from "@solidjs/router"
import { Show, createResource } from "solid-js"
import { fetchProduct } from "@apis"

const Product = (props) => {
  const params = useParams() // For Path Params
  const [searchParams] = useSearchParams() // For Query Params

  const [product] = createResource(params.id, fetchProduct)

  return (
    <Show when={product()}>
      <div>Product Details - {product().title}</div>
    </Show>
  )
}

export default Product
