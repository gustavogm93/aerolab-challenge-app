import React from "react";
import {Flex, Circle} from "@chakra-ui/react";
import {ArrowRightIcon, ArrowLeftIcon} from "@chakra-ui/icons";

import {usePage, usePagination} from "~/app/product/hooks";

const Pagination: React.FC = () => {
  const setPage = usePage();
  const {currentPage, pages} = usePagination();

  return (
    <Flex direction="row" float="right" spacing={6}>
      {currentPage > 1 && (
        <Circle
          _hover={{bg: "gray.200"}}
          bg="white"
          color="white"
          size="40px"
          onClick={() => setPage(currentPage - 1)}
        >
          <ArrowLeftIcon color="gray.500" height={3} marginX={1} width={10} />
        </Circle>
      )}
      {currentPage < pages && (
        <Circle
          _hover={{bg: "gray.200"}}
          bg="white"
          color="white"
          size="40px"
          onClick={() => setPage(currentPage + 1)}
        >
          <ArrowRightIcon color="gray.500" height={3} marginX={1} width={10} />
        </Circle>
      )}
    </Flex>
  );
};

export default Pagination;
