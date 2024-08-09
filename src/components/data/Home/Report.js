import React from "react";
import { Flex, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Report = () => {
  return (
    <Flex
      mt={{ base: "100px", md: "200px" }}
      justifyContent="center"
      align="center"
      flexDir="column"
      borderTopLeftRadius={{ base: "80px", md: "none" }}
      borderBottomRightRadius="80px"
      overflow="hidden"
      h={{ base: "400px", md: "500px" }}
      color="#F5F5F5"
      bg="#122038"
      pos="relative"
    >
      <Image
        src="/assets/green2.svg"
        opacity={0.7}
        pos="absolute"
        left="0"
        top="0"
      />
      <Image
        src="/assets/green4.svg"
        opacity={0.7}
        pos="absolute"
        right="0"
        bottom="0"
      />
      <Text
        mt="25px"
        fontSize={{ base: "25px", md: "60px" }}
        fontFamily="Gayathri"
        lineHeight={{ base: "20px", md: "24px" }}
      >
        <motion.div
          style={{ width: "100%" }}
          initial={{ opacity: 0 }}
          whileInView={{ y: [-150, 0], opacity: 1 }}
          transition={{ duration: 1, delay: 0 }}
        >
          2023 Annual Report
        </motion.div>
      </Text>
      <Text
        mt="60px"
        fontSize={{ base: "20px", md: "35px" }}
        lineHeight={{ base: "30px", md: "40px" }}
        textAlign="center"
        w={{ base: "100%", md: "60rem" }}
      >
        <motion.div
          style={{ width: "100%" }}
          initial={{ opacity: 0 }}
          whileInView={{ y: [150, 0], opacity: 1 }}
          transition={{ duration: 1, delay: 0 }}
        >
          Click below to read more about Inpay’s impressive year-on-year growth
          and to download the full report.
        </motion.div>
      </Text>
    </Flex>
  );
};

export default Report;
