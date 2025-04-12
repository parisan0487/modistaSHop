import BodyComp from "@/components/layout/body/bodyComp";
import FooterComp from "@/components/layout/footer/footerComp";
import HeaderComp from "@/components/layout/header/headerComp";
import "./globals.css"

export default function Home() {
  return (
    <div className="bg-[#ffffff] font-[400]  items-center justify-items-center min-h-screen  font-[family-name:var(--font-kalameh)]">
      <HeaderComp />
      <BodyComp />
      <FooterComp />
    </div>
  );
}
