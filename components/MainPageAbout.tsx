import ConnectBlock from "./ConnectBlock";
import StackBlock from "./StackBlock";

const MainPageAbout = () => {
  return (
    <div className="mt-[10rem] max-w-5xl mx-auto flex flex-col gap-4">
      <h2 className="text-3xl font-bold text-center">About</h2>
      <div className="grid grid-cols-2 gap-6 mt-6 ">
        <StackBlock />
        <div className="flex flex-col gap-6 ">
          <ConnectBlock />
          {/* <SpotifyPlayer /> with the random music from my playlist because i am can listem to music all the time */}
        </div>
      </div>
    </div>
  );
};
export default MainPageAbout;
