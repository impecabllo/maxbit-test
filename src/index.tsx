import React from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

import { App } from "./pages/App"

const renderApp = () => {
  const target = document.getElementById("root")

  if (!target) return

  const root = createRoot(target)

  try {
    root.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
  } catch (err) {
    const div = document.createElement("div")
    div.innerHTML = "Something went wrong."
    target.appendChild(div)
  }
}

renderApp()
