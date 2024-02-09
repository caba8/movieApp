import { makeStyles } from "@mui/styles";

const imgMoviesContainerStyles = makeStyles(
  (Theme) => ({
    movieImgSection: {
      height: "300px",
      position: "relative",
      "& img": {
        objectFit: "fill",
        width: "100%",
        height: "100%",
      },
    },
    infoMovie: {
      float: "left",
      position: "absolute",
      bottom: "0",
      color: "#FFFFFF",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      backgroundColor: "#FFFFFF10",
      backdropFilter: "blur(10px)",
      width: "100%",
      rowGap: "10px",
      paddingBlock: "10px",
    },
    genreMovie: {
      margin: "0",
      paddingInlineStart: "15px",
      fontSize: "14px",
    },
    movieName: {
      margin: "0",
      paddingInlineStart: "12px",
      fontSize: "28px",
      textAlign: "left",
    },
    imgClick: {
      cursor: "pointer",
    },
  }),
  { name: "imgMovies_container" },
);

export default imgMoviesContainerStyles;
