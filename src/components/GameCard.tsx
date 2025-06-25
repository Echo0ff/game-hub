import { Card, Image } from "@chakra-ui/react";
import type { Game } from "../hooks/useGameList";
import GamePlatforms from "./GamePlatforms";
import GameRate from "./GameRate";
import cropImageUrl from "../services/cropimg";
import noimg from "../assets/Image Placeholder/no-image-placeholder-6f3882e0.webp";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card.Root borderRadius={10} overflow="hidden">
      <Image src={cropImageUrl(game.background_image) || noimg} alt={game.name} />
      <Card.Header>
        <Card.Title fontSize="xl" fontWeight="bold">
          {game.name}
        </Card.Title>
      </Card.Header>
      <Card.Body display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" gap={2}>
        <GamePlatforms platforms={game.platforms} />
        <GameRate score={game.metacritic} />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
