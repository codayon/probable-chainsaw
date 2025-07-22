import React from "react";
import Container from "../common/Container";
import Flex from "../common/Flex";

const Footer = () => {
  return (
    <section className="py-[2.5vh]">
      <Container>
        <Flex className={"justify-center"}>
          <p>GNU General Public License, version 3</p>
        </Flex>
      </Container>
    </section>
  );
};

export default Footer;
