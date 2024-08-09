import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { services } from "../../common/constants";
import { motion } from "framer-motion";

const Solutions = () => {
  return (
    <Box id="solutions" pos="relative" mt={{ base: "50px", md: "100px" }}>
      <Box px={{ base: "20px", md: "185px" }}>
        <Flex
          align="flex-start"
          gap={{ base: "100px", md: "160px" }}
          flexDir={{ base: "column", md: "row" }}
        >
          <Box w={{ base: "100%", md: "40%" }}>
            <Text
              color="#858585"
              fontSize={{ base: "14px", md: "16px" }}
              lineHeight={{ base: "17px", md: "20px" }}
              fontWeight={700}
            >
              OUR SERVICE
            </Text>

            <Flex
              flexDir="column"
              gap={{ base: "30px", md: "70px" }}
              mt={{ base: "30px", md: "50px" }}
            >
              {services?.map((item, i) => (
                <motion.div
                  style={{ width: "100%" }}
                  initial={{ opacity: 0 }}
                  whileInView={{ y: [150, 0], opacity: 1 }}
                  transition={{ duration: 1, delay: i * 0.3 }}
                >
                  <Box key={i} fontWeight={500}>
                    <Flex
                      bg="#5AAF87"
                      w={{ base: "40px", md: "60px" }}
                      h={{ base: "40px", md: "60px" }}
                      borderRadius="13px"
                      justifyContent="center"
                      align="center"
                    >
                      <Image
                        src={item?.img}
                        w={{ base: "20px", md: "40px" }}
                        h={{ base: "20px", md: "40px" }}
                        objectFit="contain"
                      />
                    </Flex>

                    <Text
                      color="#122038"
                      fontSize={{ base: "19px", md: "28px" }}
                      lineHeight={{ base: "25px", md: "35px" }}
                      mt={{ base: "15px", md: "20px" }}
                      mb={{ base: "5px", md: "10px" }}
                    >
                      {item?.title}
                    </Text>
                    <Text
                      fontSize={{ base: "15px", md: "20px" }}
                      lineHeight={{ base: "20px", md: "26px" }}
                      color="#757575"
                    >
                      {item?.body}
                    </Text>
                  </Box>
                </motion.div>
              ))}
            </Flex>
          </Box>

          <Box w={{ base: "100%", md: "60%" }}>
            <Text
              color="#122038"
              fontWeight={500}
              fontSize={{ base: "40px", md: "62px" }}
              lineHeight={{ base: "45px", md: "70px" }}
              fontFamily="Gayathri"
              w={{ base: "", md: "90%" }}
            >
              <motion.div
                style={{ width: "100%" }}
                initial={{ opacity: 0 }}
                whileInView={{ x: [150, 0], opacity: 1 }}
                transition={{ duration: 1, delay: 0 }}
              >
                The Transalliance Group. difference
              </motion.div>
            </Text>
            <Text
              mt="5px"
              color="#757575"
              fontSize={{ base: "18px", md: "28px" }}
              lineHeight={{ base: "25px", md: "40px" }}
              w={{ base: "100%", md: "90%" }}
            >
              <motion.div
                style={{ width: "100%" }}
                initial={{ opacity: 0 }}
                whileInView={{ x: [150, 0], opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                Our global payments network is powered by passionate people,
                transparent customer relationships, and leading-edge technology.
              </motion.div>
            </Text>

            <Box mt={{ base: "50px", md: "120px" }}>
              <Text
                color="#122038"
                fontWeight={500}
                fontSize="20px"
                mb="20px"
                display={{ base: "flex", md: "none" }}
                lineHeight="30px"
              >
                Meet our best financial experts
              </Text>

              <Flex align="flex-start" flexDir={{ base: "column", md: "row" }}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ x: [150, 0], opacity: 1 }}
                  transition={{ duration: 1, delay: 0 }}
                >
                  <Image
                    src="/assets/slide7.svg"
                    display={{ base: "none", md: "flex" }}
                    h="38rem"
                  />
                </motion.div>
                <Box>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ x: [150, 0], opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                  >
                    <Image
                      src="/assets/slide8.svg"
                      h={{ base: "", md: "30rem" }}
                    />
                  </motion.div>
                  <Flex align="flex-end" display={{ base: "none", md: "flex" }}>
                    <Text
                      pt="35px"
                      pl="45px"
                      color="#122038"
                      fontWeight={500}
                      fontSize="35px"
                      lineHeight="46px"
                      w="20rem"
                    >
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ y: [150, 0], opacity: 1 }}
                        transition={{ duration: 1, delay: 0 }}
                      >
                        Meet our best financial experts
                      </motion.div>
                    </Text>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ x: [150, 0], opacity: 1 }}
                      transition={{ duration: 1, delay: 0.3 }}
                    >
                      <Image
                        src="/assets/arrow.svg"
                        w="35px"
                        h="35px"
                        objectFit="contain"
                      />
                    </motion.div>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Box>

      <Image src="/assets/orange.svg" pos="absolute" top="0" left="0" />
    </Box>
  );
};

export default Solutions;
