import React, { useContext } from "react";
import { YourContextName } from "../../components/context";

export default function SecondComponent() {
  const { testsList } = useContext(YourContextName);

  return (
    <div>
      <h1>Hello world</h1>
      {testsList.map((item) => (
        <div key={item.id}>
          {item.testName ? item.testName : item.specialTestName}
        </div>
      ))}
    </div>
  );
}
