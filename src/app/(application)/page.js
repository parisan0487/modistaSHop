import Header from "@/components/layout/index/header/Header";
import BestProducts from "@/components/layout/index/best-product/best";
import NewProducts from "@/components/layout/index/new-product/newProducts";
import NewSets from "@/components/layout/index/new-sets/NewSets";
import Advantages from "@/components/layout/index/advantages/Advantages";
import LatestProduct from "@/components/layout/index/latest-product/LatestProduct";

export default function Home() {
  return (
    <div className="container bg-[#ffffff] font-[400]  items-center justify-items-center min-h-screen  font-[family-name:var(--font-kalameh)]">
      <Header />
      <BestProducts />
      <NewProducts />
      <NewSets />
      <Advantages />
      <LatestProduct />
    </div>
  );
}
