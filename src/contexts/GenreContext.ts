import { createContext } from "react";
import { objectResultGenre } from "../types/genresResult";

export const GenreContext = createContext<objectResultGenre[] | null>([]);
