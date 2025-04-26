import Header from '@/components/layout/index/header/Header';
import BestProducts from '@/components/layout/index/best-products/BestProducts';
import NewProducts from '@/components/layout/index/new-products/NewProducts';
import NewSets from '@/components/layout/index/new-sets/NewSets';
import Advantages from '@/components/layout/index/advantages/Advantages';
import LatestProduct from '@/components/layout/index/latest-products/LatestProduct';
import RecentBests from '@/components/layout/index/recent-bests/RecentBests';
import DiscountProducts from '@/components/layout/index/discount-products/DiscountProducts';
import Baner from '@/components/layout/index/baner/Baner';

export default async function Home() {
    return (
        <div className="container bg-white items-center justify-items-center min-h-screen font-kalameh font-normal">
            <Header />
            <BestProducts />
            <NewProducts />
            <DiscountProducts />
            <Baner />
            <LatestProduct />
            <NewSets />
            <RecentBests />
            <Advantages />
        </div>
    );
}
