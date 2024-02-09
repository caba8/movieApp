import { movieList } from "./movieList";

export type posterContainerProps = {
  poster_path: string;
  title: string;
  release_date: string;
  genres: movieList[];
};
