import React from "react";
import { ChakraProvider, Box, VStack, Grid, theme, Text, Button, Image, Heading, Flex, Spacer, useColorModeValue } from "@chakra-ui/react";
import Navigation from "../components/Navigation.jsx";
import { FaUserNinja, FaFortAwesome, FaShieldAlt, FaPlusCircle } from "react-icons/fa";

const Index = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Navigation />
        <Grid minH="100vh" p={3}>
          <VStack spacing={8}>
            <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuYXJ1dG8lMjBzdHlsZSUyMGdhbWV8ZW58MHx8fHwxNzA5NTc4NDE1fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Naruto Style Game" mb={4} />
            <Heading as="h1" size="2xl" mb={6}>
              Naruto Strategy Game
            </Heading>
            <Text fontSize="md" mb={6}>
              Rejoignez le monde des ninjas et développez votre village pour devenir le plus puissant des Kages!
            </Text>
            <VillageBuildings />
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};

const VillageBuildings = () => {
  const bg = useColorModeValue("gray.100", "gray.700");
  return (
    <Flex direction="column" background={bg} p={5} borderRadius="md" boxShadow="base">
      <Building icon={FaFortAwesome} title="Centre de formation Genin" description="Formez vos Genins pour les préparer au combat." />
      <Spacer />
      <Building icon={FaUserNinja} title="Centre de formation Chunin" description="Améliorez vos ninjas au niveau de Chunin." />
      <Spacer />
      <Building icon={FaShieldAlt} title="Centre de formation Jounin" description="Entraînez l'élite de vos ninjas, les Jounins." />
      <Spacer />
      <Building icon={FaPlusCircle} title="QG" description="Le quartier général de votre village. Gérez vos stratégies et vos ressources ici." />
      <Spacer />
      <Building icon={FaShieldAlt} title="Mur" description="Renforcez les défenses de votre village contre les attaques ennemies." />
    </Flex>
  );
};

const Building = ({ icon: Icon, title, description }) => {
  return (
    <Box p={4} borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Flex alignItems="center">
        <Icon size="3em" />
        <Box ml={4}>
          <Heading as="h3" size="lg">
            {title}
          </Heading>
          <Text mt={2}>{description}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Index;
