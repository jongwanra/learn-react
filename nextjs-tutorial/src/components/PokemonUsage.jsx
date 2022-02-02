import { useGetPokemonByNameQuery } from "../../redux/reducers/pokemon";

export const PokemonUsage = () => {
  const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");
  console.log("data:", data);
  console.log("error:", error);
  console.log("isLoading:", isLoading);
  return (
    <div>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <> Loading...</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </>
      ) : null}
    </div>
  );
};
