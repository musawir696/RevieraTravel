import Header from "../components/Navbar";
import HeroSection from "./component/herosection";
import TopPicks from "./component/top-picks";
import PlanVacation from "./component/plan-vacation";
import WhyBookWithUs from "./component/why-book-us";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
        <Header/>
      <HeroSection />
      <TopPicks/>
      <PlanVacation/>
      <WhyBookWithUs/>
      <Footer/>
    </div>
  );
}