import "./App.css"
import { ErrorBoundary } from "solid-js"

import { A, Route, Routes } from "@solidjs/router"
import MainApp from "./pages/main-app"
import { NavBar } from "./components"
import { getToastState, hideToast } from "./store/toast"
import { CrossIcon, HeartIcon } from "./assets"

function App() {
  const toast = getToastState()

  return (
    <ErrorBoundary fallback={<p>Something went wrong :-/</p>}>
      <div className='drawer'>
        <input id='app-drawer' type='checkbox' className='drawer-toggle' />
        <div className='drawer-content'>
          {/* <NavBar /> */}
          <Routes>
            <Route path='/' component={MainApp} />
          </Routes>
        </div>
        <div className='drawer-side'>
          <label htmlFor='app-drawer' className='drawer-overlay'></label>
          <ul className='menu p-4 w-80 min-h-full bg-base-200 text-base-content'>
            {/* Sidebar content here */}
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
      {toast.visible && (
        <div class='flex p-2 items-center justify-between w-screen fixed bottom-4 bg-blue-500 bg-opacity-80 text-white text-left rounded-lg shadow-lg'>
          <span>{toast.message}</span>
          <div className='flex justify-end' onClick={() => hideToast()}>
            <CrossIcon />
          </div>
        </div>
      )}
    </ErrorBoundary>
  )
}

export default App
