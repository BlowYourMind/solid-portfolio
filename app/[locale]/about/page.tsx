import AboutHeroSection from "@/components/AboutHeroSection";
import AboutRoadMap from "@/components/AboutRoadMap";
import FavoriteBook from "@/components/FavoriteBook";
import FavoriteSong from "@/components/FavoriteSong";

const AboutPage = () => {
  return (
    <div className="max-w-5xl mx-auto flex items-center justify-between my-10 px-2">
      <div className="flex gap-6 flex-col">
        <AboutHeroSection />
        <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] lg:grid-cols-[300px_1fr] gap-6">
          <div className="flex flex-col gap-6 md:row-start-1 row-start-2">
            <FavoriteBook />
            <FavoriteSong />
          </div>
          <AboutRoadMap />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
