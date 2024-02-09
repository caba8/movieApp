import { createBrowserRouter, LoaderFunctionArgs } from "react-router-dom";
import { fetchMoviesInfo } from "../common/fetchMovies";
import DetailPage from "../pages/DetailPage";
import HomePage from "../pages/HomePage";
import { infoMovie } from "../types/infoMovie";

const apiKey = process.env.REACT_APP_API_KEY;
const detailMovie = (id: any) => {
  let moviesInfo = null;
  if (id) {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
    moviesInfo = fetchMoviesInfo(url);
  }
  return moviesInfo;
};

const castMovie = (id: any) => {
  let moviesCast = null;
  if (id) {
    const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`;
    moviesCast = fetchMoviesInfo(url);
  }
  return moviesCast;
};

export const routerBrowser = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/detail/:id",
    element: <DetailPage />,
    loader: async({params}: LoaderFunctionArgs) => {
      const { id } = params;
      let data: infoMovie = {} as infoMovie;
      await Promise.all([detailMovie(id), castMovie(id)]).then((values)=>{
        data = {
          detailMovie: values[0],
          castInfo: values[1]
        };
      });

      return data;
    },
  },
]);
