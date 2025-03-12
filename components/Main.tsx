import { cookies } from "next/headers";
import Footer from "./Footer";
import Header from "./Header";
import Image from "next/image";
import upperBG from "../public/gradient-background-top.webp";
import lowerBG from "../public/gradient-background-bottom.webp";
export default async function Main({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme")?.value || "dark";
  return (
    <>
      <Header theme={theme} />
      <Image
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2"
        src={upperBG}
        alt="upper_bacground"
        width={1512}
        height={550}
      ></Image>
      {children}
      <Footer />
      <Image
        className="absolute -bottom-6 left-1/2 -z-10 -translate-x-1/2"
        src={lowerBG}
        alt="lower_bacground"
        width={1512}
        height={447}
      ></Image>
    </>
  );
}
