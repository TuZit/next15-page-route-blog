import FeaturedPosteatured from "../components/home-page/feature-post";
import Hero from "../components/home-page/hero";

export const DUMMY_DATA = [
  {
    slug: "shiba",
    title: "Shiba",
    image: "shiba1.jpg",
    excerpt: "Hmu hmu",
    date: new Date(),
  },
];

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPosteatured posts={DUMMY_DATA} />
    </>
  );
}

export default HomePage;
