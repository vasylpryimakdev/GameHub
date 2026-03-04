import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CricitScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";
import Game from "../entities/Game";

interface GameProps {
  game: Game;
}

const GameCard = ({ game }: GameProps) => {
  return (
    <Link to={`/games/${game.slug}`}>
      <Card borderRadius={10} overflow={"hidden"}>
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
          <HStack justifyContent="space-between" marginBottom={3}>
            <PlatformIconList
              platforms={game.parent_platforms?.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading fontSize="2xl">
            {game.name}
            <Emoji rating={game.rating_top} />
          </Heading>
        </CardBody>
      </Card>
    </Link>
  );
};

export default GameCard;
