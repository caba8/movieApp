import { useEffect, useState } from "react";

export const useInfiniteScroll = () => {
  const [page, setPage] = useState(1);
  const handleScroll = () => {
    const totalHeight = document.documentElement.scrollHeight;
    const innerheight = window.innerHeight;
    const scrollTop = document.documentElement.scrollTop;

    try {
      if (innerheight + scrollTop + 1 >= totalHeight) {
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return {
    page,
  };
};
