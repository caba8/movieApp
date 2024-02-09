import { makeStyles } from "@mui/styles";

const listMoviesContainerStyles = makeStyles(
  (Theme) => ({
    listMoviesContainer: {
      display: "flex",
      flexDirection: "column",
      width: "40%",
      justifyContent: "center",
      rowGap: "15px",
      "& section": {
        height: "500px",
      },
      "@media screen and (max-width: 961px)": {
        width: "60%",
      },
    },
  }),
  { name: "listMovies_container" },
);

export default listMoviesContainerStyles;
