"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import forest from "../public/assets/forest.svg"
import pirateship from "../public/assets/pirateship.svg"
import fantasytrees from "../public/assets/fantasytrees.svg"
import treeisland from "../public/assets/treeisland.svg"

export function BackgroundDecoration() {
  return (
    <div className="hidden 2xl:flex fixed bottom-10 w-full overflow-hidden pointer-events-none">
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          delay: 0.5,
        }}
        className="flex justify-between"
      >
        <Image
          src={pirateship}
          alt=""
          className="w-1/3 object-contain pr-[60px]"
        />
        <Image
          src={forest}
          alt=""
          className="w-1/3 lg:w-1/4 object-contain pr-5"
        />
      </motion.div>
    </div>
  )
}

