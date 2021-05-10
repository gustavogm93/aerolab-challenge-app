import React from "react";
import {Button, Stack, Text} from "@chakra-ui/react";

import {Filter} from "./types";

interface Props {
  active: Filter;
  onChange: (filter: Filter) => void;
}

const _Filters: Filter[] = [Filter.MostRecent, Filter.LowestPrice, Filter.HighestPrice];

const Filters: React.FC<Props> = ({onChange, active}) => {
  return (
    <Stack alignItems="center" direction="row" spacing={6}>
      <Text color="gray.500">Sort By:</Text>
      <Stack direction="row" spacing={4}>
        {_Filters.map((filter) => (
          <Button
            key={filter}
            _active={{bgGradient: "linear(to-l, #00d7ff,#0dd1fa)"}}
            _focus={{bgGradient: "linear(to-l, #00d7ff,#0dd1fa)"}}
            _hover={{bgGradient: "linear(to-l, #00d7ff,#0dd1fa)", color: "white"}}
            bgGradient={filter === active ? "linear(to-l, #00d7ff, #0dd1fa)" : "gray:100"}
            borderRadius={9999}
            color={filter === active ? "white" : "gray:600"}
            fontWeight="500"
            paddingX={6}
            paddingY={2}
            onClick={() => onChange(filter)}
          >
            {filter}
          </Button>
        ))}
      </Stack>
    </Stack>
  );
};

export default Filters;
