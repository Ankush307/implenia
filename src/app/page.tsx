import Campaign from "@/components/Campaign";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import ImpleniaBox from "@/components/ImpleniaBox";
import JoinCommunity from "@/components/JoinCommunity";
import Kickbox from "@/components/Kickbox";
import Stories from "@/components/Stories";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Kickbox />
      <Campaign />
      <ImpleniaBox />
      <JoinCommunity />
      <Stories />
      <Faq />
      <Footer />
    </>
  );
}
