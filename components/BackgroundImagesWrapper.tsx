import Image from "next/image";
import upperBG from "../public/gradient-background-top.webp";
import lowerBG from "../public/gradient-background-bottom.webp";
import { useAnimations } from "./AnimationsToggle";
import upperLight from "@/public/UpperBgLight.png";

const BackgroundImagesWrapper = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const { animationsEnabled } = useAnimations();

  return (
    <div className="pt-24 px-2 md:px-6">
      <Image
        className={`absolute dark:hidden left-1/2 top-0 -z-10 -translate-x-1/2 ${
          animationsEnabled ? "animate-pulse-opacity" : ""
        }`}
        src={upperLight}
        alt="upper_background"
        width={1512}
        height={550}
      />
      <Image
        className={`absolute dark:block hidden left-1/2 top-0 -z-10 -translate-x-1/2 ${
          animationsEnabled ? "animate-pulse-opacity" : ""
        }`}
        src={upperBG}
        alt="upper_background"
        width={1512}
        height={550}
      />
      {children}
      <Image
        className={`absolute dark:block hidden -bottom-6 left-1/2 -z-10 -translate-x-1/2 ${
          animationsEnabled ? "animate-pulse-opacity" : ""
        }`}
        src={lowerBG}
        alt="lower_background"
        width={1512}
        height={447}
      />
      <Image
        className={`absolute dark:hidden rotate-180 -bottom-6 left-1/2 -z-10 -translate-x-1/2 ${
          animationsEnabled ? "animate-pulse-opacity" : ""
        }`}
        src={upperLight}
        alt="lower_background"
        width={1512}
        height={447}
      />
    </div>
  );
};
export default BackgroundImagesWrapper;
