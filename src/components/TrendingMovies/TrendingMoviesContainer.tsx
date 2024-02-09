import { trendingMoviesContainerProps } from "../../types/trendingMoviesContainerProps";
import ImgMoviesContainer from "../ImgComponent/ImgMoviesContainer";
import { useNavigate } from "react-router-dom";
import trendingMoviesContainerStyles from "./trendingMoviesContainer.styles";

const TrendingMoviesContainer = ({ movies }: trendingMoviesContainerProps) => {
  const styles = trendingMoviesContainerStyles();
  const navigate = useNavigate();
  const handleClickMovie = (id: number): void => {
    navigate(`/detail/${id}`, { state: { id } });
  };
  return (
    <div className={styles.trendingMoviesContainer}>
      {movies?.map((movie: any, index: number) => (
        <ImgMoviesContainer
          classname={`img${index + 1}`}
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster_path={movie.backdrop_path}
          genre_ids={movie.genre_ids}
          onClick={() => handleClickMovie(movie.id)}
        />
      ))}
    </div>
  );
};

export default TrendingMoviesContainer;
