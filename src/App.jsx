import "bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home, { loader as newsLoader } from "./screens/Home";
import Layout from "./components/Layout";
import Features from "./screens/Features";
import NotFound from "./screens/NotFound";
import NewsDetails from "./screens/NewsDetails";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import ErrorMessage from "./components/ErrorMessage";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/' element={<Layout />}>
          <Route
            index
            element={<Home />}
            loader={newsLoader}
            errorElement={<ErrorMessage />}
          />
          <Route path='features' element={<Features />} />
          <Route path=':title' element={<NewsDetails />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
