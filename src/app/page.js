import BodyComp from "@/components/layout/body/bodyComp";
import "./globals.css";
import Header from "@/components/layout/header/Header";

export default function Home() {
  return (
    <div className="bg-[#ffffff] font-[400]  items-center justify-items-center min-h-screen  font-[family-name:var(--font-kalameh)]">
      <Header />
      <BodyComp />
    </div>
  );
}
