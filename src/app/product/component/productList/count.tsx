import React from "react";
import { Text } from "@chakra-ui/react";
import { usePagination } from "../../hooks";


const Count: React.FC = () => {
  const {total, limit, currentPage} = usePagination()

  return (
    <Text color="gray.500" fontWeight="bold">
      {limit * currentPage} of {total} products
    </Text>
  );
};

export default Count;
