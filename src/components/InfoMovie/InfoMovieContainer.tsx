import { infoMovieContainerProps } from "../../types/infoMovieContainerProps";
import infoMovieContainerStyles from "./infoMovieContainer.styles";

const InfoMovieContainer = ({
  overview,
  director,
  writer,
  cast,
}: infoMovieContainerProps) => {
  const sytles = infoMovieContainerStyles();
  return (
    <div className={sytles.bodyinfoDetail}>
      <p>{overview}</p>
      <p className={sytles.director}><b>Director:</b> {director}</p>
      <p className={sytles.writer}><b>Writer:</b> {writer}</p>
      <p className={sytles.cast}><b>Cast:</b> {cast}</p>
    </div>
  );
};

export default InfoMovieContainer;
