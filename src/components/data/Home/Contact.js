import React from "react";
import {
  Box,
  Checkbox,
  Flex,
  Image,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";

export const Layout = ({ label, textarea }) => {
  return (
    <Box>
      <Text
        color="#122038"
        fontWeight={500}
        fontSize={{ base: "", md: "20px" }}
        lineHeight={{ base: "", md: "26px" }}
        mb="8px"
      >
        {label}
      </Text>
      {textarea ? <Textarea /> : <Input />}
    </Box>
  );
};

const Contact = () => {
  return (
    <Box
      id="contact"
      mt={{ base: "50px", md: "20px" }}
      px={{ base: "20px", md: "185px" }}
    >
      <Flex
        align="center"
        gap={{ base: "50px", md: "120px" }}
        flexDir={{ base: "column", md: "row" }}
      >
        <Box w="full" display={{ base: "none", md: "block" }}>
          <motion.div
            style={{ width: "100%" }}
            initial={{ opacity: 0 }}
            whileInView={{ x: [-150, 0], opacity: 1 }}
            transition={{ duration: 1, delay: 0 }}
          >
            <Image
              src="/assets/contact.svg"
              h={{ base: "", md: "700px" }}
              w="700px"
              objectFit="contain"
            />
          </motion.div>
        </Box>

        <Box
          w="full"
          bg="#fff"
          borderRadius="20px"
          px="30px"
          pt="40px"
          pb="30px"
        >
          <Box
            fontSize={{ base: "28px", md: "35px" }}
            lineHeight={{ base: "33.6px", md: "48px" }}
            color="#122038"
          >
            <motion.div
              style={{ width: "100%" }}
              initial={{ opacity: 0 }}
              whileInView={{ y: [50, 0], opacity: 1 }}
              transition={{ duration: 1, delay: 0 }}
            >
              Speak to Sales
            </motion.div>
          </Box>

          <Flex
            pl={{ base: "", md: "60px" }}
            flexDir="column"
            gap="12px"
            mt="16px"
          >
            <Flex flexDir="column" gap="12px" pr={{ base: "", md: "60px" }}>
              <motion.div
                style={{ width: "100%" }}
                initial={{ opacity: 0 }}
                whileInView={{ y: [150, 0], opacity: 1 }}
                transition={{ duration: 1, delay: 0 }}
              >
                <Layout label="Email" />
              </motion.div>
              <motion.div
                style={{ width: "100%" }}
                initial={{ opacity: 0 }}
                whileInView={{ y: [150, 0], opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <Layout label="First Name" />
              </motion.div>
              <motion.div
                style={{ width: "100%" }}
                initial={{ opacity: 0 }}
                whileInView={{ y: [150, 0], opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <Layout label="Last Name" />
              </motion.div>
              <motion.div
                style={{ width: "100%" }}
                initial={{ opacity: 0 }}
                whileInView={{ y: [150, 0], opacity: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
              >
                <Layout label="Message" textarea />
              </motion.div>
            </Flex>

            <motion.div
              style={{ width: "100%" }}
              initial={{ opacity: 0 }}
              whileInView={{ y: [150, 0], opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <Flex align="flex-start" gap="15px">
                <Checkbox />
                <Text
                  color="#1E1E1E"
                  fontSize={{ base: "13px", md: "14px" }}
                  lineHeight="18px"
                >
                  I agree to receiving payment news and trends from Inpay,
                  including updates to our products and services. I am aware
                  that I can withdraw this consent at any time by contacting
                  Inpay or unsubscribing via email. I agree to Inpay processing
                  my personal data in accordance with its Privacy Policy.
                </Text>
              </Flex>
            </motion.div>

            <Box mt="30px">
              <motion.div
                style={{ width: "100%" }}
                initial={{ opacity: 0 }}
                whileInView={{ y: [150, 0], opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <Flex
                  borderRadius={{ base: "10px", md: "20px" }}
                  h={{ base: "40px", md: "60px" }}
                  w={{ base: "150px", md: "180px" }}
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
                    Submit
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
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Contact;
