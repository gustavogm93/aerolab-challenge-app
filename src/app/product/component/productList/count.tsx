import React from "react";
import {Text} from "@chakra-ui/react";

import {usePagination} from "../../hooks";

const Count: React.FC = () => {
  const {total, limit, currentPage, pages} = usePagination();

  function getCurrentLimit() {
    if (currentPage === pages) return total;

    return limit * currentPage;
  }

  return (
    <Text color="gray.500">
      {getCurrentLimit()} of {total} products
    </Text>
  );
};

export default Count;
