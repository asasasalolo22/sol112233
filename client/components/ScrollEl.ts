import { Flex } from "@chakra-ui/react";
import styled from "styled-components";

export const ScrollEl = styled(Flex)`
  scrollbar-width: thin;
  scrollbar-color: $gray--lighter rgba(0, 0, 0, 0);
  &::-webkit-scrollbar-track {
    visibility: hidden;
  }

  &::-webkit-scrollbar {
    visibility: hidden;
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    visibility: hidden;
  }
  &:hover {
    &::-webkit-scrollbar-track {
      visibility: visible;
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      border-radius: 10px;
      background-color: rgba(0, 0, 0, 0);
    }

    &::-webkit-scrollbar {
      visibility: visible;
      background-color: rgba(0, 0, 0, 0);
    }

    &::-webkit-scrollbar-thumb {
      visibility: visible;
      border-radius: 10px;
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: #555;
    }
  }
`;
