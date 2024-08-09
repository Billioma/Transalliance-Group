import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";
import Hero from "../common/Hero";
import SendReceive from "../common/SendReceive";

const Layout = ({ children }) => {
  return (
    <Flex flexDir="column" minH="100vh" w="full" bg="#F5F5F5">
      <Header />
      <Flex flexDir="column" justifyContent="center" align="center" w="full">
        <Flex
          bg="#122038"
          overflow="hidden"
          pb={{ base: "5rem", md: "unset" }}
          flexDir="column"
          pt={{ base: "90px", md: "180px" }}
          align="center"
          w="100%"
          pos="relative"
        >
          <Image
            src="/assets/top-left.svg"
            pos="absolute"
            display={{ base: "none", md: "flex" }}
            w="948px"
            h="948px"
            top="0"
            left="0"
          />
          <Image
            src="/assets/bottom-right.svg"
            pos="absolute"
            display={{ base: "none", md: "flex" }}
            w="1048px"
            h="1048px"
            bottom="0"
            right="0"
          />

          <Box w="100%">
            <Hero />
          </Box>
        </Flex>
        <SendReceive />

        <Flex justifyContent="center" flexDir="column" align="center" w="full">
          <Flex
            pb={{ base: "50px", lg: "50px" }}
            py={{ base: "40px", md: "24px" }}
            gap="18px"
            pos="relative"
            minH="75vh"
            align="flex-start"
            justifyContent="center"
            w="100%"
          >
            <Box w="full">{children}</Box>
          </Flex>
        </Flex>
      </Flex>
      <Box>
        <Footer />
      </Box>
    </Flex>
  );
};

export default Layout;
