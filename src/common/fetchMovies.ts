export const fetchMoviesInfo = async (url: string) => {
  try {
    const response: Response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      // eslint-disable-next-line no-throw-literal
      throw "No data";
    }

    const getData = await response.json();
    return getData;
  } catch (error) {
    console.log(error);
  }
};
