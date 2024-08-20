import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const SendReceive = () => {
  return (
    <Flex align="center" justifyContent="center" w="full">
      <Box
        h={{ base: "fit-content", md: "25rem" }}
        botom="0"
        left="0"
        w={{ base: "90%", md: "80%" }}
        px={{ base: "0", md: "14px" }}
        mt={{ base: "-50px", md: "-110px" }}
        bg="rgba(255, 255, 255, 0.15)"
        backdropFilter={"blur(180px)"}
        color="#122038"
        fontSize="18px"
        lineHeight="28px"
        borderRadius="20px"
      >
        <Text
          p="40px"
          color="#0F0F0F"
          display={{ base: "none", md: "flex" }}
          fontSize="28px"
          lineHeight="35px"
          fontFamily={500}
        >
          Send and Receive Money from all <br /> over with ease.
        </Text>
        <Text
          p="20px"
          color="#0F0F0F"
          display={{ base: "flex", md: "none" }}
          fontSize="21px"
          lineHeight="25px"
          fontFamily={500}
        >
          Send and Receive Money from all over with ease.
        </Text>

        <Flex
          align="center"
          mt={{ base: "0", md: "50px" }}
          ml="-10px"
          flexWrap="wrap"
          justifyContent="center"
        >
          {["slide1", "slide2", "slide3", "slide4", "slide5", "slide6"].map(
            (item, i) => (
              <motion.div
              key={i}
                initial={{ opacity: 0 }}
                whileInView={{ x: [150, 0], opacity: 1 }}
                transition={{ duration: 1, delay: i * 0.3 }}
              >
                <Image
                  src={`assets/${item}.svg`}
                  w={{ base: "100px", md: "235px" }}
                  className="inv"
                  h={{ base: "70px", md: "100px" }}
                  objectFit="contain"
                />
              </motion.div>
            ),
          )}
        </Flex>
      </Box>
    </Flex>
  );
};

export default SendReceive;
