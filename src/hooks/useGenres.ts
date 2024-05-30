import useDAta from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => useDAta<Genre>("/genres");

export default useGenres;
