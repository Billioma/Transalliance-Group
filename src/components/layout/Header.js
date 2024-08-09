import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { headerRoutes } from "../common/constants";
import { Link } from "react-scroll";
import Menu from "../modal/Menu";
import { useNavigate } from "react-router-dom";
import { ArrowIcon } from "../common/images";
import { MdMenu } from "react-icons/md";

const Header = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();

  return (
    <Flex justifyContent={{ base: "flex-start", md: "center" }} color="#fff">
      <Menu isOpen={isOpen} onClose={onClose} />
      <Box
        w="100%"
        pos="absolute"
        top="20px"
        pr={{ base: "20px", md: "185px" }}
        pl={{ base: "20px", md: "185px" }}
        zIndex={2}
      >
        <Flex
          display={{ base: "flex", md: "none" }}
          align="center"
          w="full"
          justifyContent="space-between"
        >
          <Image
            src="/assets/logo.svg"
            w="40px"
            h="40px"
            objectFit="contain"
            onClick={() => navigate("/")}
          />

          <MdMenu size="20px" onClick={onOpen} />
        </Flex>

        <Flex
          align="center"
          display={{ base: "none", md: "flex" }}
          justifyContent="space-between"
        >
          <Flex align="center" gap="72px">
            <Image
              src="/assets/logo.svg"
              w="70px"
              h="70px"
              cursor="pointer"
              onClick={() => navigate("/")}
              objectFit="contain"
            />
          </Flex>

          <Flex align="center" gap="26px">
            <Flex align="center" gap="35px">
              {headerRoutes.map((item) => (
                <Link key={item.id} to={item.id} smooth={true} duration={200}>
                  <Text
                    key={item.id}
                    onClick={() => navigate(item.path)}
                    transition=".3s ease-in-out"
                    className="hover-underline-animation"
                    cursor="pointer"
                    _hover={{
                      color: "orange",
                    }}
                    fontSize="15px"
                    lineHeight="20px"
                    fontWeight={700}
                    style={{ textDecoration: "none" }}
                  >
                    {item.name}
                  </Text>
                </Link>
              ))}
            </Flex>

            <Button
              bg="#5BFB94"
              borderRadius={{ base: "6px", md: "20px" }}
              h={{ base: "30px", md: "50px" }}
              w={{ base: "94.18px", md: "169px" }}
              color="#0F0F0F"
              fontWeight={500}
              fontSize={{ base: "11px", md: "16px" }}
              lineHeight={{ base: "11px", md: "20px" }}
              transition=".3s ease-in-out"
              display="flex"
              alignContent="center"
              _hover={{
                bg: "#F27405",
                color: "#fff",
              }}
              onMouseOver={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              gap="8px"
            >
              Get Started
              <Flex
                justifyContent="center"
                align="center"
                w={{ base: "10px", md: "10px" }}
                h={{ base: "10px", md: "10px" }}
              >
                <ArrowIcon fill={hover ? "#fff" : "#0F0F0F"} />
              </Flex>
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
