import React from "react";
import { Box } from "@chakra-ui/react";
import AboutUs from "../components/data/Home/AboutUs";
import PaymentNetwork from "../components/data/Home/PaymentNetwork";
import Solutions from "../components/data/Home/Solutions";
import Portal from "../components/data/Home/Portal";
import Sectors from "../components/data/Home/Sectors";
import Report from "../components/data/Home/Report";
import Contact from "../components/data/Home/Contact";

const Home = () => {
  return (
    <Box>
      <AboutUs />
      <PaymentNetwork />
      <Solutions />
      <Portal />
      <Sectors />
      <Report />
      <Contact />
    </Box>
  );
};

export default Home;
