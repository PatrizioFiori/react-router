import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./assets/pages/HomePage";
import AboutPage from "./assets/pages/AboutPage";
import DefaultLayout from "./assets/layouts/DefaultLayout";
import ContactsPage from "./assets/pages/ContactsPage";
import Error404Page from "./assets/pages/Error404Page";
import PostListaPage from "./assets/pages/PostListPage";
import PostCreatePage from "./assets/pages/PostCreatePage";
import PostDetailPage from "./assets/pages/PostDetailPage";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/" Component={HomePage} />
          <Route path="/about" Component={AboutPage} />
          <Route path="/contatti" Component={ContactsPage} />
          <Route path="/elenco-post" Component={PostListaPage} />
          <Route path="/nuovo-post" Component={PostCreatePage} />
          <Route path="/dettaglio-post/:id" Component={PostDetailPage} />
          <Route path="*" Component={Error404Page} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App