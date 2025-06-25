import { Heading } from '@chakra-ui/react'
import type { Genre } from '../hooks/useGenres';
import type { FilterPlatform } from '../hooks/usePlatform';

interface GameHeadingProps {
  genre: Genre | null;
  platform: FilterPlatform | null;
}

const GameHeading = ({ genre, platform }: GameHeadingProps) => {
  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;
  return (
    <Heading as="h1" fontSize="4xl" mb={2} my={4}>{heading}</Heading>
  )
}

export default GameHeading