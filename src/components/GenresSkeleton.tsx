import { HStack, Skeleton } from "@chakra-ui/react";

const GenresSkeleton = () => {
  return (
    <HStack>
      <Skeleton width="32px" height="32px" borderRadius={8} />
      <Skeleton width="90px" height="15px" />
    </HStack>
  );
};

export default GenresSkeleton;
