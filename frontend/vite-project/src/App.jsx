import { AddPassenger } from "./pages/AddPassenger"
import { Routes, Route } from "react-router-dom"
import { ViewPassenger } from "./pages/ViewPassenger"
function App() {

  return (
    <>
      <Routes>
        <Route  path="/" element={<AddPassenger />} />
        <Route path="/view-passengers" element={<ViewPassenger/>}/>
      </Routes>
    </>
  )
}

export default App
