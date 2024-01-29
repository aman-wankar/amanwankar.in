"use client";

import { dataObj } from "@/lib/notion";
import { motion } from "framer-motion";
import { ListItem } from "./listItem";

type Props = {
  dataArray: (
    | {
        id: string;
        date: string;
        data: dataObj[];
      }
    | undefined
  )[];
};

const variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const items = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 1,
  },
};

const List = ({ dataArray }: Props) => {
  return (
    <motion.ul variants={variants} initial="hidden" animate="show">
      {dataArray.map((item, index) => (
        <motion.li key={index} variants={items}>
          <ListItem data={item!} />
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default List;
