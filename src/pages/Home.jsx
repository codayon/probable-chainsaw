import React from "react";
import Container from "../components/common/Container";
import Flex from "../components/common/Flex";

const Home = () => {
  return (
    <section>
      <Container>
        <Flex className={'justify-center h-[80vh]'}>
          <h1 className="text-6xl">Home</h1>
        </Flex>
      </Container>
    </section>
  );
};

export default Home;
