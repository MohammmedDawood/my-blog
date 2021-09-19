import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticlePage from "./pages/ArticlePage";
import ArticleListPage from "./pages/ArticleListPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="App">
        <Routes>
          <div id="page-body">
            <Route path="/" element={<HomePage />} exact />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/articles-list" element={<ArticleListPage />} />
            <Route path="/article/:name" element={<ArticlePage />} />
            <Route path="/*" element={<NotFoundPage />} />
          </div>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
