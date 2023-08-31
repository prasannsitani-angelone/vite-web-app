import { createEffect, createResource, createSignal } from "solid-js"
import { fetchData } from "@apis"
import { Card } from "@components"

const Home = (props) => {
  const [apiResponse] = createResource(fetchData)

  const [apiResponseData, setApiResponseData] = createSignal(undefined)

  createEffect(() => {
    if (!apiResponse.loading && !apiResponse.error && apiResponse()) {
      setApiResponseData(apiResponse())
    }
  })

  return (
    <Show when={apiResponseData()}>
      <div class='grid lg:grid-cols-4 md:grid-cols-2 gap-10 my-4 px-4 h-screen w-screen'>
        <For each={apiResponseData()}>
          {(name) => {
            return <Card id={name.id} title={name.title} />
          }}
        </For>
      </div>
    </Show>
  )
}

export default Home
