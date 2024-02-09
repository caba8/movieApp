import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import ImgMoviesContainer from "../components/ImgComponent/ImgMoviesContainer";
import ListMoviesContainer from "../components/ListMovies/ListMoviesContainer";
import TrendingMoviesContainer from "../components/TrendingMovies/TrendingMoviesContainer";
import { useFetch } from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import { movieList } from "../types/movieList";

const HomePage = () => {
  const { page } = useInfiniteScroll();
  const urlTrending = "https://api.themoviedb.org/3/trending/movie/day";
  const [listRestMovies, setRestMovies] = useState<movieList[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const { data, isLoading, getData } = useFetch(urlTrending, page);
  const navigate = useNavigate();

  const getNewMovies = async () => {
    const resultsMovies = await getData(page);
    setIsFetching(isLoading);
    if (resultsMovies) {
      setRestMovies((prev: movieList[]) => [...prev, ...resultsMovies?.results]);
    }
    return null;
  };

  const handleClickMovie = (id: number) => {
    navigate(`/detail/${id}`, { state: { id } });
  };

  useEffect(() => {
    if (!isLoading) {
      setIsFetching(isLoading);
      setTrendingMovies(data?.results?.slice(0, 5));
      setRestMovies(data?.results?.slice(5));
      return;
    }
  }, [isLoading]);

  useEffect(() => {
    if (page > 1) {
      getNewMovies();
    }
  }, [page]);

  return (
    <div className="main">
      <Header className="header" title="Movie App" />
      <div className="container">
        <TrendingMoviesContainer movies={trendingMovies} />
        <ListMoviesContainer title="More Like This">
          {listRestMovies &&
            listRestMovies?.map((movie, index) => (
              <ImgMoviesContainer
                classname={`imgList${index + 1}`}
                key={index}
                id={movie.id as number}
                title={movie.title as string}
                poster_path={movie.poster_path as string}
                genre_ids={movie.genre_ids as number[]}
                onClick={() => handleClickMovie(movie.id as number)}
              />
            ))}
          <div>{isFetching && <p>Loading...</p>}</div>
        </ListMoviesContainer>
      </div>
    </div>
  );
};

export default HomePage;
