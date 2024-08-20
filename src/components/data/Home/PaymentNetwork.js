import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";

const PaymentNetwork = () => {
  return (
    <Flex align="flex-end" flexDir={{ base: "column-reverse", md: "row" }}>
      <Box
        bg="#5FB083"
        color="#0F0F0F"
        pt={{ base: "30px", md: "60px" }}
        pb="25px"
        px={{ base: "20px", md: "unset" }}
        w={{ base: "100%", md: "40%" }}
        borderBottomRightRadius={{ base: "80px", md: "none" }}
      >
        <Flex flexDir="column" align={{ base: "flex-start", md: "flex-end" }}>
          <Box
            fontWeight={500}
            fontSize={{ base: "27px", md: "48px" }}
            lineHeight={{ base: "33px", md: "58px" }}
            w={{ base: "100%", md: "70%" }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ x: [-150, 0], opacity: 1 }}
              transition={{ duration: 1, delay: 0 }}
            >
              The human-powered payments network
            </motion.div>
          </Box>
          <Box
            my={{ base: "20px", md: "38px" }}
            fontWeight={500}
            fontSize={{ base: "16px", md: "24px" }}
            lineHeight={{ base: "26px", md: "42px" }}
            w={{ base: "", md: "70%" }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ x: [-150, 0], opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Driven by a team of over 200 global payments experts with absolute
              dedication to solving our customers' most complex cross-border
              payments challenges.
            </motion.div>
          </Box>

          <Box w={{ base: "100%", md: "70%" }}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ x: [-150, 0], opacity: 1 }}
              transition={{ duration: 1, delay: 0 }}
            >
              <Flex
                borderRadius={{ base: "10px", md: "20px" }}
                h={{ base: "50px", md: "80px" }}
                justifyContent="center"
                align="center"
                className="inv"
                pos="relative"
                zIndex={1}
                cursor="pointer"
                bg="linear-gradient(to left, #5AAF87 0%, #D3BD00 100%)"
                color="#0F0F0F"
                transition=".3s ease-in-out"
                gap="12px"
                w="200px"
              >
                <Text
                  fontWeight={500}
                  fontSize={{ base: "", md: "22px" }}
                  lineHeight={{ base: "", md: "30px" }}
                >
                  Learn More
                </Text>
                <Flex
                  rounded="full"
                  bg="#122038"
                  w="22px"
                  h="22px"
                  justifyContent="center"
                  align="center"
                >
                  <IoIosArrowForward size="13px" color="#31E876" />
                </Flex>
              </Flex>
            </motion.div>
          </Box>
        </Flex>
      </Box>

      <Box
        bg="#122038"
        w={{ base: "100%", md: "60%" }}
        borderTopLeftRadius="80px"
        p="30px"
        pos="relative"
        pb={{ base: "0", md: "50px" }}
      >
        <Image src="/assets/green3.svg" pos="absolute" top="0" left="0" />
        <Flex justifyContent="flex-end" w="full">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ x: [50, 0], opacity: 1 }}
            transition={{ duration: 1, delay: 0 }}
          >
            <Image
              src="/assets/logo.svg"
              w={{ base: "40px", md: "77px" }}
              h={{ base: "40px", md: "86px" }}
              objectFit="contain"
            />
          </motion.div>
        </Flex>

        <Flex justifyContent="center" align="center">
          <Image
            src="/assets/woman.svg"
            w="642px"
            h={{ base: "", md: "524px" }}
            objectFit="contain"
          />
        </Flex>
      </Box>
    </Flex>
  );
};

export default PaymentNetwork;
