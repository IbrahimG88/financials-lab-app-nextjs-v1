import React, { createContext, useState, useEffect } from "react";
import { fetcher } from "../lib/fetcher";

export const YourContextName = createContext();

export const YourContextNameProvider = ({ children }) => {
  const [testsList, setTestsList] = useState([]);

  // modify to get testsList:
  useEffect(() => {
    const fetchTestsList = async () => {
      const data = await fetcher("/api/get-testslist");

      // update testsList value if its value has changed each 5 seconds interval
      if (data && JSON.stringify(data) !== JSON.stringify(testsList)) {
        setTestsList(data);
      } else if (!data) {
        console.error("Error fetching tests list from database");
      }
    };

    fetchTestsList();

    // Refresh data every 5 seconds
    const intervalId = setInterval(() => fetchTestsList(), 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [testsList]);

  return (
    <YourContextName.Provider value={{ testsList }}>
      {children}
    </YourContextName.Provider>
  );
};

export default YourContextName;
