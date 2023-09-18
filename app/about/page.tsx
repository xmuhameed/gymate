import { Landing } from "@/Components/Landing";
import { GalleryAbout } from "@/Components/aboutPage/GalleryAbout";
import { WhoAreWeAbout } from "@/Components/aboutPage/WhoAreWeAbout";


const about = () => {
  return (
    <>
      <Landing mainHeading="About Us" />
      <main className="w-sreen mx-8">
        <WhoAreWeAbout />
        <GalleryAbout />
      </main>
    </>
  );
};
export default about;
