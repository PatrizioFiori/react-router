import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./assets/pages/HomePage";
import AboutPage from "./assets/pages/AboutPage";
import ProdutcsPage from "./assets/pages/ProdutcsPage";
import DefaultLayout from "./assets/layouts/DefaultLayout";
import InfoPage from "./assets/pages/InfoPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/" Component={HomePage} />
          <Route path="/about" Component={AboutPage} />
          <Route path="/products" Component={ProdutcsPage} />
          <Route path="/info" Component={InfoPage} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App