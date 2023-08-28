import "./App.css"
import {
  ErrorBoundary,
  For,
  Show,
  createEffect,
  createResource,
  createSignal
} from "solid-js"

import { Video, Card } from "@components"

const fetchUser = async (id) => {
  try {
    return await (
      await fetch("https://jsonplaceholder.typicode.com/todosss/2")
    ).json()
  } catch (error) {}
}

function App() {
  const [apiResponse] = createResource(fetchUser)

  const [apiResponseData, setApiResponseData] = createSignal(undefined)
  const [apiError, setApiError] = createSignal(false)

  createEffect(() => {
    console.log("loading : ", apiResponse.loading)
    console.log("error : ", apiResponse?.error)
    if (!apiResponse.loading && !apiResponse.error && apiResponse()) {
      console.log("apiResponse : ", apiResponse())
      setApiResponseData(apiResponse())
    }
  })

  return (
    <ErrorBoundary fallback={<p>Something went wrong :-/</p>}>
      <Show when={apiResponseData()}>
        <div class='flex flex-col space-y-4'>
          <ul>
            <For each={new Array(200).fill(0)}>
              {(name) => {
                return (
                  <li>
                    <Video />
                    <Card />
                  </li>
                )
              }}
            </For>
          </ul>
        </div>
      </Show>
    </ErrorBoundary>
  )
}

export default App
