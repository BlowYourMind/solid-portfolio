import { useTranslations } from "next-intl";
import ConnectBlock from "./ConnectBlock";
import FavoriteBook from "./FavoriteBook";
import FavoriteSong from "./FavoriteSong";
import StackBlock from "./StackBlock";
import { motion } from "motion/react";

const MainPageAbout = () => {
  const t = useTranslations("HomePage");
  return (
    <div className="mt-[10rem] max-w-5xl mx-auto flex flex-col gap-4">
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeOut" }}
        className="text-3xl font-bold text-center"
      >
        {t("layout.about")}
      </motion.div>
      <div className="grid gap-6 mt-6 ">
        <StackBlock />
        <div className="grid grid-cols-3 gap-6 ">
          <FavoriteSong />
          <ConnectBlock />
          <FavoriteBook />
        </div>
      </div>
    </div>
  );
};
export default MainPageAbout;
