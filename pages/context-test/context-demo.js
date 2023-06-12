import React, { useContext } from "react";
import { YourContextName } from "../../components/context";
import Link from "next/link";

export default function YourComponent() {
  const { testsList } = useContext(YourContextName);

  return (
    <div>
      <Link href="/another-context-data">Get to another-context-data</Link>
      {testsList.map((item) => (
        <div key={item.id}>
          {item.testName ? item.testName : item.specialTestName}
        </div>
      ))}
    </div>
  );
}
