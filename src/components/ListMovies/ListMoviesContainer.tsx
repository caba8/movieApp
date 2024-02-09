import { listMoviesContainerProps } from "../../types/listMoviesContainerProps";
import listMoviesContainerStyles from "./listMovies.styles";

const ListMoviesContainer = ({ title, children }: listMoviesContainerProps) => {
  const styles = listMoviesContainerStyles();
  return (
    <div className={styles.listMoviesContainer}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default ListMoviesContainer;
