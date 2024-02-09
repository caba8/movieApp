import { makeStyles } from "@mui/styles";

const trendingMoviesContainerStyles = makeStyles(
  (Theme) => ({
    trendingMoviesContainer: {
      display: "grid",
      grid: '"img1 img1 img2 img3" 1fr "img4 img4 img5 img5" 1fr / 1fr 1fr 1fr 1fr',
      gap: "8px",
      gridAutoFlow: "row dense",
      "& section": {
        "&.img1": {
          gridArea: "img1",
        },
        "&.img2": {
          gridArea: "img2",
        },
        "&.img3": {
          gridArea: "img3",
        },
        "&.img4": {
          gridArea: "img4",
        },
        "&.img5": {
          gridArea: "img5",
        },
      },
      "@media screen and (max-width: 961px)": {
        display: "flex",
        flexDirection: "column",
        width: "100%",
      },
    },
  }),
  { name: "trendingMovies_container" },
);

export default trendingMoviesContainerStyles;
