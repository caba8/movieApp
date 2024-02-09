import { makeStyles } from "@mui/styles";

const posterContainerStyles = makeStyles(
  (Theme) => ({
    posterContainer: {
      height: "300px",
      position: "relative",
      backgroundPosition: "50% 15%",
      backgroundSize: "60%",
      display: "grid",
      grid: '". infoContent ." 1fr / 0.2fr 1fr 0.2fr',
      gap: "8px",
      "@media screen and (max-width: 961px)": {
        display: "flex",
        position: "relative",
        backgroundSize: "cover",
        grid: "none",
        backgroundPosition: "inherit",
        paddingInlineStart: "15px",
      },
    },
    infoHeader: {
      gridArea: "infoContent",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "flex-end",
      color: "#FFFFFF",
      marginBlockEnd: "15px",
    },
    titleInfo: {
      fontSize: "36px",
      fontWeight: "500",
      lineHeight: "43.2px",
      margin: 0,
      textShadow: "0 0 6px #000, 0 0 8px #000",
    },
    yearDurationInfo: {
      margin: 0,
      textShadow: "0 0 6px #000, 0 0 8px #000",
    },
    genre: {
      backgroundColor: "#D9D9D9",
      color: "#4D4D4D",
      padding: "5px 20px",
      borderColor: "#4D4D4D",
      borderStyle: "solid",
      borderWidth: "3px",
      borderRadius: "100px",
      marginBlockStart: "15px",
    },
    genreList: {
      display: "flex",
      columnGap: "10px",
    },
  }),
  { name: "posterMovie_container" },
);

export default posterContainerStyles;
