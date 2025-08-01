import React from "react";
import Container from "../components/common/Container";
import Flex from "../components/common/Flex";
import { useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);
  const maxCount = 9;
  const minCount = 0;
  const incNum = () => {
    if (count < maxCount) {
      setCount(count + 1);
    }
  };
  const decNum = () => {
    if (count > minCount) {
      setCount(count - 1);
    }
  };
  return (
    <section>
      <Container>
        <Flex className={"flex-col justify-center h-[85vh]"}>
          <h1 className="text-5xl">Home</h1>
          <Flex className={"gap-10 py-10"}>
            <button
              className="btn"
              onClick={incNum}
            >
              +
            </button>
            <span className="text-3xl">{count}</span>
            <button
              class="btn"
              onClick={decNum}
            >
              -
            </button>
          </Flex>
        </Flex>
      </Container>
    </section>
  );
};

export default Home;
