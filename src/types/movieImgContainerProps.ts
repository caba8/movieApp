export type movieImgContainerProps = {
  id: number;
  title: string;
  genre_ids: number[];
  poster_path: string;
  classname: string;
  onClick?: () => void;
};
