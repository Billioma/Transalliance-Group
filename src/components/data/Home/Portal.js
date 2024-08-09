import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Portal = () => {
  return (
    <Flex
      align="flex-end"
      mt={{ base: "60px", md: "120px" }}
      flexDir={{ base: "column", md: "row" }}
    >
      <Box
        bg="#122038"
        w={{ base: "100%", md: "60%" }}
        borderTopRightRadius="80px"
        p="30px"
        pos="relative"
        pb="0"
      >
        <Image src="/assets/green3.svg" pos="absolute" top="0" left="0" />
        <motion.div
          style={{ width: "100%" }}
          initial={{ opacity: 0 }}
          whileInView={{ x: [-50, 0], opacity: 1 }}
          transition={{ duration: 1, delay: 0 }}
        >
          <Image
            src="/assets/logo.svg"
            w={{ base: "40px", md: "77px" }}
            h={{ base: "40px", md: "86px" }}
            objectFit="contain"
          />
        </motion.div>

        <Flex justifyContent="center" mt="20px" align="center">
          <Image
            src="/assets/device.svg"
            w="830px"
            h={{ base: "", md: "586px" }}
            objectFit="contain"
          />
        </Flex>
      </Box>

      <Box
        bg="#5FB083"
        color="#0F0F0F"
        borderBottomLeftRadius={{ base: "80px", md: "none" }}
        p={{ base: "30px 20px 25px", md: "50px 0 05px 51px" }}
        w={{ base: "", md: "40%" }}
      >
        <Text
          fontWeight={500}
          fontSize={{ base: "27px", md: "44px" }}
          fontFamily="Gayathri"
          lineHeight={{ base: "33px", md: "54px" }}
          w={{ base: "", md: "70%" }}
        >
          <motion.div
            style={{ width: "100%" }}
            initial={{ opacity: 0 }}
            whileInView={{ x: [150, 0], opacity: 1 }}
            transition={{ duration: 1, delay: 0 }}
          >
            One portal, every transaction
          </motion.div>
        </Text>
        <Text
          my={{ base: "20px", md: "30px" }}
          fontWeight={500}
          fontSize={{ base: "15px", md: "23px" }}
          lineHeight={{ base: "26px", md: "40px" }}
          w={{ base: "", md: "75%" }}
        >
          <motion.div
            style={{ width: "100%" }}
            initial={{ opacity: 0 }}
            whileInView={{ x: [150, 0], opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Our customer portal provides an intuitive interface to access all of
            our services via a simple, single login. <br /> • Real-time, 24/7,
            365 transaction tracking <br />• Customizable & downloadable reports{" "}
            <br /> • Rich data analysis <br />• Multiple integration methods,
            built to suit your needs
          </motion.div>
        </Text>
      </Box>
    </Flex>
  );
};

export default Portal;
