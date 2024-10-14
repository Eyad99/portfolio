import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Paginate = ({ text, link }: { text: string; link: string }) => {
  const arrowVariants = {
    initial: { x: 0 },
    animate: {
      x: [0, 10, 0],
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };
  return (
    <Link href={link} passHref>
      <div className="flex items-center w-fit cursor-pointer hover:underline">
        <span className="text-lg font-semibold">{text}</span>
        <div className="w-8 flex justify-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={arrowVariants}
          >
            <ArrowRight className="w-6 h-6  " />
          </motion.div>
        </div>
      </div>
    </Link>
  );
};

export default Paginate;
