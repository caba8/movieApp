import React, { useContext } from "react";
import { GenreContext } from "../../contexts/GenreContext";
import { movieImgContainerProps } from "../../types/movieImgContainerProps";
import imgMoviesContainerStyles from "./imgMoviesContainer.styles";
import { objectResultGenre } from "../../types/genresResult";

const ImgMoviesContainer = ({
  id,
  title,
  poster_path,
  genre_ids,
  classname,
  onClick,
}: movieImgContainerProps) => {
  const genreData: objectResultGenre[] | null= useContext(GenreContext);
  const genres = genreData?.reduce((data: string[], currentValue: objectResultGenre) => {
    if (genre_ids.includes(Number(currentValue.id))) {
      data.push(currentValue.name.toString());
    }
    return data;
  }, []);
  const styles = imgMoviesContainerStyles();
  const imgUrl = `https://image.tmdb.org/t/p/original${poster_path}`;

  const classNameClick = onClick ? styles.imgClick : "";

  return (
    <section
      className={`${styles.movieImgSection} ${classname} ${classNameClick}`}
      onClick={onClick}
    >
      <img src={imgUrl} alt={title} />
      <div className={styles.infoMovie}>
        <p className={styles.genreMovie}>{genres?.shift()}</p>
        <p className={styles.movieName}>{title}</p>
      </div>
    </section>
  );
};

export default ImgMoviesContainer;
