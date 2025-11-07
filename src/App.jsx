import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Homepage from "./Pages/HomePage/HomePage";
import MoviesPage from "./Pages/MoviesPage/MoviesPage";
import MovieDetailPage from "./Pages/MovieDetailPage/MovieDetailPage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import SeriesPage from "./Pages/SeriesPage/SeriesPage";
import SeriesDetailPage from "./Pages/SeriesDetailPage/SeriesDetailPage";

//홈페이지   /
//전체페이지(서치)  /movies
//디테일페이지 /movies/:id

function App() {
  return (
    <div className="web-bg">
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Homepage />} />

          <Route path="movies">
            <Route index element={<MoviesPage />} />
            <Route path=":id" element={<MovieDetailPage />} />
          </Route>

          <Route path="series">
            <Route index element={<SeriesPage />} />
            <Route path=":id" element={<SeriesDetailPage />} />
          </Route>

          {/* 애니메이션?? */}
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
