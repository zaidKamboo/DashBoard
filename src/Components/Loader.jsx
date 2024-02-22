// Loader.js

import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="flex absolute w-[100vw] top-0 left-0 justify-center items-center bg-[#111111a8] min-h-screen">
      <h2 className="text-white capitalize tracking-wide font-semibold text-4xl">
        load
      </h2>
      <motion.div
        className="w-10 h-10 border-t-4 border-zinc-100 rounded-full animate-spin"
        style={{ borderTopColor: "zinc-100" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      ></motion.div>
      <h2 className="text-white tracking-wide font-semibold text-4xl">ing</h2>
    </div>
  );
};

export default Loader;
