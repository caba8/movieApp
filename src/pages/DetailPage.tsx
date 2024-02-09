import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import ImgMoviesContainer from "../components/ImgComponent/ImgMoviesContainer";
import InfoMovieContainer from "../components/InfoMovie/InfoMovieContainer";
import ListMoviesContainer from "../components/ListMovies/ListMoviesContainer";
import PosterContainer from "../components/PosterMovie/PosterContainer";
import { useFetch } from "../hooks/useFetch";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import { castData, crewData, infoMovie } from "../types/infoMovie";
import { movieList } from "../types/movieList";

const DetailPage = () => {
  const [recomendationMovies, setRecomendationMovies] = useState<movieList[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const { page } = useInfiniteScroll();
  const { id } = useParams();
  const movieDetail: infoMovie = useLoaderData() as infoMovie;
  const crews = movieDetail.castInfo.crew as Array<crewData>;
  const casts = movieDetail.castInfo.cast as Array<castData>;
  const director = crews?.find((crew: crewData) => crew.job === "Director");
  const writer = crews?.find((crew: crewData) => crew.job === "Writer");
  const detailMovie = movieDetail.detailMovie;
  
  const castNames = casts?.filter((cast: castData) => cast.known_for_department === "Acting")
    .map((cast: castData) => cast.name)
    .join(", ");
  const urlRecommendations = `https://api.themoviedb.org/3/movie/${id}/recommendations`;
  const { data, isLoading, getData } = useFetch(urlRecommendations);
  const getNewMovies = async () => {
    const resultsMovies = await getData(page);
    setIsFetching(isLoading);
    if (resultsMovies) {
      setRecomendationMovies((prev: movieList[]) => [...prev, ...resultsMovies?.results]);
    }
    return null;
  };

  const setInformationMovies = () => {
    setIsFetching(isLoading);
    setRecomendationMovies(data?.results);
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (!isLoading) {
        setInformationMovies();
      return;
    }
  }, [isLoading]);

  useEffect(() => {
    if (page > 1) {
      getNewMovies();
    }
  }, [page]);

  return (
    <div className="detailPage">
      <Header className="header" title="Movie App" />
      <PosterContainer
        poster_path={detailMovie.backdrop_path as string}
        title={detailMovie.title as string}
        release_date={detailMovie.release_date as string}
        genres={detailMovie.genres as movieList[]}
      />
      <section className="sectionBody">
        <div className="bodyInfo">
          <InfoMovieContainer
            overview={detailMovie.overview as string}
            director={director?.original_name ?? ''}
            writer={writer?.original_name ?? ''}
            cast={castNames}
          />
          <div className="recomendationMovies">
            <ListMoviesContainer title="Recommendations">
              {recomendationMovies?.map((movie: movieList, index: number) => (
                <ImgMoviesContainer
                  classname={`imgList${index + 1}`}
                  key={index}
                  id={movie.id as number}
                  title={movie.title as string}
                  poster_path={movie.poster_path as string}
                  genre_ids={movie.genre_ids as number[]}
                />
              ))}
              <div>{isFetching && <p>Loading...</p>}</div>
            </ListMoviesContainer>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailPage;
