import { useCartContext } from "@context/cart-context"
import { For, createEffect } from "solid-js"

const Cart = (props) => {
  const { items } = useCartContext()

  function enterpictureinpicture() {
    if ("pictureInPictureEnabled" in document) {
      pipButton.classList.remove("hidden")
      pipButton.disabled = false

      pipButton.addEventListener("click", () => {
        if (document.pictureInPictureElement) {
          document
            .exitPictureInPicture()
            .then(() => {
              video.classList.remove("hidden")
            })
            .catch((error) => {
              // Error handling
            })
        } else {
          video
            .requestPictureInPicture()
            .then(() => {
              video.classList.add("hidden")
            })
            .catch((error) => {
              // Error handling
            })
        }
      })
    }
    video.addEventListener("enterpictureinpicture", () => {
      pipButton.textContent = "Exit Picture-in-Picture mode"
    })

    video.addEventListener("leavepictureinpicture", () => {
      pipButton.textContent = "Enter Picture-in-Picture mode"
    })
  }

  return (
    <div class='h-screen w-screen'>
      <p> Hello World </p>
      <For each={items}>
        {(item) => (
          <p class='my-3'>
            {item.title} - Rs{item.price} x {item.quantity}
          </p>
        )}
      </For>
      <video
        id='video'
        controls
        autoPlay
        src='https://rawcdn.githack.com/Freshman-tech/custom-html5-video/911e6fbfc39d670cb26e94d6f3013b9426f4a679/video.mp4'
      ></video>
      <button
        id='pipButton'
        class='btn btn-lg btn-primary'
        onClick={() => enterpictureinpicture()}
      >
        Enter Picture-in-Picture mode
      </button>
    </div>
  )
}

export default Cart
