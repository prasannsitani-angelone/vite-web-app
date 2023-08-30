import { For, createSignal } from "solid-js"
import Home from "./home"
import BottomTab from "./bottom-tab"
import Cart from "./cart"
import Product from "./product"

const MainApp = (props) => {
  const [currentTab, setCurrentTab] = createSignal(0)

  const tabs = [
    {
      id: "home",
      title: "Home"
    },
    {
      id: "info",
      title: "Info"
    },
    {
      id: "stats",
      title: "Stats"
    }
  ]

  const renderScreen = (id) => {
    switch (id) {
      case "home":
        return <Home />
      case "info":
        return <Cart />
      case "stats":
        return <Product />
    }
  }

  return (
    <div className='flex'>
      {renderScreen(tabs[currentTab()].id)}
      <BottomTab
        tabs={tabs}
        currentTab={() => currentTab()}
        setCurrentTab={setCurrentTab}
      />
    </div>
  )
}

export default MainApp
