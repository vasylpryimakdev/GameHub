import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const { data: platform } = usePlatforms();
  const selectedGenre = genres?.results.find((g) => g.id === gameQuery.genreId);
  const selectendPlatform = platform?.results.find(
    (g) => g.id === gameQuery.platformId,
  );
  const heading = `${selectedGenre?.name || ""} ${selectendPlatform?.name || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
