import { objectResultGenre } from "../../types/genresResult";
import { posterContainerProps } from "../../types/posterContainerProps";
import posterContainerStyles from "./posterContainer.styles";

const PosterContainer = ({
  poster_path,
  title,
  release_date,
  genres,
}: posterContainerProps) => {
  const styles = posterContainerStyles();
  const imgUrl = `https://image.tmdb.org/t/p/original${poster_path}`;
  const year = new Date(release_date).getFullYear();
  const formatToTime = (min: number) => {
    const horas = Math.floor(min / 60);
    const minutos = Math.floor(min - horas * 60);
    return `${horas}h ${minutos}m`;
  };
  const yearDuration = `${year} - ${formatToTime(117)}`;
  return (
    <>
      <section
        className={styles.posterContainer}
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        <div className={styles.infoHeader}>
          <p className={styles.titleInfo}>{title}</p>
          <p className={styles.yearDurationInfo}>{yearDuration}</p>
          <div className={styles.genreList}>
            {genres.map((genre: any) => (
              <div className={styles.genre} key={genre.id}>
                {genre.name}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PosterContainer;
