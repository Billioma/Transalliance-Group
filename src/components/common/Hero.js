import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <Box color="#fff" pos="relative">
      <Flex
        align="center"
        position="relative"
        flexDir={{ base: "column", md: "row" }}
        px={{ base: "20px", md: "185px" }}
        gap={{ base: "60px", md: "unset" }}
      >
        <Box w={{ base: "100%", md: "60%" }} transition=".3s ease-in-out">
          <motion.div
            style={{ width: "100%" }}
            initial={{ opacity: 0 }}
            whileInView={{ x: [-150, 0], opacity: 1 }}
            transition={{ duration: 1, delay: 0 }}
          >
            <Text
              bgGradient="linear-gradient(269.18deg, #F27405 6.87%, #D3BD00 118.13%)"
              bgClip="text"
              fontSize={{ base: "13px", md: "15px" }}
              fontWeight={700}
              textAlign={{ base: "center", md: "start" }}
              lineHeight={{ base: "15px", md: "20px" }}
            >
              Simplified cross-border payment
            </Text>
          </motion.div>

          <motion.div
            style={{ width: "100%" }}
            initial={{ opacity: 0 }}
            whileInView={{ x: [-150, 0], opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <Text
              mt="25px"
              fontSize={{ base: "26px", md: "80px" }}
              fontFamily="Gayathri"
              textAlign={{ base: "center", md: "start" }}
              lineHeight={{ base: "30px", md: "70.6px" }}
              w={{ base: "", md: "80%" }}
            >
              We are the payments people
            </Text>
          </motion.div>

          <motion.div
            style={{ width: "100%" }}
            initial={{ opacity: 0 }}
            whileInView={{ x: [-150, 0], opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Text
              mt={{ base: "6.8px", md: "7px" }}
              textAlign={{ base: "center", md: "start" }}
              fontSize={{ base: "14px", md: "18px" }}
              lineHeight={{ base: "20px", md: "25px" }}
              w={{ base: "", md: "65%" }}
            >
              Transalliance Group.’s cross-border payments solutions connect
              organisations and communities globally to the network they need to
              thrive. Together, we make money move.
            </Text>
          </motion.div>
        </Box>

        <Flex w={{ base: "100%", md: "40%" }} position="relative">
          <Flex
            justifyContent={{ base: "center", md: "flex-start" }}
            align={{ base: "center", md: "flex-start" }}
            w={{ base: "full", md: "fit-content" }}
            position="relative"
          >
            <motion.div
              style={{ width: "100%" }}
              initial={{ opacity: 0 }}
              whileInView={{ x: [150, 0], opacity: 1 }}
              transition={{ duration: 1, delay: 0 }}
            >
              <Flex
                flexDir="column"
                justifyContent={{ base: "center", md: "flex-start" }}
                align={{ base: "center", md: "flex-start" }}
                w={{ base: "full", md: "fit-content" }}
              >
                <Box
                  bg="linear-gradient(98.46deg, #F27405 7.88%, #F2DA05 101.19%)"
                  h="90px"
                  w="75%"
                  borderTopRadius="60px"
                />
                <Image
                  src="/assets/hero.jpg"
                  pos="relative"
                  w="75%"
                  zIndex={1}
                  borderBottomRadius="60px"
                  display={{ base: "flex", md: "flex" }}
                  objectFit="contain"
                />
              </Flex>
            </motion.div>

            <Image
              objectFit="contain"
              src="/assets/pattern.svg"
              pos="absolute"
              top="-170px"
              right="-23px"
            />

            <Flex
              pos="absolute"
              align="center"
              h="55px"
              top="43px"
              left="-80px"
              className="inv"
              px="14px"
              zIndex={3}
              display={{ base: "none", md: "flex" }}
              bg="#FFFFFFB2"
              color="#122038"
              fontSize="18px"
              fontWeight={700}
              lineHeight="28px"
              backdropFilter="blur(5px)"
              borderRadius="20px"
            >
              24/7, 365 transaction tracking
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Box w="60%" mt="-50px" display={{ base: "none", md: "block" }}>
        <Image src="/assets/bottom-pattern.svg" />
      </Box>
    </Box>
  );
};

export default Hero;
