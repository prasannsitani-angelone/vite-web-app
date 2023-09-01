import { createStore } from "solid-js/store"

// Create a store for the toast message state
const [toastState, setToastState] = createStore({
  visible: false,
  message: ""
})

// Function to show the toast message
export function showToast(message) {
  setToastState({ visible: true, message })

  // Automatically hide the toast after a few seconds (e.g., 5 seconds)
  setTimeout(() => {
    hideToast()
  }, 5000)
}

// Function to hide the toast message
export function hideToast() {
  setToastState({ visible: false, message: "" })
}

// Function to get the current toast state
export function getToastState() {
  return toastState
}
