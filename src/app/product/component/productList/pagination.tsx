import React from "react";
import {Image, Flex} from "@chakra-ui/react";

import arrow_left from "~/assets/icons/arrow-left.svg";
import arrow_right from "~/assets/icons/arrow-right.svg";
import {usePage, usePagination} from "~/app/product/hooks";

const Pagination: React.FC = () => {
  const setPage = usePage();
  const {currentPage, pages} = usePagination();

  return (
    <Flex direction="row" float="right" spacing={6}>
      {currentPage > 1 && (
        <Image
          height={10}
          marginX={1}
          src={arrow_left}
          width={10}
          onClick={() => setPage(currentPage - 1)}
        />
      )}
      {currentPage < pages && (
        <Image
          height={10}
          marginX={1}
          src={arrow_right}
          width={10}
          onClick={() => setPage(currentPage + 1)}
        />
      )}
    </Flex>
  );
};

export default Pagination;
