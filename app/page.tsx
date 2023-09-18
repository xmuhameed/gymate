import { Bmi } from "@/Components/homePage/Bmi";
import { GymTrainers } from "@/Components/homePage/GymTrainers";
import { GymateGallery } from "@/Components/homePage/GymateGallery";
import { Hero } from "@/Components/homePage/Hero";
import { LatestBlog } from "@/Components/homePage/LatestBlog";
import { NeedAFitnessTrainer } from "@/Components/homePage/NeedAFitnessTrainer";
import { OurFeaturedClass } from "@/Components/homePage/OurFeaturedClass";
import { PricingChart } from "@/Components/homePage/PricingChart";
import { Testimonials } from "@/Components/homePage/Testimonials";
import { WhoWeAre } from "@/Components/homePage/WhoWeAre";
import { WhyChooseUs } from "@/Components/homePage/WhyChooseUs";

export default function Home() {
  return (
    <main className="">
      <Hero />
      {/* container "mx-10 xl:mx-36" */}
      <WhoWeAre />
      <OurFeaturedClass />
      <WhyChooseUs />
      <GymTrainers />
      <Testimonials />
      <GymateGallery />
      <Bmi />
      <PricingChart />
      <LatestBlog />
      <NeedAFitnessTrainer />
    </main>
  );
}
