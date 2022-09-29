import React, { useState } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

const MyTab = () => {
  const [current, setCurrent] = useState("one");
  return (
    <div style={{ display: "flex" }}>
      <Tab value="one" active={current === "one"} onClick={setCurrent}>
        One
      </Tab>
      <Tab value="two" active={current === "two"} onClick={setCurrent}>
        Two
      </Tab>
      <Tab value="three" active={current === "three"} onClick={setCurrent}>
        Three
      </Tab>
    </div>
  );
};

export default MyTab;
