import "bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";
import Home from "./screens/Home";
import Layout from "./components/Layout";
import Features from "./screens/Features";
import NotFound from "./screens/NotFound";
import NewsDetails from "./screens/NewsDetails";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="features" element={<Features />} />
        <Route path=":title" element={<NewsDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  )
  return (
  <RouterProvider router={router} />
  );
}

export default App;
