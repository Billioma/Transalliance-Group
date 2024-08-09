import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <Box bg="#fff" p={{ base: "20px", md: "80px 185px 150px" }}>
      <Flex
        align="flex-start"
        gap={{ base: "40px", md: "130px" }}
        flexWrap={{ base: "wrap", lg: "nowrap" }}
      >
        <Box w={{ base: "", md: "25%" }}>
          <Flex align="flex-end" gap="10px">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ x: [-50, 0], opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <Image
                src="/assets/white-logo.svg"
                w={{ base: "40px", md: "68px" }}
                h={{ base: "40px", md: "78px" }}
                objectFit="contain"
              />
            </motion.div>
            <Text
              color="#0F0F0F"
              fontFamily="Gayathri"
              fontSize="20px"
              lineHeight={{ base: "20px", md: "25px" }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ x: [-50, 0], opacity: 1 }}
                transition={{ duration: 1, delay: 0 }}
              >
                Transalliance Group
              </motion.div>
            </Text>
          </Flex>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ y: [50, 0], opacity: 1 }}
            transition={{ duration: 1, delay: 0 }}
          >
            <Flex
              mt={{ base: "20px", md: "50px" }}
              borderRadius={{ base: "10px", md: "20px" }}
              h={{ base: "40px", md: "55px" }}
              w={{ base: "150px", md: "220px" }}
              justifyContent="center"
              align="center"
              className="inv"
              pos="relative"
              zIndex={1}
              cursor="pointer"
              bg="linear-gradient(to right, #24343E 0%, #5AAF87 0%)"
              gap="12px"
            >
              <Text
                color="#0F0F0F"
                fontWeight={500}
                fontSize={{ base: "", md: "22px" }}
                lineHeight={{ base: "", md: "30px" }}
              >
                Contact Us
              </Text>
              <Flex
                rounded="full"
                bg="#5BFB94"
                w="22px"
                h="22px"
                justifyContent="center"
                align="center"
              >
                <IoIosArrowForward size="16px" color="#122038" />
              </Flex>
            </Flex>
          </motion.div>
        </Box>

        <Flex
          flexWrap={{ base: "wrap", lg: "nowrap" }}
          columnGap={{ base: "100px", md: "160px" }}
          rowGap={{ base: "30px", md: "160px" }}
          align="flex-start"
        >
          <Box w={{ base: "100%", md: "15%" }}>
            <Text
              fontWeight={500}
              fontSize={{ base: "15px", md: "22px" }}
              lineHeight={{ base: "20px", md: "29px" }}
              color="#122038"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ y: [50, 0], opacity: 1 }}
                transition={{ duration: 1, delay: 0 }}
              >
                Offices
              </motion.div>
            </Text>
            <Text
              mt={{ base: "18px", md: "21px" }}
              fontSize={{ base: "14px", md: "18px" }}
              lineHeight={{ base: "20px", md: "24px" }}
              color="#OFOFOF"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ y: [50, 0], opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                Denmark: <br />
                Toldbodgade 55B 1253, Copenhagen United Kingdom: <br />
                <br />1 Poultry
                <br />
                EC2R 8EJ, London info@inpay.com Phone: +45 88 610 600
              </motion.div>
            </Text>
          </Box>

          <Box>
            <Text
              fontWeight={500}
              fontSize={{ base: "15px", md: "22px" }}
              lineHeight={{ base: "20px", md: "29px" }}
              color="#122038"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ y: [50, 0], opacity: 1 }}
                transition={{ duration: 1, delay: 0 }}
              >
                Solutions
              </motion.div>
            </Text>
            <Text
              mt={{ base: "18px", md: "21px" }}
              fontSize={{ base: "14px", md: "18px" }}
              lineHeight={{ base: "20px", md: "24px" }}
              color="#OFOFOF"
            >
              {["Out", "In"].map((item, i) => (
                <Text
                  mb={{ base: "10px", md: "18px" }}
                  fontWeight={500}
                  fontSize={{ base: "", md: "18px" }}
                  lineHeight={{ base: "", md: "24px" }}
                  key={i}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ y: [50, 0], opacity: 1 }}
                    transition={{ duration: 1, delay: i * 0.3 }}
                  >
                    Money {item}
                  </motion.div>
                </Text>
              ))}
            </Text>
          </Box>

          <Box>
            <Text
              fontWeight={500}
              fontSize={{ base: "15px", md: "22px" }}
              lineHeight={{ base: "20px", md: "29px" }}
              color="#122038"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ y: [50, 0], opacity: 1 }}
                transition={{ duration: 1, delay: 0 }}
              >
                Sectors
              </motion.div>
            </Text>
            <Text
              mt={{ base: "18px", md: "21px" }}
              fontSize={{ base: "14px", md: "18px" }}
              lineHeight={{ base: "20px", md: "24px" }}
              color="#OFOFOF"
            >
              {["Financial Services", "iGaming", "Corporates", "NGOs"].map(
                (item, i) => (
                  <Text
                    mb={{ base: "10px", md: "18px" }}
                    fontWeight={500}
                    fontSize={{ base: "", md: "18px" }}
                    lineHeight={{ base: "", md: "24px" }}
                    key={i}
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ y: [50, 0], opacity: 1 }}
                      transition={{ duration: 1, delay: i * 0.3 }}
                    >
                      {item}
                    </motion.div>
                  </Text>
                ),
              )}
            </Text>
          </Box>

          <Box>
            <Text
              fontWeight={500}
              fontSize={{ base: "15px", md: "22px" }}
              lineHeight={{ base: "20px", md: "29px" }}
              color="#122038"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ y: [50, 0], opacity: 1 }}
                transition={{ duration: 1, delay: 0 }}
              >
                Other
              </motion.div>
            </Text>
            <Text
              mt={{ base: "18px", md: "21px" }}
              fontSize={{ base: "14px", md: "18px" }}
              lineHeight={{ base: "20px", md: "24px" }}
              color="#OFOFOF"
            >
              {[
                "About Us",
                "News & Insights",
                "Compliances",
                "Careers",
                "Contact us",
              ]?.map((item, i) => (
                <Text
                  mb={{ base: "10px", md: "18px" }}
                  fontWeight={500}
                  fontSize={{ base: "", md: "18px" }}
                  lineHeight={{ base: "", md: "24px" }}
                  key={i}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ y: [50, 0], opacity: 1 }}
                    transition={{ duration: 1, delay: i * 0.3 }}
                  >
                    {item}
                  </motion.div>
                </Text>
              ))}
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
