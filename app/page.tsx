import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import SocialProof from "./components/SocialProof";
import Experts from "./components/Experts";
import Tremyda from "./components/Tremyda";
import BentoGrid from "./components/BentoGrid";
import styles from "./theme/page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      <Hero />
      <Services />
      <div className={styles.gridBackground}>
        <SocialProof />
        <Experts />
        <Tremyda />
        {/* <BentoGrid /> */}
      </div>
    </div>
  );
}
