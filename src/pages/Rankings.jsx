import React from "react";
import { Box, Heading, VStack, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import Navigation from "../components/Navigation.jsx";

const Rankings = () => {
  return (
    <Box textAlign="center" fontSize="xl">
      <Navigation />
      <VStack spacing={8} p={4}>
        <Heading as="h1" size="2xl" mb={6}>
          Classements des Joueurs et Clans
        </Heading>
        <RankingTable title="Top 10 Joueurs" />
        <RankingTable title="Top 10 Clans" />
      </VStack>
    </Box>
  );
};

const RankingTable = ({ title }) => {
  return (
    <Box width="full" overflowX="auto">
      <Heading as="h2" size="lg" mb={4}>
        {title}
      </Heading>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Position</Th>
            <Th>Nom</Th>
            <Th>Points</Th>
          </Tr>
        </Thead>
        <Tbody>{}</Tbody>
      </Table>
    </Box>
  );
};

export default Rankings;
