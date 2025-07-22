import React from "react";
import Container from "../common/Container";
import Flex from "../common/Flex";
import MenuItem from "../common/MenuItem";

const Header = () => {
  return (
    <section className="py-[2.5vh]">
      <Container>
        <ul className="flex items-center justify-center gap-16">
          <MenuItem label={"Home"} to={"/"} />
          <MenuItem label={"Contact"} to={"contact"} />
          <MenuItem label={"About"} to={"about"} />
        </ul>
      </Container>
    </section>
  );
};

export default Header;
