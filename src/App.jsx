import HomePage from './pages/HomePage.jsx';
import DetailPage from './pages/DetailPage.jsx';
import TopBar from './components/TopBar.jsx';
import Footer from './components/Footer.jsx';



import {
  createBrowserRouter,

  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:<HomePage/> ,
  },
  {
    path: "/detail/:id",
    element: <DetailPage/>,
  },
]);
const App = () => {
  return (
    <>
    <TopBar/>
    <RouterProvider router={router}  />
   
    <Footer/>
    </>
  )
}

export default App