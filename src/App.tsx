import Header from "./components/Header"
import Footer from "./components/Footer"
import LandingPage from "./pages/home/LandingPage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import TaskList from "./pages/tasks/TaskList"


function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/manage-tasks" element={<TaskList />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
