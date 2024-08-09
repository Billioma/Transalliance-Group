import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { headerRoutes } from "../common/constants";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";

const Menu = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleNavigation = (path) => {
    onClose();
    navigate(path);
  };

  return (
    <Drawer
      open={isOpen}
      onClose={onClose}
      direction="top"
      style={{
        height: "fit-content",
        width: "100%",
        background: pathname.includes("business") ? "#2463EB" : "#0F172B",
      }}
    >
      <Box h="3px" bg="linear-gradient(88deg, #FF9D16 0%, #2463EB 100%)" />

      <Flex
        mt="15px"
        justifyContent="space-between"
        align="flex-start"
        w="full"
      >
        <Image src="/assets/logo.svg" w="96.67px" h="29px" />
        <MdClose onClick={onClose} size="20px" />
      </Flex>

      <Box mt="20px" px="15px">
        {headerRoutes.map((data, i) => (
          <Box
            px="20px"
            py="19px"
            borderBottom="1px solid #FFFFFF1A"
            _last={{ borderBottom: "1px solid #FF9D16" }}
            color="#fff"
            lineHeight="27px"
            w="full"
            key={i}
          >
            {data.isExternal ? (
              <a
                href={data.path}
                target="_blank"
                rel="noreferrer"
                onClick={onClose}
              >
                <Text
                  transition=".3s ease-in-out"
                  cursor="pointer"
                  _hover={{ color: "orange" }}
                >
                  {data.name}
                </Text>
              </a>
            ) : data.path ? (
              <Text
                onClick={() => handleNavigation(data.path)}
                cursor="pointer"
                transition=".3s ease-in-out"
                _hover={{ color: "orange" }}
              >
                {data.name}
              </Text>
            ) : (
              <ScrollLink
                to={data.id}
                smooth={true}
                duration={500}
                onClick={onClose}
                style={{ cursor: "pointer", textDecoration: "none" }}
              >
                <Text>{data.name}</Text>
              </ScrollLink>
            )}
          </Box>
        ))}
      </Box>

      <Flex
        mt="20px"
        pb="40px"
        justifyContent="center"
        align="center"
        gap="26px"
      >
        {[].map((item, i) => (
          <Flex
            key={i}
            border="1px solid #efefef"
            borderRadius="3px"
            justifyContent="center"
            align="center"
            w="40px"
            h="40px"
          >
            <a href={item.link} target="_blank" rel="noreferrer">
              <Image src={item.img} w="16px" h="16px" objectFit="contain" />
            </a>
          </Flex>
        ))}
      </Flex>
    </Drawer>
  );
};

export default Menu;
