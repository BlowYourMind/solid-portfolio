"use client";
import BackgroundImagesWrapper from "./BackgroundImagesWrapper";
import Footer from "./Footer";
import Header from "./Header";
export default function Main({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />

      <BackgroundImagesWrapper>{children}</BackgroundImagesWrapper>
      <Footer />
    </>
  );
}