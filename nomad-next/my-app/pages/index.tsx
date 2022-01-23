import type { NextPage } from "next";
import { useEffect, useState } from "react";
const Home: NextPage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async () => {
      const { results } = await (
        await fetch(`https://api.themoviedb.org/3/movie/popular?`)
      ).json();
    };
  }, []);
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

export default Home;
