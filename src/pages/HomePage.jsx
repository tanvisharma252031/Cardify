
import HomeHero from "../components/HomeHero";
import CardShowcase from "../components/CardShowcase";
import HomeCTA from "../components/HomeCTA";

import "../styles/HomePage.css";

function HomePage() {
  return (
    <main className="home-page">

      <section className="home-hero">
        <HomeHero />
        <CardShowcase />
      </section>

      <HomeCTA />

    </main>
  );
}

export default HomePage;
