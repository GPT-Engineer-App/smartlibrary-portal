import React from "react";
import { Box, Flex, Heading, Input, Icon, VStack, Grid, Text, Button } from "@chakra-ui/react";
import { FaPlus, FaBars } from "react-icons/fa";

const Index = () => {
  return (
    <Flex h="100vh" flexDirection="row">
      {/* Left Sidebar */}
      <Box bg="lightblue" w="60px" p={2}>
        <VStack spacing={4} align="center">
          <Icon as={FaBars} boxSize={6} />
          {/* Add more sidebar icons */}
        </VStack>
      </Box>

      <Flex flexDirection="column" flex={1}>
        {/* Header */}
        <Flex bg="lightblue" p={4} justifyContent="space-between" alignItems="center">
          <Heading size="lg" textTransform="uppercase" fontWeight="bold">
            Smartlibrary
          </Heading>
          <Flex>
            <Input placeholder="Search..." borderRadius="full" mr={2} />
            <Icon as={FaPlus} boxSize={6} />
          </Flex>
        </Flex>

        {/* Main Content */}
        <Flex flex={1}>
          {/* Left Column */}
          <Box bg="white" w="300px" p={4}>
            <VStack spacing={4} align="stretch">
              <Box borderWidth={1} borderColor="lightblue" p={2}>
                <Heading size="md">Radiology Reporting</Heading>
                {/* Add list of items */}
              </Box>
              <Box borderWidth={1} borderColor="lightblue" p={2}>
                <Heading size="md">Pathology Cancer Reporting</Heading>
                {/* Add list of items */}
              </Box>
            </VStack>
          </Box>

          {/* Right Column */}
          <Box bg="paleblue" flex={1} p={4}>
            <Grid templateColumns="repeat(3, 1fr)" gap={4}>
              {/* Category Box */}
              <Box borderWidth={1} borderColor="lightblue" p={2}>
                <Heading size="sm">Neuroradiology</Heading>
                <Text>CT Traumatic Brain Injury</Text>
                {/* Add more items */}
                <Button size="sm" colorScheme="blue" mt={2}>
                  &gt; OPEN
                </Button>
              </Box>
              {/* Add more category boxes */}
            </Grid>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Index;
