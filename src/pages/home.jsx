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
      <div class='flex flex-col space-y-4'>
        <ul>
          <For each={apiResponseData()}>
            {(name) => {
              return (
                <li>
                  <Card title={name.title} />
                </li>
              )
            }}
          </For>
        </ul>
        <p></p>
      </div>
    </Show>
  )
}

export default Home
