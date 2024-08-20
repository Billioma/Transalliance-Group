import React from "react";
import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import { sectors } from "../../common/constants";
import { motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";

const Sectors = () => {
  return (
    <Box mt={{ base: "60px", md: "150px" }}>
      <Box px={{ base: "20px", md: "185px" }}>
        <Box
          fontWeight={500}
          fontSize={{ base: "30px", md: "44px" }}
          lineHeight={{ base: "40px", md: "54px" }}
          w={{ base: "100%", md: "70%" }}
          fontFamily="Gayathri"
        >
          <motion.div
            style={{ width: "100%" }}
            initial={{ opacity: 0 }}
            whileInView={{ y: [150, 0], opacity: 1 }}
            transition={{ duration: 1, delay: 0 }}
          >
            One portal, every transaction
          </motion.div>
        </Box>
        <Box
          my={{ base: "20px", md: "50px" }}
          fontSize={{ base: "18px", md: "28px" }}
          lineHeight={{ base: "286x", md: "37px" }}
          w={{ base: "100%", md: "70%" }}
          color="#757575"
        >
          <motion.div
            style={{ width: "100%" }}
            initial={{ opacity: 0 }}
            whileInView={{ y: [150, 0], opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            We simplify the complexities of cross-border payments in some of the
            world’s most demanding sectors. Learn more about who we serve and
            how we add value below.
          </motion.div>
        </Box>

        <Flex justifyContent="center">
          <Grid
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
            justifyContent="space-between"
            rowGap={{ base: "50px", md: "60px" }}
            columnGap="150px"
          >
            {sectors.map((item, i) => (
              <Box key={i} pos="relative" w="fit-content">
                <Flex
                  pos="absolute"
                  align="center"
                  h={{ base: "60px", md: "80px" }}
                  right={{ base: "", md: i % 2 === 0 ? "-6rem" : "unset" }}
                  left={{
                    base: "1rem",
                    md: i === 1 ? "-6rem" : i === 3 ? "-1.5rem" : "unset",
                  }}
                  top={{
                    base: "",
                    md: i === 1 ? "7" : i === 2 ? "10" : "unset",
                  }}
                  bottom={{
                    base: "-23px",
                    md: i === 0 ? "70px" : i === 3 ? "-20px" : "unset",
                  }}
                  className="inv"
                  px="14px"
                  w={
                    i === 0
                      ? "260px"
                      : i === 1
                        ? "250px"
                        : i === 2
                          ? "240px"
                          : "240px"
                  }
                  zIndex={3}
                  bg="#FFFFFFB2"
                  color="#122038"
                  fontSize="18px"
                  fontWeight={700}
                  lineHeight="28px"
                  backdropFilter="blur(5px)"
                  borderRadius={{ base: "10px", md: "20px" }}
                >
                  <Box fontWeight={500} w="full">
                    <Text
                      color="#122038"
                      fontSize={{ base: "", md: "24px" }}
                      lineHeight={{ base: "", md: "26px" }}
                    >
                      {item?.word}
                    </Text>
                    <Flex mt="5px" align="center" gap="12px">
                      <Text
                        color="#272020"
                        fontSize={{ base: "", md: "18px" }}
                        lineHeight={{ base: "", md: "26px" }}
                      >
                        Learn More
                      </Text>
                      <Flex
                        rounded="full"
                        bg="#122038"
                        w="20px"
                        className="chd_btn"
                        h="20px"
                        justifyContent="center"
                        align="center"
                      >
                        <IoIosArrowForward size="14px" color="#31E876" />
                      </Flex>
                    </Flex>
                  </Box>
                </Flex>

                <Image
                  src={item?.img}
                  borderRadius="10px"
                  h={{ base: "", md: "337px" }}
                  w={{ base: "", md: "570px" }}
                  objectFit="contain"
                />
              </Box>
            ))}
          </Grid>
        </Flex>
      </Box>
    </Box>
  );
};

export default Sectors;
