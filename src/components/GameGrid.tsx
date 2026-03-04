import { Flex, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import useGames from "../hooks/useGames";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const GameGrid = () => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error.message}</Text>;

  if (data?.pages.length === 0 && !isLoading) {
    return (
      <Flex
        direction="column"
        justify="center"
        align="center"
        minHeight="60vh"
        width="100%"
      >
        <Heading as="h2" size="2xl" textAlign="center" color="gray.500">
          😔 Oops! No games found with these parameters.
        </Heading>
      </Flex>
    );
  }

  const fetchedGamesCount =
    data?.pages.reduce((acc, page) => acc + page.results.length, 0) || 0;

  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<Spinner />}
    >
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={6}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}

        {data?.pages.map((page, i) => (
          <React.Fragment key={i}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default GameGrid;
