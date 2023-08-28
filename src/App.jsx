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
    const response = await fetch("http://localhost:3001/")
    // const response = await fetch("https://jsonplaceholder.typicode.com/todos")
    return response.json()
  } catch (error) {}
}

function App() {
  const [apiResponse] = createResource(fetchUser)

  const [apiResponseData, setApiResponseData] = createSignal(undefined)
  const [apiError, setApiError] = createSignal(false)

  createEffect(() => {
    if (!apiResponse.loading && !apiResponse.error && apiResponse()) {
      setApiResponseData(apiResponse())
    }
  })

  return (
    <ErrorBoundary fallback={<p>Something went wrong :-/</p>}>
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
    </ErrorBoundary>
  )
}

export default App
