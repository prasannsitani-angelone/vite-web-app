import { For, createSignal } from "solid-js"
import Home from "./home"

const BottomTab = (props) => {
  const { tabs, currentTab, setCurrentTab } = props

  const renderIcon = (id) => {
    switch (id) {
      case "home":
        return (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
            />
          </svg>
        )
      case "info":
        return (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
        )
      case "stats":
        return (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
            />
          </svg>
        )
    }
  }

  const renderScreen = (id) => {
    switch (id) {
      case "home":
        return <Home />
    }
  }

  return (
    <>
      <div className='btm-nav'>
        <For each={tabs}>
          {(tab, index) => (
            <button
              className='border-t-orange-100 border-x-0 border-b-0 border-r-0 rounded-none focus:outline-none focus-visible:outline-none'
              classList={{ active: index() === currentTab() }}
              onClick={() => setCurrentTab(index())}
            >
              {renderIcon(tab.id)}
              <p className='text-xs'>{tab.title}</p>
            </button>
          )}
        </For>
      </div>
    </>
  )
}

export default BottomTab
