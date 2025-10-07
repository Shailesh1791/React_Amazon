import React, { useEffect } from 'react';
import useFetch from "../hooks/customHook/CustomHookFetch";

type Props = {
  name: string;
};

const Greeting: React.FC<Props> = ({ name }) => {
  const data = useFetch("");
  useEffect(() => {
    console.log(data);
  }, []);
  return <h1>Hello, {name}!</h1>;
};

export default Greeting;