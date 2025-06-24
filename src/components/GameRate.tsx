import { Badge } from "@chakra-ui/react";

interface GameRateProps {
  score: number;
}

const GameRate = ({ score }: GameRateProps) => {
  if (score === 0 || score === null) return null;
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "red";
  return (
    <Badge
      variant="solid"
      colorPalette={color}
      fontSize="14px"
      paddingX={2}
      borderRadius="4px"
    >
      {score}
    </Badge>
  );
};

export default GameRate;
