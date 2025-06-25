import { Card, Image, Box } from "@chakra-ui/react";
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
    <Card.Root 
      borderRadius={12} 
      overflow="hidden"
      bg="white"
      _dark={{ bg: "gray.800", borderColor: "gray.600" }}
      shadow="sm"
      transition="all 0.3s ease"
      _hover={{ 
        transform: "translateY(-6px)", 
        shadow: "xl",
        borderColor: "blue.200"
      }}
      border="1px solid"
      borderColor="gray.200"
    >
      <Box position="relative">
        <Image 
          src={cropImageUrl(game.background_image) || noimg} 
          alt={game.name}
          aspectRatio="16/9"
          objectFit="cover"
          transition="transform 0.3s ease"
          _hover={{ transform: "scale(1.05)" }}
        />
        
        {/* 评分徽章悬浮在图片上 */}
        <Box position="absolute" top="2" right="2">
          <GameRate score={game.metacritic} />
        </Box>
      </Box>
      
      <Card.Body padding={5}>
        {/* 平台图标 */}
        <Box marginBottom={3}>
          <GamePlatforms platforms={game.platforms} />
        </Box>
        
        {/* 游戏标题 */}
        <Card.Title 
          fontSize="xl"
          fontWeight="bold"
          lineHeight="1.2"
          // noOfLines={2}
          color="gray.900"
          _dark={{ color: "white" }}
          _hover={{ color: "blue.600" }}
          transition="color 0.2s ease"
          cursor="pointer"
        >
          {game.name}
        </Card.Title>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
