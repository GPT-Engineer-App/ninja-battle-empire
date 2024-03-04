import React from "react";
import { Flex, Link, Spacer } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Flex as="nav" p={4} bg="gray.100" align="center">
      <Link as={RouterLink} to="/" px={2}>
        Accueil
      </Link>
      <Spacer />
      <Link as={RouterLink} to="/rankings" px={2}>
        Classements
      </Link>
    </Flex>
  );
};

export default Navigation;
