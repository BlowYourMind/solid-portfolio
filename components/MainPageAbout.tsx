import ConnectBlock from "./ConnectBlock";
import FavoriteBook from "./FavoriteBook";
import FavoriteSong from "./FavoriteSong";
import StackBlock from "./StackBlock";

const MainPageAbout = () => {
  return (
    <div className="mt-[10rem] max-w-5xl mx-auto flex flex-col gap-4">
      <h2 className="text-3xl font-bold text-center">About</h2>
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
