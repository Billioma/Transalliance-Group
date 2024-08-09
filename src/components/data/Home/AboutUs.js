import React from "react";
import { Box, Flex, Image, Text, useMediaQuery } from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";

const AboutUs = () => {
  const [isMobile] = useMediaQuery("(max-width: 991px)");
  return (
    <Box
      id="about"
      mt={{ base: "", md: "100px" }}
      pos="relative"
      overflow="hidden"
      pb="100px"
    >
      <Box px={{ base: "20px", md: "185px" }}>
        <motion.div
          style={{ width: "100%" }}
          initial={{ opacity: 0 }}
          whileInView={{ y: [150, 0], opacity: 1 }}
          transition={{ duration: 1, delay: 0 }}
        >
          <Text
            color="#858585"
            fontSize={{ base: "", md: "16px" }}
            lineHeight={{ base: "", md: "20px" }}
            fontWeight={700}
          >
            ABOUT US
          </Text>
        </motion.div>
        <Flex
          mt={{ base: "50px", md: "unset" }}
          flexDir={{ base: "column", md: "row" }}
          align={{ base: "flex-start", md: "flex-end" }}
          w="full"
          justifyContent="space-between"
          gap={{ base: "50px", md: "unset" }}
        >
          <Box w={{ base: "", md: "100%" }} mb="-20px" pos="relative">
            <Box
              pos="absolute"
              left="4"
              top="-4"
              border="2px solid #5AAF87"
              borderRadius="20px"
              opacity={0.2}
              h={{ base: "60px", md: "80px" }}
              w={{ base: "150px", md: "200px" }}
            />
            <Flex
              borderRadius="20px"
              h={{ base: "60px", md: "80px" }}
              justifyContent="center"
              align="center"
              className="inv"
              pos="relative"
              zIndex={1}
              cursor="pointer"
              bg="linear-gradient(to right, #5AAF87 0%, #D3BD00 100%)"
              gap="12px"
              w={{ base: "150px", md: "200px" }}
            >
              <Text
                color="#0F0F0F"
                fontWeight={500}
                fontSize={{ base: "", md: "22px" }}
                lineHeight={{ base: "", md: "30px" }}
              >
                Money Out
              </Text>
              <Flex
                rounded="full"
                bg="#122038"
                w="22px"
                h="22px"
                justifyContent="center"
                align="center"
              >
                <IoIosArrowForward size="13px" color="#5AAF87" />
              </Flex>
            </Flex>
          </Box>

          <Box>
            <motion.div
              style={{ width: isMobile ? "100%" : "80%" }}
              initial={{ opacity: 0 }}
              whileInView={{ x: [150, 0], opacity: 1 }}
              transition={{ duration: 1, delay: 0 }}
            >
              <Text
                color="#122038"
                fontWeight={500}
                fontSize={{ base: "30px", md: "62px" }}
                lineHeight={{ base: "35px", md: "70px" }}
                w={{ base: "100%", md: "80%" }}
              >
                Payment pathways, built for you
              </Text>
            </motion.div>

            <motion.div
              style={{ width: "100%" }}
              initial={{ opacity: 0 }}
              whileInView={{ x: [150, 0], opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <Text
                mt={{ base: "10px", md: "16px" }}
                color="#757575"
                fontWeight={500}
                fontSize={{ base: "15px", md: "26px" }}
                lineHeight={{ base: "22px", md: "40px" }}
              >
                Transalliance Group. Money Out and Money In solutions give our
                customers the ability to complete cross-border, multi-currency
                transactions securely and at speed. And with a single provider
                for both payouts and pay-ins, say goodbye to the operational
                headaches of multi-supplier management
              </Text>
            </motion.div>
          </Box>
        </Flex>

        <Flex
          mt={{ base: "0", md: "40px" }}
          gap={{ base: "80px", md: "unset" }}
          align="flex-start"
          flexDir={{ base: "column", md: "row" }}
          justifyContent="space-between"
        >
          <Box mt={{ base: "30px", md: "60px" }} pos="relative">
            <motion.div
              style={{ width: "100%" }}
              initial={{ opacity: 0 }}
              whileInView={{ x: [-150, 0], opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <Image
                src="/assets/about1.svg"
                borderRadius="20px"
                w={{ base: "340px", md: "405px" }}
                h={{ base: "340px", md: "405px" }}
                objectFit="contain"
              />
            </motion.div>
            <Flex
              pos="absolute"
              align="center"
              h="60px"
              bottom="-23px"
              left={{ base: "1rem", md: "5rem" }}
              className="inv"
              px="14px"
              zIndex={3}
              bg="#FFFFFFB2"
              color="#122038"
              fontSize="18px"
              fontWeight={700}
              lineHeight="28px"
              backdropFilter="blur(5px)"
              borderRadius="20px"
            >
              SEPA Instant, SEPA & SWIFT
            </Flex>
          </Box>

          <Flex
            align={{ base: "flex-start", md: "flex-end" }}
            flexDir={{ base: "column", md: "row" }}
            gap="50px"
          >
            <Box pos="relative">
              <Image
                src="/assets/line.svg"
                pos="absolute"
                display={{ base: "none", md: "flex" }}
                right="-100px"
                top="-100px"
              />

              <motion.div
                style={{ width: "100%" }}
                initial={{ opacity: 0 }}
                whileInView={{ y: [150, 0], opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <Box
                  bg="linear-gradient(to right, #F27405 0%, #D3BD00 100%)"
                  borderRadius="20px"
                  w={{ base: "340px", md: "405px" }}
                  h={{ base: "340px", md: "405px" }}
                  pos="relative"
                >
                  <Flex justifyContent="flex-end" p="15px">
                    <Image
                      src="/assets/arrow.svg"
                      w="30px"
                      h="30px"
                      objectFit="contain"
                    />
                  </Flex>
                  <Flex justifyContent="center" align="center" zIndex={1}>
                    <Image
                      src="/assets/about2.svg"
                      pos="absolute"
                      bottom="0"
                      h="110%"
                      objectFit="contain"
                    />
                    <Flex
                      pos="absolute"
                      align="center"
                      h="60px"
                      bottom={{ base: "-23px", md: "unset" }}
                      top={{ base: "", md: "100px" }}
                      left={{ base: "1rem", md: "-6rem" }}
                      className="inv"
                      px="14px"
                      zIndex={3}
                      bg="#FFFFFFB2"
                      color="#122038"
                      fontSize="18px"
                      fontWeight={700}
                      lineHeight="28px"
                      backdropFilter="blur(5px)"
                      borderRadius="20px"
                    >
                      Danish FSA regulated
                    </Flex>
                  </Flex>
                </Box>
              </motion.div>
            </Box>

            <Box>
              <motion.div
                style={{ width: "100%" }}
                initial={{ opacity: 0 }}
                whileInView={{ x: [150, 0], opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <Box
                  bg="linear-gradient(to right, #D3BD00 0%, #5AAF87 100%)"
                  borderRadius="20px"
                  w={{ base: "340px", md: "456px" }}
                  h={{ base: "280px", md: "404px" }}
                  pos="relative"
                >
                  <Image
                    pos="absolute"
                    bottom="0"
                    src="/assets/about4.png"
                    h="full"
                    w="full"
                  />
                  <Flex
                    pos="absolute"
                    align="center"
                    h="60px"
                    bottom="-23px"
                    left={{ base: "1rem", md: "-2rem" }}
                    className="inv"
                    px="14px"
                    zIndex={3}
                    w="80%"
                    bg="#FFFFFFB2"
                    color="#122038"
                    fontSize="18px"
                    fontWeight={700}
                    lineHeight="28px"
                    backdropFilter="blur(5px)"
                    borderRadius="20px"
                  >
                    <Text w={{ base: "", md: "90%" }} textAlign="center">
                      Customer portal for live transaction monitoring
                    </Text>
                  </Flex>
                </Box>
              </motion.div>

              <motion.div
                style={{ width: "100%" }}
                initial={{ opacity: 0 }}
                whileInView={{ x: [-150, 0], opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <Box
                  mt="70px"
                  bg="#fff"
                  zIndex={2}
                  borderRadius="20px"
                  pos="relative"
                  w={{ base: "340px", md: "405px" }}
                  h={{ base: "340px", md: "405px" }}
                >
                  <Flex justifyContent="flex-end" p="15px">
                    <Image
                      src="/assets/arrow.svg"
                      w="30px"
                      h="30px"
                      objectFit="contain"
                    />
                  </Flex>
                  <Flex justifyContent="center" align="center">
                    <Image
                      src="/assets/about3.svg"
                      w="full"
                      h="85%"
                      pos="absolute"
                      bottom="0"
                      objectFit="contain"
                    />
                    <Flex
                      pos="absolute"
                      align="center"
                      h="60px"
                      bottom="-23px"
                      left={{ base: "1rem", md: "5rem" }}
                      className="inv"
                      px="14px"
                      zIndex={3}
                      bg="#FFFFFFB2"
                      color="#122038"
                      fontSize="18px"
                      fontWeight={700}
                      lineHeight="28px"
                      backdropFilter="blur(5px)"
                      borderRadius="20px"
                    >
                      90+ currencies served
                    </Flex>
                  </Flex>
                </Box>
              </motion.div>
            </Box>
          </Flex>
        </Flex>

        <Flex
          justifyContent={{ base: "flex-start", md: "flex-end" }}
          mt={{ base: "50px", md: "100px" }}
          w="full"
        >
          <Flex
            borderRadius={{ base: "10px", md: "20px" }}
            h={{ base: "50px", md: "80px" }}
            justifyContent="center"
            align="center"
            className="par_btn"
            pos="relative"
            zIndex={1}
            cursor="pointer"
            bg="linear-gradient(to right, #24343E 0%, #5AAF87 100%)"
            color="#0F0F0F"
            _hover={{
              bg: "linear-gradient(to right, #F27405 0%, #D3BD00 100%)",
              color: "#fff",
            }}
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
              bg="#5BFB94"
              w="22px"
              className="chd_btn"
              h="22px"
              justifyContent="center"
              align="center"
            >
              <IoIosArrowForward size="13px" />
            </Flex>
          </Flex>
        </Flex>
      </Box>

      <Image src="/assets/green.svg" pos="absolute" top="0" right="0" />
    </Box>
  );
};

export default AboutUs;
