import { Skeleton, Card, SkeletonText } from "@chakra-ui/react";

const CardSkeleton = () => {
  return (
    <Card.Root>
      <Skeleton height="200px" />
      <Card.Body>
        <SkeletonText />
      </Card.Body>
    </Card.Root>
  )
}

export default CardSkeleton