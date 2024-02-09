import { makeStyles } from "@mui/styles";

const infoMovieContainerStyles = makeStyles(
  (Theme) => ({
    bodyinfoDetail: {
      fontSize: "20px",
      lineHeight: "24px",
      textAlign: "left",
      "@media screen and (max-width: 961px)": {
        paddingInline: "15px",
      },
    },
    director: {
      fontSize: "14px",
      lineHeight: "16.8px",
    },
    writer: {
      fontSize: "14px",
      lineHeight: "16.8px",
    },
    cast: {
      fontSize: "14px",
      lineHeight: "16.8px",
    },
  }),
  {
    name: "infoMovie_container",
  },
);

export default infoMovieContainerStyles;
