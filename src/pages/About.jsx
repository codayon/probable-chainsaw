import React from "react";
import Container from "../components/common/Container";
import Flex from "../components/common/Flex";

const About = () => {
  return (
    <section>
      <Container>
        <Flex className={"justify-center h-[85vh]"}>
          <h1 className="text-5xl">About</h1>
        </Flex>
      </Container>
    </section>
  );
};

export default About;
