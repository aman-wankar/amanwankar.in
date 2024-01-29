import { PropsWithChildren } from "react";
import { playfair } from "../app/layout";

const Heading = ({ children }: PropsWithChildren) => {
  return (
    <h1
      className={`${playfair.className} text-5xl 
        font-bold`}
    >
      {children}
    </h1>
  );
};

export default Heading;
