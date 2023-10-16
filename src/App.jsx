import HomePage from './pages/HomePage.jsx';
import DetailPage from './pages/DetailPage.jsx';
import TopBar from './components/TopBar.jsx';
import Footer from './components/Footer.jsx';



import {
  BrowserRouter,
  Routes,
  Route,
  Outlet

} from "react-router-dom";






const Layout = () => {
  return (
    <>
      <TopBar />
      <main>
        <Outlet/>
      </main>
      <Footer />
    </>
  )
}

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
    </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
