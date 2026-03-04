import { Heading } from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const { platformId, genreId } = useGameQueryStore((s) => ({
    platformId: s.gameQuery.platformId,
    genreId: s.gameQuery.genreId,
  }));

  const selectedPlatform = usePlatform(platformId);
  const selectedGenre = useGenre(genreId);

  const heading = `${selectedGenre?.name || ""} ${selectedPlatform?.name || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
