import Campaign from "@/components/Campaign";
import Hero from "@/components/Hero";
import ImpleniaBox from "@/components/ImpleniaBox";
import Kickbox from "@/components/Kickbox";
import Stories from "@/components/Stories";

export default function Home() {
  return (
    <>
      <Hero />
      <Kickbox />
      <Campaign />
      <ImpleniaBox />
      <Stories />
    </>
  );
}
