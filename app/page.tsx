import Hero from "./components/Hero";
import Services from "./components/Services";
import SocialProof from "./components/SocialProof";
import Experts from "./components/Experts";
import Tremyda from "./components/Tremyda";
import BentoGrid from "./components/BentoGrid";
import Outro from "./components/Outro";
import Footer from "./components/Footer";
import styles from "./theme/page.module.css";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <div className={styles.gridBackground}>
        <SocialProof />
        <Experts />
        <Tremyda />
        <BentoGrid />
        <Outro />
        <Footer />
      </div>
    </main>
  );
}
