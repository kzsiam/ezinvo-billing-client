import { RouterProvider } from "react-router"
import { router } from "./Router/Routes/Routes"

function App() {



  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
