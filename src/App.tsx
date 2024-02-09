import './App.css';
import { useFetch } from "./hooks/useFetch";
import { GenreContext } from "./contexts/GenreContext";
import { RouterProvider } from "react-router-dom";
import { routerBrowser } from './routes/routerBrowser';

function App() {
  const urlGenre = "https://api.themoviedb.org/3/genre/movie/list";
  const { data } = useFetch(urlGenre);
  return (
    <div className="App">
      <GenreContext.Provider value={data?.genres ?? null}>
        <RouterProvider router={routerBrowser} />
      </GenreContext.Provider>
    </div>
  );
}

export default App;
