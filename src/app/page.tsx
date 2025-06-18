
import Header from "./components/Header";
import Banner from "./components/Banner"; 
import InteractiveHome from "./components/InteractiveHome";
import Stacked3DSections from "./components/Stacked3DSections";
import ScrollSteps from "./components/ScrollSteps";
import CaseStudiesScroll from "./components/CasestudiesScroll";
import OurStory from "./components/OurStory";
import Footer from "./components/Footer";

export default function Home() {
  return (
   <>
<Header />
<Banner />
<InteractiveHome />
<Stacked3DSections />
<ScrollSteps />
<CaseStudiesScroll />
<OurStory />
<Footer />
   </>
  );
}
