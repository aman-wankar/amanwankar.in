import { PropsWithChildren } from "react";

const Heading = ({ children }: PropsWithChildren) => {
  return <h1 className="font-playfair text-5xl font-bold">{children}</h1>;
};

export default Heading;
