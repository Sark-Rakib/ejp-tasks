import FeaturedProducts from "@/Component/FeatureProdutcs";
import Hero from "@/Component/Hero";
import Reviews from "@/Component/Review";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-11/12 mx-auto my-10">
      <Hero></Hero>
      <FeaturedProducts></FeaturedProducts>
      <Reviews></Reviews>
    </div>
  );
}
