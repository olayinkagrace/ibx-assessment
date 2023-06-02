import "bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home, { loader as newsLoader } from "./screens/Home";
import Layout from "./components/Layout";
import NotFound from "./screens/NotFound";
import NewsDetails from "./screens/NewsDetails";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import ErrorMessage from "./components/ErrorMessage";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
    
        
        <Route path='/' element={<Layout />}>
          <Route
            index
            element={<Home />}
            loader={newsLoader}
            errorElement={<ErrorMessage />}
          />
          <Route path='news/:title' element={<NewsDetails />} />
          <Route path='login' element={<Login />} />
        <Route path='signup' element={<SignUp />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
